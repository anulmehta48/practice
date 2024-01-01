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