// Change first letter of each word
// let sentense="my name is anul"
// function MakeUppercase(sentense){
//    let word=sentense.split(' ')
//    console.log(word);
//    for(let i=0;i<word.length;i++){
//     word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
//    }
//    return word.join(' ')
// }
// console.log(MakeUppercase(sentense)) 



// let string="my name is anul"
// function CapitalEachSecond(string){
//   let word=string.split(" ")
//   console.log(word)
//   for(let i=0;i<word.length;i++){
//     word[i]=word[i].charAt(0)+ word[i].charAt(1).toUpperCase()+word[i].slice(2)
//   }
//   return word.join(" ")
// }
// console.log(CapitalEachFirst(string))


//Change all uppercase letter to lowercase and lowercase to uppercase
let string="The brOWN  FoX"
function ChnageLetters(string){
   let newstring=""
   for(let i=0;i<string.length;i++){
      let currChar=string.charAt(i)
      if(currChar==currChar.toUpperCase()){
         newstring+=currChar.toLowerCase()
      }else{
         newstring+=currChar.toUpperCase()
      }
   }
   return newstring
}
console.log(ChnageLetters(string))