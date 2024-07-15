// mkdir and rmdir

const fs = require('fs');
const path = require('path');
/*
fs.mkdir('./new-files', (err) => {
    if (err) throw err;
    console.log('directory created!');
}); */
/*
fs.rmdir('./new-files', (err) => {
    if (err) throw err;
    console.log('directory removed!');
}); */
//----------------------------------------------------------------------//
// we also check to see if there is already an existing directory with the help of existsSync() method

if (!fs.existsSync('.new-files')) {
    fs.mkdir('./new-files', (err) => {
        if(err) throw err;
        console.log('directory created');
    }) 
} 

if (fs.existsSync('./new-files')) {
    fs.rmdir('./new-files', (err) => {
        if (err) throw err;
        console.log('directory removed');
    }) 
} 

























