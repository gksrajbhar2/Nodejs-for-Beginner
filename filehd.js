
const  fs = require('fs'); //fs is a module in node js which is used to read and write files

//write file
//Sync..
//fs.writeFileSync('./read.txt', 'Hello World !'); // this method is used to write a file

//Async..
// fs.writeFile('./read.txt', 'Hello World ! Async', (err) => {
//     if(err){

//     }

// });


//Read file
// const data = fs.readFileSync('./read.txt', 'utf8');
// console.log(data);

//Async..
// fs.readFile('./read.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });


// fs.appendFile('./read.txt', 'Hello World ! \nThis is a new line', (err) => {
//     if(err){
//         console.error(err);
//     }
// });


// fs.copyFile('./read.txt', './read_copy.txt', (err) => {
//     if(err){
//         console.error(err);
//     } 
// });

// fs.unlink('./read_copy.txt', (err) => {
//     if(err){
//         console.error(err);
//     }   
// });
// fs.mkdir('./new_folder',{ recursive: true }, (err) => {
//     if(err){
//         console.error(err);
//     }   
// });


//this method is used to delete a folder
// fs.rm('./new_folder', { recursive: true }, (err) => {
//     if(err){
//         console.error(err);
//     }
// });

fs.stat('./read.txt', (err, stats) => {
    if(err){
        console.error(err);         q
    } else {
        console.log(stats);
        console.log("Is file ? ", stats.isFile());
        console.log("Is directory ? ", stats.isDirectory());
    }   
});