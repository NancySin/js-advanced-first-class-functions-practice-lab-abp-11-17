// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name)
  });
}
const logDriversByHometown =Function (drivers, hometown)
{ drivers.forEach(function(driver)
  { if(driver.hometown ===h ometown){
  console.log(driver.name)}
})
}const driversByRevenue(drivers)= function (drivers){
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.revenue-driverTwo.revenue})
}
