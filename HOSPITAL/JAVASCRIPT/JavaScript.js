/*
Everything in javascript happens inside an execution context:-
 that means execution context is like a big box and it has two compoenet in it
 first is Memory Component and second is Code Component and inside memory componet all the variabels and function are declared into key value pairs so it also known varibale environment
 and inside code component all the code execution happens line by line or one line at time so that is also known as thread of execution.

 ==>"JavaScript is a synchronous single-threaded language":-
      that means when i say single-threaded that means javascript can only execute one command at a time. 
      and when i say synchronous single-threaded that means javascript can only execute one command at a time and with in specific order that 
      means it go in the next line when when current line completed successfully.



 ==>"What happens when you run javascript code":-
     when we run any peace of code then always Global execution context is created and it is created in two phase Memory and Code
     so in Memory it will allocated varibles with undefined value init and if it is function then it will allocated exact whole function code vaule in it.
     so in Code it will execute line by line and here if it is varible then previous varibles value is undefined that is replaced whatever value of variable.
     and here if it is function then previous value is also function itelf so it will do nothing and it will go next line and if here it is a function envocation
     then it will create a new execution context for function once agian and same cycle repeat and when this function return some value from out of it to the place where
     it is function invoked from and then function execution completed and it will out of the exeuction context or we can say it will destroy or deleted.
     and last nothing to execute in code then global execution aslo will deleted. this is the all process happend inside javascript.



==>"what is Hoisting in Javascript":-
     Hoisting is phenomina in javascript by which you can asscess variable and function even before have you initilized it you can access without any error
     that is called hoisting in javascript.
     It happen beause of execution context of javascript in which as we know when memory creation happns first time then varible stores a specail value that is undefiend and function stores exact
     function as value so that whenever we want to assess these variables and functions before its invocataion or before initilazation then it will show us 
     his previous values only that is known hoisting that as simple as that.  

        Note=>In arrow function is also treated as an vaiables in sens of hositing.

==> If an Empty file we execute then also global execution is created as we know previous and aslo it will create a window object itself always
    window object just like a big Object with lots of function & methods that is given by the javascript engine in the global space.
    And apart from all these javascript also create this keyword and here global level this keyword poitns to the window object.

    => Window is global object that which is created along with gloabl execution context. So when javascript is run then gloabl object is created 
    global execution is created and alog with execution context this variable is created. So if any varable and function are created in global space 
    then it will attached into global object that is window object so that now if want to access those varibles and function we log it using
    console.log(window.a) ==== console.log(a) both is same things and now it is in global sapce so clonsole.log(this.a) then it also same things.


==> Lexical Environment =>whenever an execution is created then with lexical environmnet is also created that means lexical envoronment is a
    Local Memory alog with lexical enviroment of its parent.
    
    






















*/ 