// Code your solution in this file!

function logDriverNames(drivers){
  
  return drivers.forEach(function (driver) {console.log(driver.name)});
  
}

function logDriversByHometown(drivers, location){
  
  return drivers.forEach( function (driver) {
    
    if (driver.hometown === location){
      console.log(driver.name)
    }
    
  })
  
}

function driversByRevenue(drivers){
  
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
  
}

function driversByName(drivers){
  
  const nameSort = function (a, b) {
    return a.localeCompare(b);
  };
  
  drivers.sort(nameSort);
  
}