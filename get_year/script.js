function getYear() {
  const year = new Date().getFullYear();
  return year;
}

let yearToday = getYear();
console.log(yearToday);