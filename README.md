# fileView

fileView is a command-line tool that allows you to view the contents of files with various options.

## Features

- Display the contents of a file in the terminal.
- Display the contents of multiple files in the given order.
- Ignore empty lines using `-s` option.
- Number all the lines using the `-n` option.
- Number only lines with code using the `-b` option.

## Demo
https://github.com/Kise07/fileView/assets/73417521/23b6fd5c-0cf4-4cc1-be44-3815ff4268b3



## Usage

To use fileView, follow the instructions below:

1. Clone the repository:

```bash
git clone https://github.com/Kise07/fileView
```

2. Navigate to the project directory:
```bash
cd fileView
```

3. Run the fileView command:
```bash
node view.js [options] [filepaths]
```

Replace `[options]` with any of the available options described below, and `[filepaths]` with the paths to the files you want to view.

# Options

* `-s`: Ignores emoty lines and extra spaces in the file(s).
* `-n`: Numbers all lines in the file(s).
* `-b`: Numbers only the lines with code in the file(s).

# Examples

* View the contents of a single file:
```bash
node view.js sample.txt
```
* View the contents of multiple files:
```bash
node view.js file1.txt file2.txt file3.txt
```

* View the contents of files with the `-s` option:
```bash
node view.js -s file1.txt file2.txt
```

* View the contents of files with the `-n` option:
```bash
node view.js -n file1.txt file2.txt
```

* View the contents of files
ith the `-b` option:
```bash
node view.js -b file1.txt file2.txt
```
## License

This project is licensed under the [MIT License](LICENSE).
