//setTimeout=> setTimeout is a asynchronous function that takes the callback function and store somewhere and
// attaches the timer with it and when the timer expire then it calls the callback function that’s it and
// java-script does not wait for at that time for itself that means all other code executed normally.

// setTimeout(()=>{
// 	console.log("hello")
// },3000)


function fun1(){
    let i=1;
    setInterval(()=>{
        console.log(i)
    },1000)
}

fun1()


//print the time seconds using setiTimeout using let variable  like 1,2,3,4,5 

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i)
        },i*1000)
    }
    console.log("Namaste javascript")
}
x()



//print the time seconds using setiTimeout using var variable  like 1,2,3,4,5 

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//             },i*1000)
//         }
//         close(i)
//     }
//     console.log("Namste Javascript")
// }
// x()