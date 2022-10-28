const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
    // checkEnergy: () => {
    //   console.log(`Energy is currently at ${this.energyLevel}%.`)
    // }
  }
  
  robot.checkEnergy();