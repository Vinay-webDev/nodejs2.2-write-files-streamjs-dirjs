// when we have huge data to access

const fs = require('fs');
const path = require('path');

const rs = fs.ReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'});

const ws = fs.WriteStream(path.join(__dirname, 'files', 'new-lorem.txt'));

// on() method
// pipe() method which is even more faster than on() method*****
/*
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
}); */

//rs.pipe(ws);





















