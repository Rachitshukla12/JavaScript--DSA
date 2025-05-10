let Price =Number(prompt("Enter the price of the item:"));
let dis =0;


if (Price>0 && Price <=5000){
    dis = 0;
}else if (Price > 5000 && Price <= 7000){
    dis = 5;    
}else if (Price > 7000 && Price <= 10000){
    dis = 10;
}else if(Price > 10001){
    dis = 20;
}else {
    console.log("Invalid input!");
}

console.log(Price - Math.floor((dis*Price)/100));