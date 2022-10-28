let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
    console.log("Green energy", obj);
  } 
  
  let remotelyDisable = obj => {
     obj.disabled = true;
     console.log("remotelyDisable", obj);
   }
   
  greenEnergy(spaceship);
  remotelyDisable(spaceship);  
  console.log("Space ship", spaceship);