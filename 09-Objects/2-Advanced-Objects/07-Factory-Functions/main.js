const robotFactory = (model, mobile) => {
    return {
      mobile: mobile,
      model: model,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();