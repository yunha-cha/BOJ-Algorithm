let input= require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

let n = input.shift()
input = input.map(x=>+x)
for(let el of input){
    let q = parseInt(el / 25)
    el %= 25
    let d = parseInt(el / 10)
    el %= 10
    let n = parseInt(el / 5)
    let p = el % 5
    console.log(q,d,n,p)
}
