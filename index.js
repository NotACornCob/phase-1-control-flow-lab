
function scuberGreetingForFeet(distance){

let cost; 
if (distance <= 400) {
  cost = 'This one is on me!'; 
}
else if (distance > 400 && distance <= 2000) {
  cost = 'That will be twenty bucks.';
}
else if (distance > 2000 && distance < 2500) {
  cost = 'I will gladly take your thirty bucks.';
}
else if (distance > 2500) { 
  cost = 'No can do.';
}
return cost;
}

function ternaryCheckCity(city){
  let response = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){

  let charmLevel; 

  switch (tip) {
    case 'generous':
      charmLevel = 'Thank you so much.';
      break;
    case 'not as generous':
      charmLevel = 'Thank you.';
      break;
    default: 
      charmLevel = 'Bye.';
      break;
  }
return charmLevel;
}