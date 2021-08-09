// seerToMon convert
function seerToMon(seer){
    if(seer < 0 || typeof seer != 'number'){
        return "please input valid number";
    }
    else{
        mon = seer / 40;
        return mon;
    }
}
const totalMon = seerToMon(120);
console.log(totalMon); 

// totalSales price
function totalSales(shirt, pant, shoe){
    if(shirt<0 || pant<0 || shoe<0 || typeof shirt!= "number" || typeof pant!= "number" || typeof shoe!= "number"){
        return "please input valid number";
    }
    else{
        let shirtPrice = shirt * 100;
        let pantPrice = pant * 200;
        let shoePrice = shoe * 500;
        let totalPrice = shirtPrice + pantPrice + shoePrice;
        return totalPrice;
    }
}
const totalSalesPrice = totalSales(2,2,2);
console.log(totalSalesPrice);

// deliveryCost total
function deliveryCost (product){
    const firstDeliveryCost = 100;
    const secondDeliveryCost = 80;
    const thirdDeliveryCost = 50;
    if(product < 0 || typeof product != "number"){
        return "Please input valid number";
    }
    else if (product<=100){
        let firstCost = product * firstDeliveryCost;
        return firstCost;
    }
    else if( product<=200){
        const firstTimeDeliveryCost = 100 * firstDeliveryCost;
        const remainProductCost = product - 100;
        const secondTimeDeliveryCost = remainProductCost * secondDeliveryCost;
        const totalCost = firstTimeDeliveryCost + secondTimeDeliveryCost;
        return totalCost;
    }
    else{
        const firstTimeDeliveryCost = 100 * firstDeliveryCost;
        const secondTimeDeliveryCost = 80 * secondDeliveryCost;
        const remainAllProductCost = product - 200;
        const thirdTimeDeliveryCost = remainAllProductCost * thirdDeliveryCost;
        const totalCost = firstTimeDeliveryCost + secondTimeDeliveryCost + thirdTimeDeliveryCost;
        return totalCost;
    }
}
 const allTotalCost = deliveryCost(120);
 console.log(allTotalCost);

// perfectFreiend 
function perfectFriend(friendNames){

        for (let i = 0; i < friendNames.length; i++){

            if ( typeof friendNames[i] != "string" ){
                return "Please input valid String";
              }
            const element = friendNames[i];
            if ( element.length==5){
                return element;
            }
     }
      }
const friendNames = [ 'rafi','mou','sohan','shaikat','hasibur'];
var nameWithFiveElement = perfectFriend( friendNames);
console.log(nameWithFiveElement);