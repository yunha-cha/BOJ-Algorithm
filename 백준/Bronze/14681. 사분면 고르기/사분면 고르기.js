const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n").map(x=> +x);

let result=0;
if(input[1] >0){
    result = input[0]>0 ? 1 : 2;
}else if(input[1] < 0){
    result = input[0]>0 ? 4 : 3;
}
console.log(result)