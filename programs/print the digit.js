//input is gievn in digit form and print the output in string like- 425 => "four" "two" "five"

function sayDigit(input){
   let digit=input.toString().split("")
   let digitString=digit.map((e)=>{
        let arr=["zero","one","two","three","four","five","six","seven","eight","nine"][e]
        return arr
   })
   return digitString
}
console.log(sayDigit(415))






