// let a=1  // here we take a veriable a and assign value 1
// let b=2  // here we take a veriable a and assign value 2
// let c=a+b  // here c take 
// console.log(c)



// function my(a,b) { //
//     let c=a+b
//     console.log(c)
// }
// my(5,5)


// function my(a,b) {
//     let c=a+b
//     console.log(c)
// }
// let k=my(6,6)
// console.log(k)

let l1=[2,3,5]
let l2=[1,2,3]

function addTwoNumbers(l1, l2) {
    let num1=[];
    for(let i=0;i<l1.length;i++){
        num1.push(l1[i]+l2[i])
        // console.log(num1)
    }
    return num1
};

console.log(addTwoNumbers(l1,l2))