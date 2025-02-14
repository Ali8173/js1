const companies = [
    {name: 'Company one', category: 'Finance', start:1981, end:2003},
    {name: 'Company two', category: 'Retail', start:1992, end:2008},
    {name: 'Company three', category: 'Auto', start:1999, end:2007},
    {name: 'Company four', category: 'Retail', start:1989, end:2010},
    {name: 'Company five', category: 'Technology', start:2009, end:2014},
    {name: 'Company six', category: 'Finance', start:1987, end:2010},
    {name: 'Company seven', category: 'Auto', start:1986, end:1996},
    {name: 'Company eight', category: 'Technology', start:2011, end:2016},
    {name: 'Company nine', category: 'Retail', start:1981, end:1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 25, 64, 32];

//for(let i=0; i < companies.length; i++){
//    console.log(companies[i]);
//}

//forEach

//companies.forEach((company)=>{
 //   console.log(company.name)
//})

//filter

//get 21 and older
//let canDrink = [];
//for(let i =0; i< ages.length; i++){
  //  if(ages[i] >= 21){
    //    canDrink.push(ages[i])
    //}
//}

//const canDrink = ages.filter((age)=>{
    //if(age>= 21){
       // return true;
  //  }
//})

//const canDrink = ages.filter(age=> age >= 21 )

//Filtetr retail company

//const retailCompanies = companies.filter((company) => {
//  if(company.category === 'Retail'){
//        return true;
//    }
//})

//const retailCompanies = companies.filter((company) => company.category === 'Technology')

//const eightiesCompanies = companies.filter((company) => {
//   if( company.start < 1990){
//    return true;
//   }
//})

//const eightiesCompanies = companies.filter((company) =>company.start >= 1980 && company.start <= 1989 )

//const lastedTenYears = companies.filter((company) => (company.end - company.start >= 10));

//map
//?create array of company names
//const companyNames = companies.map((company) => {
//    return company.name
//})

//const testMap = companies.map((company) => {
//    return `${company.name} [${company.start} - ${company.end}]`
//})

//const testMap = companies.map((company) => `${company.name}  [${company.start} - ${company.end}]`);
//const ageMap =  ages.map((age) => Math.sqrt(age).toFixed(2))


//sort
//!Sort companies by start year
//const sortedCompanies = companies.sort((c1, c2 ) => {
//  if(c1.start > c2.start){
//    return 1;
//  }else{
//    return-1;
//  }
//});

//const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start)? 1 : -1 );

//const sortAges = ages.sort((a, b) => a - b)

//reduce

let ageSum  = 0;
for(let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}

//const ageSum1 = ages.reduce((total, age) => total + age, 0)

//Get total years for all companies
//const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)


//combine Methods

const combined = ages 
.map(age => age * 2)
.filter(age => age > 40)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0);

console.log(combined);