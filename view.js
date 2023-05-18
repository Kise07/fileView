const fs = require('fs'); // fileSystem Module
let input = process.argv;
// console.log(input);

let inputArr = process.argv.slice(2); // remove 1st {2} paths
// console.log(inputArr);

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
// console.log(content);

// * > 2) node view.js [Multi-FilePaths] => displays the contents of all files in terminal in given order < *
let contentArr = content.split('\n'); // store files data in Array format
// console.table(contentArr);

// * > 3) node view.js [Options] [Filepaths] => ignores the spaces\new lines
// =======> -s command -> checking if {-s} is present or not
let tempArr = []; // data storing in empty Array

// See README.md for Edge Cases & All
let isSpresent = optionsArr.includes('-s'); // 3rd Edge case
// Option -s:
if (isSpresent) { // Step 1:
    for (let i = 1; i < contentArr.length[i]; i++) {
        if (contentArr[i] == '' && contentArr[i - 1] == '') { // if -> checking if lines are {empty}
            contentArr[i] = null;
        } else if (contentArr[i] == '' && contentArr[i - 1] == null) { // else -> checking if {empty OR null}
            contentArr[i] = null;
        }
    }
    // console.log(contentArr);

    // Step 2: push everything in tempArr except null values
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) { // if -> checking whether or not line is null
            tempArr.push(contentArr[i]);
        }
    }
    console.log(`data after removing extra lines\n`, tempArr);
}

contentArr = tempArr; // storing data from ContentArr to tempArr