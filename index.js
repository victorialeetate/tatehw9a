const moment = require('moment');

// Display the current date
const currentDate = moment();
console.log("Current Date:", currentDate.format('MMMM Do YYYY'));

// Compute the number of years since 1976, November 26th
const pastDate = moment("1976-11-26");
const yearsSince = currentDate.diff(pastDate, 'years');
console.log(`Years since November 26, 1976: ${yearsSince}`);
