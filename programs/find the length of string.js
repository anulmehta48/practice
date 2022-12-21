//find the length of given string without length function used
let str="anulmehta"
function legthcount(str){
    let count=0
    for(let i=0;str.charAt(i)!='';i++){
        count++
    }
    return count
}
console.log(legthcount(str))

