// Code your solution here
const findMatching = (drivers, compare) => {
    
    let matchedDrivers = drivers.filter((driver) => {
        return driver.toLowerCase() === compare.toLowerCase();
    });

    return matchedDrivers;
}

const fuzzyMatch = (drivers, compare) => {
    let matchedDrivers = drivers.filter ((driver) => {
        
        return driver.substring(0, compare.length) === compare;
    });

    return matchedDrivers;
}

const matchName = (drivers, compare) => {
    let matchedDrivers = drivers.filter((driver => {
        return driver.name === compare;
    }));

    return matchedDrivers;
}