// You need to write program 
// 1. find the longest common prefix string amongst an array of strings.


// , if there is no common prefix, return an string "";


// Sample INput : 
// strs = ["ANUL", "ANSHUL", "ANAMIKA"]
// Sample OUTPUT: 
// "AN"

// Sample INPUT:
// strs =["a", "b", "c"]
// Sample OUTPUT:
// ""

let str=["ANUL", "ANSHUL", "ANAMIKA"]

function prefix(str){
    if(str.length==0 ){
        return "";
    }
    // for(let i=0;i<str[0].length;i++){
    //     for(let j=1;j<str.length;j++){
    //         if(str[0][i]!=str[j][i]){
    //             return str[0].slice(0,i)
    //         }
    //     }
    // }
    let k=str[0]
    for(let i of str){
        while(i.indexOf(k)!=0){
            k=k.substr(0,k.length-1)
            if(k==""){
                break;
            }
        }
    }
    
    return k
}
console.log(prefix(str))