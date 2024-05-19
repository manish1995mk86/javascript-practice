let total=parseFloat(prompt("enter the total ammount of the order(in $ only) : "));
if(total<50)
{
    let shipcost=5;
   let value=total+5;
   console.log("order value is : "+total);
   console.log("shipping cost is : "+shipcost);
   console.log(" total value (in $) :-  " +value);
}
if(total>=50 && total<=100)
{
     let shipcost=10;
   let value=total+shipcost;
    console.log("order value is : "+total);
   console.log("shipping cost is : "+shipcost);
   console.log(" total value (in $):-  " +value);
}
if(total>100)
{
     console.log("order value is : "+total);
    console.log(" your total value is (without shipping charge) :  "+total);
}