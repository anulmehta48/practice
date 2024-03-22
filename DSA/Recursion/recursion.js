//recurtion => When a function called itself that is called Recursion.

function fun(n){
    if(n>0){
        console.log(n);
        fun(n-1)
    }
}

function main(){
    let x=3
    fun(x)
}
console.log(main());