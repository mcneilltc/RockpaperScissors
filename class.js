/*
const temp = 60;
const precip = false;
const indoors = true;

if( temp > 80 && precip === false){ console.log("Not time to swim") } else if(indoors){ console.log("Time to swim");}
*/ 
 /* FOR LOOP
 for (var i =0; i <= 9; i++){
 console.log(i);*/

/* let bot = 99; 
 for(var bot; bot>=0; bot--){
     if (i === 0){
     console.log ("We need more root beer");
 } else {console.log(bot + "bottle of root beer on the wall");}*/

 /*WHILE
 let z=0;
 while(z<10){z=z+1;}
 console.log(z);*/

 /* SWITCH
 let x=1
 switch(x){
     case 3: console.log('three')
     case 1: console.log(1);
     //break;
     case 2: console.log(4);
     break;
     default: console.log('default')
 } */

 //make a function that counts up to 100
 // integers divisible by 3 output what
 // integers divisible by 5 outpup up
 // integers divisible by both output both results

 //let x =1
 //for (x; x<= 100; x++ ){
   //  console.log(x)
    //if(x%3 === 0){
    // console.log (x + "what");
    //if (x%5 === 0){
      //     console.log("up");
    //if (x%3 === 0 && x%5 ===0){
      //console.log("what up");}
       //   }} } 
         
 // easier solution
 let x =1
 for(x; x<=100; x++){
     if(x%5 === 0 && x%3 === 0) console.log( "What up");
     else if (x%5 == 0) console.log("up");
     else if (x%3 == 0) console.log("what");
     else console.log(x);
 }    
 
