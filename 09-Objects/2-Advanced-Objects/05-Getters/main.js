const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if(typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  
  robot.energyLevel;
  console.log(robot.energyLevel);
  robot._energyLevel = '100';
  console.log(robot.energyLevel);