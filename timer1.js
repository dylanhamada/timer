const timer = () => {
  // collect command line arguments
  const args = process.argv.slice(2);
  // if no arguments, end function
  if (!args.length) {
    return;
  }
  // turn all array values into numbers
  const alarmTimes = args.map(arg => Number(arg));
  // iterate through arguments
  for (const time of alarmTimes) {
    // if argument is negative, do nothing
    // if argument is non-number, do nothing
    if (time >= 0 || !isNaN(time)) {
      // setTimeout function for each argument
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};

timer();