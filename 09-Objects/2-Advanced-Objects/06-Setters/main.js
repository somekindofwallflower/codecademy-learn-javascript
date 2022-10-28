const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    }, 
    set numOfSensors(num) {
      if(typeof num === 'number' && num >= 0){
          this._numOfSensors = num;
      }
    }
  };
  
  robot.numOfSensors = 5;
  console.log(robot._numOfSensors);
  