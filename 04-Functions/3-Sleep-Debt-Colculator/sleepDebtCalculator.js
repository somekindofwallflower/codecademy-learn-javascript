// Getting hours of sleep per day.
const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8;
      case 'Tuesday':
        return 7;
      case 'Wednesday':
        return 8;
      case 'Thursday':
        return 6;
      case 'Friday':
        return 7;
      case 'Saturday':
        return 10;
      case 'Sunday':
        return 8;
    }
  }
  
  // Getting total sleep hours.
  const getActualSleepHours = () => {
    return getSleepHours('Monday') +
      getSleepHours('Tuesday') +
      getSleepHours('Wednesday') +
      getSleepHours('Thursday') +
      getSleepHours('Friday') +
      getSleepHours('Saturday') +
      getSleepHours('Sunday');
  }
  
  // Getting ideal sleep hours per day.
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  // Calculating sleep debt.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed. Get some rest!');
    } else {
      console.log('Error!');
    }
  }
  
  // Starting the program.
  calculateSleepDebt();