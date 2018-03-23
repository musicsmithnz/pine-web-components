'use strict'

var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI({
    host: 'localhost', 
    port: '5001', 
    protocol: 'http'
});

    ipfs.files.add({
        path: 'something.txt',
        content: Buffer.from('raymonds new file')
    }, (err, filesAdded) => {
        if (err) {
            console.log(err)
        }
        console.log('\nAdded file:', filesAdded[0].path, filesAdded[0].hash)
        var fileMultihash = filesAdded[0].hash
    })
