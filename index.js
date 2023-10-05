const querystring = require('querystring');
const { Curl } = require('node-libcurl');

const curlTest = new Curl();

const terminate = curlTest.close.bind(curlTest);
curlTest.setOpt(Curl.option.URL, 'http://51.79.160.227:1922/api/datasheet/viewDataSheet?id=1');

curlTest.on('end', function (statusCode, data, headers) {
  console.info('response: ' + data);

  this.close();
});
curlTest.on('error', terminate);

curlTest.perform();
