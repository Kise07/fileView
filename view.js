const fs = require('fs'); // fileSystem Module
let input = process.argv;
// console.log(input);

let inputArr = process.argv.slice(2); // remove 1st {2} paths
console.log(inputArr);

let filesArr = []; // empty files array!
let optionsArr = []; // empty options array!

// =======> Placing files path to be read in filesArr
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0); // 1st character of inputArr
    // console.log(firstChar);
    if (firstChar == '-') { // checking 1st character
        optionsArr.push(inputArr[i]); // push it to optionsArr
    } else {
        filesArr.push(inputArr[i]); // push it to filesArr
    }
}
// console.log('files to be read are: ' + filesArr); // all files path

// =======> Check if all the files are present as given in terminal
for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]); // check files exist
    if (!doesExist) { // if not exist
        console.log('One or more files does not exists');
        process.exit(); // ends the |^|{process.argv}|^|
    }
}

// *** >>> 1) node view.js [filepath] => displays the contents of a file in terminal <<< ***
// =======> Content Read & Appending Starts
let content = ''; // empty variable for storing data
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + '\n'; // appending data with {\n}
}
console.log(content);