// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attribute){
  return drivers.filter (driver => {
    let result = false;
    for (const key in attribute) {
      result = driver[key] === attribute[key];
    }
    return result
  }
  )
}
  // let result = [];
  // drivers.filter(driver => {
  //   result.push(driver.include ? attribute:false)});
  // return result

  // let result = drivers.filter(driver => attribute === driver.name && attribute === driver.revenue);


function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map(driver => driver.name);
}
// describe('index.js', function () {
//   const drivers = [];
//   const extendedDrivers = [];

//   beforeEach(function () {
//     drivers.length = 0;

//     drivers.push(
//       { name: 'Sally',   revenue: 400 },
//       { name: 'Annette', revenue: 200 },
//       { name: 'Jim',     revenue: 150 }
//     );

//     extendedDrivers.length = 0;

//     extendedDrivers.push(
//       { name: 'Sally',   revenue: 400 },
//       { name: 'Annette', revenue: 200 },
//       { name: 'Jim',     revenue: 150 },
//       { name: 'Sally',   revenue: 200 }
//     );
//   });

//   describe('exactMatch()', function () {
//     it('returns an array of all matching drivers', function () {
//       expect(exactMatch(extendedDrivers, { name: 'Sally' })).to.eql([
//         { name: 'Sally', revenue: 400 },
//         { name: 'Sally', revenue: 200 }
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
