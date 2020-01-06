

function driverNamesWithRevenueOver(driversObject, revenue){
  const drivers = driversObject.filter(driver => driver.revenue > revenue )
  const names = drivers.map(highearner => highearner.name);
  return names;
}

function driversWithRevenueOver(driversObject, revenue){
  const drivers = driversObject.filter(driver => driver.revenue > revenue);
  return drivers;
}

function exactMatch(drivers, attribute){
   return drivers.filter(driver => {
     let results = false;
     for (const key in attribute) {
       results = driver[key] === attribute[key]
     }
     return results;
  })}

  function exactMatchToList(drivers, attribute){
    return exactMatch(drivers, attribute).map(driver => driver.name)
  }

// function exactMatch (drivers, matcher) {
// return drivers.filter(function (driver) {
//   let matches = false;
//   for (const key in matcher) {
//     matches = driver[key] === matcher[key];
//   }
//   return matches;
// });


//   describe('exactMatch()', function () {
//     it('returns an array of all matching drivers', function () {
//       expect(exactMatch(extendedDrivers, { name: 'Sally' })).to.eql([
//         { name: 'Sally', revenue: 400 },
//         { name: 'Sally', revenue: 200     }
//       ]);

//       expect(exactMatch(extendedDrivers, { revenue: 200 })).to.eql([
//         { name: 'Annette', revenue: 200 },
//         { name: 'Sally',   revenue: 200 }
//       ]);
//     });

//     it('returns an empty array if there is no match', function () {
//       expect(exactMatch(extendedDrivers, { revenue: 500 })).to.eql([]);

//       expect(exactMatch(extendedDrivers, { name: 'Alex' })).to.eql([]);
//     });
//   });

//   describe('exactMatchToList()', function () {
//     it('returns an array of names for all matching drivers', function () {
//       expect(exactMatchToList(extendedDrivers, { name: 'Sally' })).to.eql([ 'Sally', 'Sally' ]);

//       expect(exactMatchToList(extendedDrivers, { revenue: 200 })).to.eql([ 'Annette', 'Sally' ]);
//     });

//     it('returns an empty array if there is no match', function () {
//       expect(exactMatchToList(extendedDrivers, { revenue: 500 })).to.eql([]);

//       expect(exactMatchToList(extendedDrivers, { name: 'Alex' })).to.eql([]);
//     });
//   });
// });
