let str="Concept of The Day";

function Reverse(str){
    if(str.length==0){
        return "";
    }
    return Reverse(str.slice(1))+str[0]
}

// console.log(Reverse("Concept"));

function revSentWord(sent){
    let word=sent.split(" ")
    for(let i=0;i<word.length;i++){
        word[i]=Reverse(word[i])
    }
    return word.join(" ")
}
console.log(revSentWord(str));