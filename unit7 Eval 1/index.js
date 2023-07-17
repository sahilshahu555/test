const helperFuncs = require('./helper_functions');

const inputs = process.argv;
const method = inputs[2];

if(method === 'gip'){
    const website = inputs[3];
    helperFuncs.getIP(website);
}
else if(method === 'wf'){
    const fileName = inputs[3];
    const content = inputs[4];
    helperFuncs.wirteToFile(fileName,content);
}
else if(method === 'rf'){
    const fileName = inputs[3];
    helperFuncs.readAFile(fileName);
}
else if(method === 'df'){
    const fileName = inputs[3];
    helperFuncs.deleteAFile(fileName);
}
else if(method === 'mcw'){
    const content = inputs[3];
    helperFuncs.makeCowSay(content);
}