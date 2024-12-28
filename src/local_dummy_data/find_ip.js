const os = require('os');
console.log('IP Address: ' + JSON.stringify(os.networkInterfaces()['Wi-Fi']).match(/"192.168.\d+.\d+"/g)[0])