const fs = require('fs');

const appendData = 'This data will be appended to the file.\n';

fs.appendFile('example.txt', appendData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data appended to file!');
});

const content = 'This data will be written to the file.\n';

fs.open('example2.txt', 'w', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile(fd, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully!');
        fs.close(fd, (err) => {
            if (err) {
                console.error(err);
            }
            console.log('File closed successfully!');
        });
    });
});


const data = 'This data will overwrite the content of the file.\n';

fs.writeFile('example3.txt', data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully!');
});
