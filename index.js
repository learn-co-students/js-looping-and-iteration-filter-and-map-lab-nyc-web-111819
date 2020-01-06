// Code your solution here:

function driversWithRevenueOver(obj, num) {
    return obj.filter(function (driver) { 
        return driver.revenue > num;
    });
}

function driverNamesWithRevenueOver(obj, num) {
    return driversWithRevenueOver(obj, num).map(function (driver){
        return driver.name;
    });
}

function exactMatch(obj, match) {
    return obj.filter(function (driver) {
        let matches;

        for (const key in match) {
            matches = driver[key] === match[key];
        }

        return matches;
    });
}

function exactMatchToList(obj, match) {
    return exactMatch(obj, match).map(function (driver) { 
        return driver.name
    });
}