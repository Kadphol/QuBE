  const prod = {
    URL: 'http://68.183.155.239',
  };
  
  const dev = {
    URL: 'http://localhost:80',
  };
  
  module.exports = process.env.NODE_ENV === 'development' ? dev : prod