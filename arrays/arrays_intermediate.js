const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//combine methods

const combined = ages
  .map((age) => age * 2) //multiples all ages by two
  .filter((age) => age >= 40) //filters ages that are 40 or over
  .sort((a, b) => a - b) // sorts by lowest to highest
  .reduce((a, b) => a + b, 0); //calculates everything together

console.log(combined);

//reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// const ageReduceSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);

// const ageReduceSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageReduceSum);

// // get total years for all companies

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYears);

//sort
// const sortedCompanies = companies.sort((company1, company2) => {
//   if (company1.start > company2.start) {
//     return 1; company2 is greater than b by the ordering criterion
//   } else {
//     return -1; company1 is less than b by some ordering criterion
//   }
// });

//sort companies by start year
// const sortedShortCompanies = companies.sort((a, b) =>
//   a.start > b.start ? 1 : -1
// );

// console.log(sortedShortCompanies);

// //sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

/**
 * //map - lets to create new arrays
 * //Create array of company names

// const companyNames = companies.map((company) => {
//   return company.name;
// });
//console.log(companyNames);

// const test = companies.map((company) => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(test);
// console.log(testMap);

// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesTimesFive = ages.map((age) => age * 5);

// const agesMath = ages.map((age) => Math.sqrt(age)).map((age) => age * 5);

// console.log(agesMath);
// console.log(agesSquare);
// console.log(agesTimesFive);
 */

/**
 * //filter - filters data from array

//get 18 and older

// let isAdult = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     isAdult.push(ages[i]);
//   }
// }

// const canDrink = ages.filter((age) => {
//   if (age >= 18) {
//     return true;
//   }
// });

//const canDrink = ages.filter((age) => age >= 18);

//console.log(canDrink);
// console.log(isAdult);

//filter retail companies

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// const autoCompanies = companies.filter((company) => {
//   if (company.category === "Auto") {
//     return true;
//   }
// });

// console.log(autoCompanies);
// console.log(retailCompanies);

//get 80s companies
// const eightiesCompanies = companies.filter(
//   (startingYear) => startingYear.start < 1990 && startingYear.start >= 1980
// );

// console.log(eightiesCompanies);

// const oldCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );

// console.log(oldCompanies);

//filter that lasted 10 or more years

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(lastedTenYears);

 */

/**
 * for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
} 
*/

/**
 *
forEach - easier/better way to loop through array
companies.forEach((company) => {
console.log(company.name);
});
 */
