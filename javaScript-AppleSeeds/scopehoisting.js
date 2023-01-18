// Block 1 
// because of the var inside the function , and the console foo must be inside the foo function.
// the res is undefined.

// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     console.log(funcA());
// fix block 1 
var a =1;
function funcA(){
    console.log(a);
    function foo(){
        console.log(foo()); 
    }
    // console.log(foo());
    return 2;
}
console.log(funcA());
// Block 2
    // var fullName = 'John Doe';
    // var test;
    // var obj = {
    // fullName: 'Colin Ihrig',
    // prop: {
        
    // fullName: 'Aurelio De Rosa',
    // getFullName: function () {
    //     return this.fullName;
    // }
    //  }  
    // };
    // console.log(obj.prop.getFullName());
    // console.log(getFullName(ullName));
//block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
    }
    console.log(funcB(typeof a));
    console.log(funcB(typeof b));
    // console.log(typeof a);
    // console.log(typeof b);
    //Block 4
    function funcC() {
        console.log("1");
        }
        funcC();
        //we must not put the 2 functions with the same name.
        function funcC2() {
        console.log("2");
        }
        funcC2();
    //Block 5
    function funcD1() {
        d = 1;
        }
        funcD1();
        console.log(d);
        function funcD2() {
            // var e =1 ; // error we must delete the var 
         e = 1;
        }
        funcD2();
        console.log(e);

// Block 6
function funcE() {
    var  f =1;
    console.log("Value of f in local scope: ", f);
    }
    var f = 1;
    console.log("Value of f in global scope: ", f);
    // var f = 1;  wrong we  must do it befor the console .
    funcE();
        