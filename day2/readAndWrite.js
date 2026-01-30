import fs from 'fs';
const writeFileSync=(path,data) =>{
    try{
        fs.writeFileSync(path,data);
        console.log("File written successfully");
    }
    catch(error){
        console.log("Error writing file:", error);
    }
}
writeFileSync('example.txt','Hello, this is a test file!');