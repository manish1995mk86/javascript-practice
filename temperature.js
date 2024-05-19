
let temp=prompt("enter temperature value if temperature in celsius type (C) and temperature in Fahrenheit type (F): ");
if(temp=="c")
{
    let temperature=prompt(" enter temperature value in celsius : ");
    let F=1.8*temperature+32;
    console.log("temperature value in fahrenheit :  "+F);
}
else
{
    let temperature=prompt("enter temperature value in fahrenheit : ");
    let c=temperature-32;
    let d=c/1.8;
    console.log("temperature value in celsius: "+d);
}
