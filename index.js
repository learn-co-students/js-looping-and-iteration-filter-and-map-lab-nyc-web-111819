

function driversWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
  return getNames(newArr);
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj)[0];
  const newArr = drivers.filter(function(driver){
    return driver[key] === obj[key];
  });
  return newArr;
}

function exactMatchToList(drivers, obj) {
  const key = Object.keys(obj)[0];
  const newArr = drivers.filter(function(driver){
    return driver[key] === obj[key];
  });
  return getNames(newArr);
}

function getNames(drivers) {
  return drivers.map(function (driver) {
    return driver.name;
  });
}

