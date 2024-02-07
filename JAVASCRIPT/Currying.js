//What is Currying =>Currying means you have done half work and after some time later
// you will done your another half work then total work completed that is known currying.
//Example- When we went to the FastFood Shop for Noodles then shopkeeper had already boild Noodles and He make that boild Noodles
//ans make a Chawmin for us that means he already has done half work and when customer came then after he done another half work.

// Interview in Ans with Example=> A function which return a function that is called currying or process of currying.

//currying Example-
// function boilNoodles(){
//     console.log("boiling Noodles");
// }

// function cookNoodles(){
//     console.log("cook Noodles");
// }
// let hasCustomerCame=false

// function curry(){
//     boilNoodles()
//     return function(){
//         cookNoodles()
//     }
// }
// const cookedMyFood=curry()

// setTimeout(function(){
//     hasCustomerCame=true
//     cookedMyFood()
// },3000)




function test(){
    // console.log(person);
    person="asdf"
}
test()
console.log(window.person);
