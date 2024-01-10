let s="abciiidef"
let k=3

function check(ch){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        return true
    }
    return false
}
function MaxVowelSet(s,k){
    let c=0;
    let maxCount=0;
    for(let i=0;i<k;i++){
        if(check(s[i])){
            c++
        }
    }
    maxCount=Math.max(maxCount,c)
    for(let i=k;i<s.length;i++){
        if(check(s[i])){
            c++
        }
        if(check(s[i-k])){
            c--
        }
        maxCount=Math.max(maxCount,c)
    }
    return maxCount
}
console.log(MaxVowelSet(s,k))