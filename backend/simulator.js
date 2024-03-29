const qiskit = require('qiskit');

const Circuit = require('./custom_module/Circuit')
const router = require('express').Router();

function weightedRand(spec) {
    var i, sum = 0, r = Math.random();
    for (i in spec) {
        sum += spec[i];
        if (r <= sum) return i;
    }
    return null
}

router.post('/', (req, res) => {
    data = req.body
    console.log(data)
    const circuit = Circuit.createCircuit(data.n);

    data.cc.forEach(el => {
        circuit.addGate(el.gate, el.col, el.line)
    });

    const input = Array(data.n).fill(0)

    console.log('\nInput:');
    console.log(input);

    console.log('\nRunning the circuit now ...');
    circuit.run(input);

    // console.log('\nDone, internal state:');
    // console.log(circuit.state);

    console.log('\nInternal state (as string):');
    console.log(circuit.stateToString());
    let result = circuit.stateToString().split('\n')
    result = result.map(el => el.split('|')[1])

    let stateLabels = result.map(el => el.split('>')[0])
    let stateValues = result.map(el => parseFloat(el.split('>')[1]))

    let stateVector = {}
    let measure = {}

    stateLabels.map((label, i) => {
        stateVector[label] = stateValues[i] / 100
        measure[label] = 0
    })

    for (var i = 0; i < data.shot; i++) {
        let random = weightedRand(stateVector)
        if(random!==null) measure[random] += 1
    }
    measureValues = Object.values(measure)
    measureLabels = Object.keys(measure)

    if (measureLabels.length > 2) { // shift half of length (wrong order problem)
        measureValues = measureValues.concat(measureValues.splice(0, measureLabels.length / 2));
        measureLabels = measureLabels.concat(measureLabels.splice(0, measureLabels.length / 2));
    }

    console.log(measureLabels, measureValues)
    res.send({ measureLabels, measureValues, stateValues })
});

module.exports = router;