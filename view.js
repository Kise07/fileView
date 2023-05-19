const fs = require('fs');

let inputArr = process.argv.slice(2);
let filesArr = [];
let optionsArr = [];

// Step 1: Parsing command line arguments
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar === '-') {
        optionsArr.push(inputArr[i]); // Collecting options like -s, -n, -b
    } else {
        filesArr.push(inputArr[i]); // Collecting file paths
    }
}

// Step 2: Checking if all the files exist
for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log('One or more files do not exist');
        process.exit();
    }
}

let content = '';

// Step 3: Reading file contents and storing them in 'content' variable
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + '\n';
}

let contentArr = content.split('\n');

let isSpresent = optionsArr.includes('-s');

// Step 4: Handling the -s option
if (isSpresent) {
    let tempArr = [];

    // Step 4.1: Removing extra empty lines
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == '' && contentArr[i - 1] == '') {
            contentArr[i] = null;
        } else if (contentArr[i] == '' && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }

    // Step 4.2: Creating a new array without null values
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }

    // console.log(`Data after removing extra lines:\n`, tempArr);
    contentArr = tempArr;
}

// Rest of your code for handling other options

// Step 5: Checking other options independently and combined
if (optionsArr.includes('-n') && optionsArr.includes('-b')) {
    console.log(`Options -n and -b cannot be used together.`);
    process.exit();
}

if (optionsArr.includes('-n')) {
    modifyContentByN();
}

if (optionsArr.includes('-b')) {
    modifyContentByB();
}

console.log(`Data after applying options:`, contentArr);

// Option -n: Numbers all the lines
function modifyContentByN() {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = (i + 1) + ') ' + contentArr[i];
    }
}

// Option -b: Numbers only lines with code
function modifyContentByB() {
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != '') {
            contentArr[i] = count + ') ' + contentArr[i];
            count++;
        }
    }
}
