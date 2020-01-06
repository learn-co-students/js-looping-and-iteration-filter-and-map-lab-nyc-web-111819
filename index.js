// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) { 
        if (driver.revenue > revenue)
        return driver.name 
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const namesArray = []
    drivers.filter(function (driver) { 
        if (driver.revenue > revenue)
        namesArray.push(driver.name)  
    })
    return namesArray
}

function exactMatch(drivers, obj) {
    const localKey = Object.keys(obj)[0]
    return drivers.filter(function (driver) { 
        return driver[localKey] === obj[localKey]
    })
    
}

function exactMatchToList(drivers, obj) {
   let driversArray = exactMatch(drivers, obj)
   return driversArray.map(function (driver) {
      return driver.name
   })

}