function pizzaOven(crust, sauce, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var thirdPizza = pizzaOven("thin-crust", "BBQ Sauce", ["mozzarella", "parmesan"], ["chicken", "onion", "bacon"])
var forthPizza = pizzaOven("thin-crust", "Buffalo Sauce", ["mozzarella", "blue cheese"], ["chicken", "bacon", "onion", "ranch"])
console.log(firstPizza);
console.log(secondPizza);
console.log(thirdPizza);
console.log(forthPizza);

// Bonus:
var crustOptions = [
    "thin-crust",
    "deep dish",
    "hand tossed"
]

var sauceOptions = [
    "traditional",
    "marinara",
    "BBQ Sauce",
    "Buffalo Sauce"
]

var cheeseOptions = [
    "mozzarella",
    "feta",
    "parmesan",
    "blue cheese"
]

var toppingOptions = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "chicken",
    "bacon"
]

function randomPizza(){
    var pizza = {};
    pizza.crustType = randomItem(crustOptions);
    pizza.sauceType = randomItem(sauceOptions);
    pizza.cheeses = randomItem(cheeseOptions);
    pizza.toppings = randomItem(toppingOptions);
    return pizza;
}

function randomItem(array){
    var temp = Math.floor(Math.random()*array.length);
    return array[temp];
}

var randomPizzaGo = randomPizza();

console.log(randomPizzaGo);