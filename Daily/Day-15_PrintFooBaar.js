// write a pattern Foo Bar
function FooBaar(input){
    let remmainder3=input%3;
    let remmainder5=input%5;
    if(remmainder3==0&& remmainder5==0){
        console.log("FooBar");
    }else if(remmainder3==0){
        console.log("Foo");
    }else if(remmainder5==0){
        console.log("Bar");
    }else{
        console.log("Nothing");
    }
}
console.log(FooBaar(43));