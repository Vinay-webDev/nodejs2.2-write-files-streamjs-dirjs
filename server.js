// async 
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
     try {
        const data = await fsPromises.readFile(path.join(__dirname, 'rfiles', 'hi.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'rfiles', 'hi.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'rfiles', 'hello.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'rfiles', 'hello.txt'), '\n\n nice to meet you bro🤝');
        await fsPromises.rename(path.join(__dirname, 'rfiles', 'hello.txt'), path.join(__dirname, 'rfiles', 'new-hello.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'rfiles', 'new-hello.txt'), 'utf8');
        console.log(newData);
     } catch (err) {
        console.error(err);
     }
}
fileOps();






















