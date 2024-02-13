// find the maximum vowel subset of k in  array 

let str="functionup"
let k=4;

function check(ch){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        return true
    }
    return false
}
function MaxVowelSubset(str,k){
    let cout=0;
    let maxcount=0;
    for(let i=0;i<str.length;i++){
        if(check(str[i])){
            cout++
        }
    }
    maxcount=Math.max(maxcount,cout)
    for(let i=k;i<str.length;i++){
        if(check(str[i])){
            cout++
        }
        if(check(str[i-k])){
            cout--
        }
        maxcount=Math.max(maxcount,cout)
    }
    return maxcount
}
console.log(MaxVowelSubset(str,k));