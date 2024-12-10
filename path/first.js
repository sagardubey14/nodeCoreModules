const path = require('node:path');

console.log(path.join('folder1','childfolder1','files'));
// Purpose: Combines multiple path segments into one complete path. 
// It automatically adds or removes directory separators as needed to form a valid path.
// Usage: It's often used when building paths dynamically, especially when you're working 
// with file directories across different operating systems (e.g., Windows vs. Unix-based systems).


const absolutePath = path.resolve('user', 'files', 'file.txt');
// C:\Users\Edgeshot\Desktop\Projects\nodeCoreModules\path\user\files\file.txt

const alterPath = path.resolve('/user', 'files', 'file.txt');
// C:\user\files\file.txt

const alterPath2 = path.resolve('/user', '/files', 'file.txt');
// C:\files\file.txt

console.log(absolutePath); 
console.log(alterPath); 
console.log(alterPath2); 
// Purpose: Resolves a sequence of paths or path segments into an absolute path. 
// It processes the given paths from right to left, prepending them until an absolute path is found. 
// If no absolute path is found, it uses the current working directory.
// Usage: Useful when you want to convert a relative path into an absolute one based on the current working directory.


const fileName = path.basename(__filename);
console.log(fileName); // Output: 'first.js'

const fileNameWithoutExt = path.basename(__filename, '.js');
console.log(fileNameWithoutExt); // Output: 'first'
// Purpose: Returns the last portion of a path, which is usually the filename. 
// Optionally, you can also pass an extension to remove it from the result.
// Usage: When you want to extract just the filename from a full path.


const extension = path.extname(__filename);
console.log(extension); // Output: '.js'
// Purpose: Returns the extension of the given path, including the dot (.). 
// This is helpful for identifying the file type.
// Usage: Commonly used when working with file uploads or when validating file types.


console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('../fs/sample.txt')); // false
// Purpose: Checks if the given path is absolute or relative.
// Usage: Often used to validate whether a given path is absolute, 
// especially when working with file system operations.

const parsedPath = path.parse(__filename);
console.log(parsedPath);
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Edgeshot\\Desktop\\Projects\\nodeCoreModules\\path',
//     base: 'first.js',
//     ext: '.js',
//     name: 'first'
// }
// Purpose: Parses a path into an object containing the root, directory, basename, extension, and name.
// Usage: Useful when you need to break down a file path into its components.


const pathObject = {
    root: 'C:\\',
    dir: 'C:\\Users\\Edgeshot\\Desktop\\Projects\\nodeCoreModules\\path',
    base: 'first.js',
    ext: '.js',
    name: 'first'
}

const formattedPath = path.format(pathObject);
console.log(formattedPath); 
// Output: 'C:\Users\Edgeshot\Desktop\Projects\nodeCoreModules\path\first.js'
// Purpose: Converts an object returned by path.parse() back into a path string.
// Usage: Useful when you want to build a path from the individual components.


const normalizedPath = path.normalize('/user/files/../docs/./file.txt');
console.log(normalizedPath); 
// Output: '/user/docs/file.txt'
// Purpose: Normalizes a given path, resolving any .. or . segments to provide a clean and absolute path. 
// This is helpful for dealing with paths that may contain redundant or extraneous elements.
// Usage: Typically used to clean up paths when concatenating or processing file paths.