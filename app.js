let cheese = 0
let pickaxe = 0
let knife = 0
let miners = 0
let rover= 0
let modifiers = 0
let auto = 0

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
    modifiers += clickUpgrades.knife.multiplier
  }
  console.log('bought cheese knife')
  draw()
}
function buyPickaxe(){
  
  if(cheese >=100){
    pickaxe++
    cheese -=100
    modifiers += clickUpgrades.pickaxe.multiplier
  }

  console.log('bought pickaxe')
  draw()
}
function buyMiners(){
  if(cheese >= 500){
    miners++
    cheese -=500
  }
  startMinersInterval()
  console.log('bought miners')
  draw()
}
function buyRover(){
  if(cheese >= 1000){
    rover++
    cheese -= 1000
  }
  
  startRoverInterval()
  console.log('bought rover')
  draw()
}

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

function draw(){
   let cheeseElem = document.getElementById('cheese-count')
   cheeseElem.innerText = cheese

   let pickaxeElem = document.getElementById('buy-pickaxe')
   pickaxeElem.innerText = pickaxe

   let knifeElem = document.getElementById('buy-knife')
   knifeElem.innerText = knife

   let minersElem = document.getElementById('buy-miners')
   minersElem.innerText = miners

   let roverElem = document.getElementById('buy-rover')
   roverElem.innerText = rover
}

draw()