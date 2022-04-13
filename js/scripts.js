var large = {Name:'large', price: 1200}
var medium = {Name:'medium', price: 800}
var small = {Name:'small', price: 600}

var size = []
size.push(large)
size.push(medium)
size.push(small)
   




var crust = [
    {Name:'crispy', price: 200},
    {Name:'ctuffed', price: 150},
    {Name:'gluten_free', price: 100}
]



var toppings = [
    {Name:'pepperoni', price: 300},
    {Name:'sausage', price: 500},
    {Name:'mushrooms', price: 200},
    {Name:'bacon', price: 50},
    {Name:'onions', price: 300},
    {Name:'extra_cheese', price: 150},
    {Name:'peppers', price: 430},
    {Name:'chicken', price: 220}
]

var delivery = [
    {distance: '10km', price: '200'}

]


function Pizaa(pizzaSize,pizzaCrust,pizzaToppings,pizzaDelivery,no=1){
    console.log(JSON.stringify(size))
    let sizePrice = 0;
    let crustPrice = 0;
    let toppingsPrice = 0;
    let deliveryPrice = 0;
    
    size.forEach(function(size){
        if(size.Name === pizzaSize){
            sizePrice = size.price
        }

    })

    crust.forEach(function(crust){
        if(crust.Name === pizzaCrust){
            crustPrice = crust.price
        }

    })
    toppings.forEach(function(topping){
        if(topping.Name === pizzaToppings){
            toppingsPrice = topping.price
        }

    })

    delivery.forEach(function(delivery){
       if (delivery.distance === pizzaDelivery){
           deliveryPrice = delivery.price
       }
    })

    console.log(sizePrice+' '+crustPrice+' '+toppingsPrice+' '+deliveryPrice)
    return (sizePrice+crustPrice+toppingsPrice+deliveryPrice)*no;
}






function buttonClick(){
    let customerSize = document.getElementById('size').value;
    let customerCrust = document.getElementById('crust').value;
    let customerToppings = document.getElementById('toppings').value;
    let no = document.getElementById('number').value;
    let customerDelivery = document.getElementById('delivery').value;
    
    let myPizza = Pizaa(customerSize,customerCrust,customerToppings,no)

    prompt('Please input your Delivery location')

    alert('Your order will be delivered to your location')

  

    alert('The amount payable is ksh '+myPizza+', the pizza crust is '+" "+customerCrust+' and the pizza toppings is '+customerToppings)


}




