  const prod = {
    URL: 'http://localhost:8080',
  };
  
  const dev = {
    URL: 'http://localhost:80',
  };
  
  module.exports = process.env.NODE_ENV === 'development' ? dev : prod