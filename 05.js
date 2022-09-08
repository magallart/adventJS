function daysToXmas(date) {
  const xmasDay = new Date('Dec 25, 2021')
  const differenceMilliseconds = date.getTime() - xmasDay.getTime();
  const differenceDays = Math.floor(differenceMilliseconds / (1000*3600*24));
  return differenceDays * -1;
}

const date1 = new Date('Dec 1, 2021')
const date2 = new Date('Dec 24, 2021 00:00:01')
const date3 = new Date('Dec 24, 2021 23:59:59')
const date4 = new Date("December 20, 2021 03:24:00")
const date5 = new Date('Dec 25, 2021')
const date6 = new Date('Dec 26, 2021')
const date7 = new Date('Dec 31, 2021')
const date8 = new Date('Jan 1, 2022 00:00:01')
const date9 = new Date('Jan 1, 2022 23:59:59')

console.log(daysToXmas(date1));
console.log(daysToXmas(date2));
console.log(daysToXmas(date3));
console.log(daysToXmas(date4));
console.log(daysToXmas(date5));
console.log(daysToXmas(date6));
console.log(daysToXmas(date7));
console.log(daysToXmas(date8));
console.log(daysToXmas(date9));