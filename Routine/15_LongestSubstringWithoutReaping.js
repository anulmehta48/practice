let s="abcabcbb"

function LongestSubstring(s){
    let frq={}
    let start=0;
    let ans=0;

    for(let i=0;i<s.length;i++){
        while(frq[s[i]]==1){
            frq[s[start]]=0;
            start++
        }
        frq[s[i]]=1
        ans=Math.max(ans,i-start+1)
    }
    return ans
}

console.log(LongestSubstring(s));