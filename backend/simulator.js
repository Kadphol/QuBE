const API_TOKEN = '78ff82ce42b3e26abb9479f9582835b1efaa84d96ecc354f793d20aae655def2abf621ba067eaceef687a625a173837703d3c69fa95c0beeae46ae1870e4393a'
const qiskit = require('qiskit');
const cloud = new qiskit.Cloud();
// const { Circuit, Gate } = require('@qiskit/sim');
const Circuit = require('./custom_module/Circuit')

module.exports = (app) => { 
    app.post('/sim', (req, res) => {

        data = req.body
        console.log(data)
        const circuit = Circuit.createCircuit(data.n);

        data.cc.forEach(el => {
            circuit.addGate(el.gate,el.col,el.line)
        });

        const input = Array(data.n).fill(0)

        console.log('\nInput:');
        console.log(input);

        console.log('\nRunning the circuit now ...');
        circuit.run(input);

        console.log('\nDone, internal state:');
        console.log(circuit.state);

        console.log('\nInternal state (as string):');
        console.log(circuit.stateToString());
        let result = circuit.stateToString().split('\n')
        result = result.map(el=>el.split('|')[1])
        let labels = result.map(el=>el.split('>')[0])
        let values = result.map(el=>parseFloat(el.split('>')[1]))
        console.log(labels,values)
        res.send({labels,values})
    });
}