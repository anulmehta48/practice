
let sentense="my name is anul"

function MakeUppercase(sentense){
   let word=sentense.split(' ')
   console.log(word);
   for(let i=0;i<word.length;i++){
    word[i]=word[i].charAt(0).toUpperCase()
   }
   return word
}
console.log(MakeUppercase(sentense))