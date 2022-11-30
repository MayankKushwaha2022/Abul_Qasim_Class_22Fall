function myFunction() {
    alert("Hello!");
    alert("This alert is coming from a separate function stored in example.js file ");
    
    let answer1 = prompt("What is your greatest achievement?")
    let answer2 = confirm("Do you wish to continue?")

    let answer3 = console.log("This is console log")

    let d = "10"; let e = 20; console.log(d + e)
    let f = "30"; let g = 40; console.log(+f + g)
    let h = "50"; let i = 10; console.log(h - i)
    let j = "10"; let k = 20; console.log(j * k)
    let l = "CST8285"; let m = 20; console.log(l - m)
    let n = 20;
    let o = true;
    console.log(n + o)

    let userName = "ETzero";
    console.log(userName.length);
    console.log(userName[0].toLowerCase()); // e
    console.log(userName.charAt(0).toLowerCase()); // e
    console.log(userName.slice(0,1).toLowerCase()); // e
    console.log(userName.substr(0,1).toLowerCase()); // e
    console.log(userName.substring(0,1).toLowerCase().repeat(3)) // eee


    let a = "We love";
    let b = "Javascript";
    let c = " ";


    //document.write(a +c + b)

    let p =5
    let q ="5"
    console.log(p==q);
    console.log(p===q);


    } 

    function foo() {
        var bar;
        console.log('before block: ' + bar);      // prints 'undefined'
        if(true) {
            bar = 1;
            console.log('inside block: ' + bar);  // prints 1
        }
        console.log('outside block: ' + bar);     // prints 1

        let i=1;
        let text="";
        while(i<3){
            text += "<br>The number is " + i;
            i++;
        }
        console.log(text);
        
    }

   
    /*The Boolean function Boolean() will evaluate an expression and return a true or false value:
    "falsey" values: 0, 0.0, NaN, empty string “”, null, and undefined
    "truthy" values: anything else*/

    /*JavaScript Statements | If Statements

    • if-else statement: if condition is false then execute the else block. 
    • else-if statements: It’s not reverse of the if-else. It just says if condition false 
    then check this (else-if) condition.*/

    /*JavaScript Loops | Overview

    • Loops minimize repetition in the code base
    • All the loops must consist three things: 
    1. Incrementer
    2. Conditional expression – to determine the means of exit
    3. Logic to increase the incrementer – so that condition eventually turns to 
    false.*/
    function myfunc(x,y){
        return(x+y);   
    }

    function myFuncPrint(){
        console.log(myfunc(2,myfunc(5,-2)));
        console.log(zee(0));
        console.log(zee(true));
        console.log(zee(400));
    }
    var zee = function(ab) {
        return ab;
    }
    