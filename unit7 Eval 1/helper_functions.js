const dns = require('dns');
const fs = require('fs');
const cowsay = require("cowsay");

const getIP = (website) => {
    dns.lookup(website, (err,address)=>{
        if(err){ console.log(err); }
        else{ console.log(address); }
    })
}

const wirteToFile =(filename, content) => {
    fs.writeFile(`${filename}`,content , (err)=>{
        if(err){console.log(err);}else{
            console.log('The content was successfully written')
        }
    })
}

const readAFile = (filename) =>{
    fs.readFile(`${filename}`, 'utf8', (err, fd)=>{
        if(err){ console.log(err); }
        else{ console.log(fd); }
    })
}

const deleteAFile = (filename) =>{
    fs.unlink(`${filename}`, (err)=>{
        if(err){ console.log(err);}
        else{ console.log("File deleted successfully."); }
    })
}

const makeCowSay = (content) => {
    console.log(cowsay.say({ text:content, e:'oo', T:'-- '}));
}

module.exports = {
    getIP,
    wirteToFile,
    readAFile,
    deleteAFile,
    makeCowSay
}