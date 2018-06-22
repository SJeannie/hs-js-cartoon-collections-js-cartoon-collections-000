function dwarfRollCall(dwarves) {
  
  let roll = ""
  
  for(let i = 0; i<dwarves.length;i++){
    roll += ((i+1) + ". " + dwarves[i] + " ")
  }
    
  return roll
}

function summonCaptainPlanet(planeteerCalls){
  
  let calls = []
  
  for(let i = 0; i<planeteerCalls.length; i++){
    
    let yelled = (planeteerCalls[i].toUpperCase()+"!")
    calls.push(yelled)
    
  }
  
  return calls
  
}

function longPlaneteerCalls(words) {
  
  let long = false
  
  for(let i=0; i<words.length; i++){
    
    if(words[i].length>4){
      long = true
    }
    
  }
  return long 
}

function findTheCheese (foods) {
  
  for(let i=0; i<foods.length; i++){
    if(foods[i] =="cheddar"){
      return "cheddar"
    }
    else if (foods[i] =="gouda"){
      return "gouda"
    }
    else if(foods[i] =="camembert"){
      return "camembert"
    }
  
  }
  
  return "no cheese!"
  
}
