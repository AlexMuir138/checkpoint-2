let cheese = 0
let pickaxe = 0
let pickaxePrice = 100
let knife = 0
let knifePrice = 40
let miners = 0
let minersPrice = 500
let rover= 0
let roverPrice = 1000
let modifiers = 0
let auto = 0
let price = 0

//DICTIONARIES

let clickUpgrades = {
  knife:{
    price: 40,
    quantity: 0,
    multiplier: 3
  },
  pickaxe:{
    price: 100,
    quantity: 0,
    multiplier: 5
  }
}

let automaticUpgrades = {
  miners: {
    price: 500,
    quantity: 0,
    multiplier: 10
  },
  rovers: {
    price: 1000,
    quantity: 0,
    multiplier: 25
  }
}

function mine(){
  cheese++
  cheese += modifiers
  console.log('wired up')
  draw()
}

function buyCheeseKnife(){
  if(cheese >= clickUpgrades.knife.price){
    knife++
    cheese -= clickUpgrades.knife.price
    clickUpgrades.knife.price += 5
    knifePrice += 5
    modifiers += clickUpgrades.knife.multiplier
  }
  console.log('bought cheese knife')
  draw()
}
function buyPickaxe(){
  
  if(cheese >=clickUpgrades.pickaxe.price){
    pickaxe++
    cheese -= clickUpgrades.pickaxe.price
    clickUpgrades.pickaxe.price += 5
    pickaxePrice += 5
    modifiers += clickUpgrades.pickaxe.multiplier
  }

  console.log('bought pickaxe')
  draw()
}
function buyMiners(){
  if(cheese >= automaticUpgrades.buyMiners.price){
    miners++
    cheese -=automaticUpgrades.buyMiners.price
    startMinersInterval()
  }
  console.log('bought miners')
  draw()
}
function buyRover(){
  if(cheese >= automaticUpgrades.rovers.price){
    rover++
    cheese -= automaticUpgrades.rovers.price
    startRoverInterval()
  }
  
  console.log('bought rover')
  draw()
}
//Intervals
function startMinersInterval(){
  setInterval(collectMinersUpgrades, 3000)
  console.log('started')
}

function collectMinersUpgrades(){
  cheese += automaticUpgrades.miners.multiplier
  draw()
}
function startRoverInterval(){
  setInterval(collectRoverUpgrades, 3000)
  console.log('started')
}

function collectRoverUpgrades(){
  cheese += automaticUpgrades.rovers.multiplier
  draw()
}
//

function draw(){
   let cheeseElem = document.getElementById('cheese-count')
   cheeseElem.innerText = cheese

   let pickaxeElem = document.getElementById('buy-pickaxe')
   pickaxeElem.innerText = pickaxe

   let knifePriceElem = document.getElementById('knife-price')
   knifePriceElem.innerText = knifePrice

   let knifeElem = document.getElementById('buy-knife')
   knifeElem.innerText = knife

   let pickaxePriceElem = document.getElementById('pickaxe-price')
   pickaxePriceElem.innerText = pickaxePrice

   let minersElem = document.getElementById('buy-miners')
   minersElem.innerText = miners

   let minersPriceElem = document.getElementById('miners-price')
   minersPriceElem.innerText = minersPrice

   let roverElem = document.getElementById('buy-rover')
   roverElem.innerText = rover

   let roverPriceElem = document.getElementById('rover-price')
   roverPriceElem.innerText = roverPrice
}

draw()