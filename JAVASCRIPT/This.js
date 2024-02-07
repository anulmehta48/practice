
// let obj={
//     myfun: function (){
//         console.log(this);
//     }
// }
// obj.myfun()



// let obj={
//     name:"anul"
// }
 
// function show(){
//     const x=10;
//     function test(){
//         console.log(this);
//     }
//    new test();
// }
// show()

const obj={
    lang:"X",
    show:()=>{
        console.log(this.lang);
        const thisArrow=()=>{
            console.log(this);
        }
    }
}
obj.show()