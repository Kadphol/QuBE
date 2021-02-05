  const prod = {
    URL: 'https:/qube.heroku.com',
  };
  
  const dev = {
    URL: 'http://localhost:80',
  };
  
  module.exports = process.env.NODE_ENV === 'development' ? dev : prod