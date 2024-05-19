console.log(" =================THIS IS BMI MODEL===============");
console.log("Body mass index(BMI) is a measure body fat based on height and weight that applies to adult Men and Women.");
let pre=prompt("do you want to enter your height in centimetres then type (c) and in metres please type (m):-   ");
if(pre=="c")
{
let centimeter=prompt("enter your height in centimeter:");
let weight=prompt("enter your weight in kilogram:");
let height=centimeter/100;
centimeter=height*height;
let bmi=weight/centimeter;
if(bmi>=30)
{
    console.log("you'r in a obesity category.");
}
else if(bmi>=25 && bmi<=29.9)
{
    console.log("you are overweight.");
}
else if(bmi>=18.5 && bmi<=24.9)
{
    console.log("your weight is normail.");
}
else if(bmi<18.5)
{
    console.log("you are underweight.")
}
else
{
    console.log("please enter valid numbers.")
}
}
else{
    let metre=prompt("enter your height in metres:");
let weight=prompt("enter your weight in kilogram:");
let height=metre*metre;
let bmi=weight/height;
if(bmi>=30)
{
    console.log("you'r in a obesity category.");
}
else if(bmi>=25 && bmi<=29.9)
{
    console.log("you are overweight.");
}
else if(bmi>=18.5 && bmi<=24.9)
{
    console.log("your weight is normail.");
}
else if(bmi<18.5)
{
    console.log("you are underweight.")
}
else
{
    console.log("please enter valid numbers.")
}
}