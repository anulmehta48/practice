// function isRotation(s1, s2) {
//     if (s1.length !== s2.length)
//         return false
//     //s1+s1 = ABCDABCD   //ACBD //DACB
//     else if ((s1 + s1).indexOf(s2) != -1)
//         return true
//     else
//         return false
// }
// console.log(isRotation("ABCD","CDAB"))
// console.log(isRotation("ABCD", "DACB"))


function roatated(s1,s2){
    if(s1.length != s2.length){
        return false
    }else if((s1 + s1).indexOf(s2) != -1){
        return true
    }else{
        return false
    }
}
console.log(roatated("anul","ulna"))


    //s1+s1 = ABCDABCD   //ACBD //DACB
