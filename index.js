function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue
    }).map(function(driver){
        return driver.name
    })
}

function exactMatch(drivers, obj){
    return drivers.filter(function(driver){
        return driver[Object.keys(obj)] == obj[Object.keys(obj)]
    })
}

function exactMatchToList(drivers, obj){
    return drivers.filter(function(driver){
        return driver[Object.keys(obj)] == obj[Object.keys(obj)]
    }).map(function(driver){
        return driver.name
    })
}