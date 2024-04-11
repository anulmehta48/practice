let s="abciiidef";
let k=4

function check(ch){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        return true
    }
    return false
}

function MaxVowelSubset(s,k){
    let count=0;
    let maxCount=0;

    for(let i=0;i<k;i++){
        if(check(s[i])){
            count++
        }
        maxCount=Math.max(count,maxCount)
        for(let i=k;i<s.length;i++){
            if(check(s[i])){
                count++
            }
            if(check(s[i-k])){
                count--
            }
            maxCount=Math.max(count,maxCount)
        }
    }
    return maxCount
}
console.log(MaxVowelSubset(s,k));