/*
 Q5. Can you use return instead of break in loops?
 A>> Using return statement instead of break will break the loop,
  but also it will not execute the rest functionality in the function.
 * 
 */

 function abc(){
    for(let i=0;i<3;i++){
        if(i==1){
            console.log("gotta")
            //return;
             break;
        }
    }
    console.log("if used return then not executed...use break intead to get this executed");
 }

 abc();