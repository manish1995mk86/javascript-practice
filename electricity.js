let cnumber=prompt("Enter Customer Number: ")
let customer=prompt("Enter Customer Name :  ");
let oreading=prompt("enter the old reading units: ");
let creading=prompt("enter the Current reading units:  ");
let tunit=creading-oreading;
let fcharge=250;
if(tunit<=100)
{
    tused=tunit*3.25;
}else
{
    tused=tunit*4.75;
}
let tax1=tused*11.5;
let tax=tax1/100;
let tbill=fcharge+tused+tax;
console.log("  *****************************************************************");
console.log("          UTTAR PRADESH POWER CORPORATION LIMITED");
console.log("               Bill of Supply for Electricity");
console.log("circle: upwest   circle code:105   TollfreeNo:18001800440");
console.log("       ------------------------------------------------");
console.log("       Customer Name                        " +customer);
console.log("       Customer Number                      " +cnumber);
console.log("       old meter Reading                    " +oreading);
console.log("       Current Meter Reading                " +creading);
console.log("       Total Reading Consumed               " +tunit);
console.log("       fixed Rental Line Maintenance Charge " +fcharge);
console.log("       ToTal Usage                          " +tused);
console.log("       Total Tax (11.5%)                    " +tax);
console.log("       ------------------------------------------------");
console.log("       ToTal Bill Amount Payable            " +tbill);

