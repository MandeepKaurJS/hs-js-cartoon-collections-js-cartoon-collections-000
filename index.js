function dwarfRollCall(dwarves) {
  var arreyfun1=[];
  for(var i=0;i<dwarves.length;i++){
    arreyfun1.push(i+1+". "+dwarves[i]+" ");
  }
  return arreyfun1.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var calls=[];
  for(var i=0;i<planeteerCalls.length;i++){
     calls.push(planeteerCalls[i].toUpperCase()+"!");
 }
 return calls
}
function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if(words[i].length>4)
    {
      return true
    }
    return false
  }
}

function findTheCheese (foods) {
  var newarray=["camembert","cheddar","gouda","swiss"];
  var empty=[];
  for(var i=0;i<foods.length;i++){
    var cheeseindex=newarray.indexOf(foods[i]);
    
    if(cheeseindex!==-1)
    {
      return foods[i];
    }
  } 
  return "no cheese!";
}

findTheCheese(['apple', 'banana', 'cheddar']) // 'cheddar'
findTheCheese(['apple', 'pineapple', 'cheddar', 'gouda']) // 'cheddar'


function wordsThatStartWithB(words){
  
}

wordsThatStartWithB(['bob', 'alice', 'eva']) // ['bob']

