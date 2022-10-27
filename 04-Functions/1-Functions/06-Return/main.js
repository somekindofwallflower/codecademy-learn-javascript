function monitorCount(rows, columns){
    return rows * columns;
  }
  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors);
  console.log(monitorCount(5, 'test'));