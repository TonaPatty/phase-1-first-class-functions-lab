// Code your solution in this file
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];










  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  
  function fareDoubler(fare) {
    const doubleFare = createFareMultiplier(2);
    return doubleFare(fare);
  }
  
  function fareTripler(fare) {
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
  }
  
  function selectDifferentDrivers(drivers, selectDriversFunction) {
    return selectDriversFunction(drivers);
  }

