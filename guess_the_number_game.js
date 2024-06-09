console.log("================= Welcome to the Game ==================");
console.log("           This game is based on guess the number");
console.log("           1. Our computer has selected a random number to tell you 1 to 100 ");
console.log("           2. first of all you have to select a number and then");
console.log("           3. select until the number matches.");
console.log("           4. This will tell you how many times you have reached the correct number.")
 let count=0; 
  let target=Math.floor(Math.random()*100+1);
  while(count<target){
      
      let a=prompt("enter your number :-  ");
      if(a==target){
          console.log("you guess the correct number :- "+target);
          break;
      }else if(a<target)
      {
          console.log("plz enter grater value");
      }else{
          console.log("plz enter smaller value")
      }
  count++;
  }
  console.log(`final count is ${count+1}`);