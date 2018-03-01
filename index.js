let moment = require('moment');

let dateIni = moment('2018-02-01');
// let dateFin = moment('2018-03-31');

let periodicidad = 15;

let firstDayMonthIni = dateIni.date();
// let lastDayMonthIni = dateIni.endOf('month').date();

// let firstDayMonthFin = dateFin.date();

for (let i = 0; i <= 3; i++) {
  
  let journalDate = isBetweenFifteenDays(dateIni, periodicidad);

  console.log(journalDate);
  // dateIni.add(journalDate.days, 'days');

  // if (journalDate.lastChecked) {
  //   dateIni.endOf('month').date();
  // } else {
    
  // }
  
  // console.log(dateIni);

}


function isBetweenFifteenDays(date, periodicidad) {
  let dayIni = date.date();
  // let lastDayMonth = date.endOf('month').date();
  let days = dayIni;

  let obj = {};
  obj.firstChecked = false;
  obj.lastChecked = false;
 
  if (dayIni < periodicidad) {
    // # days to fifteen
    days = periodicidad - dayIni;
    obj.firstChecked = true;
    obj.date = date.add(days, 'days');
  } else {
    // # days to lastday of the month
    // days = dayIni - periodicidad;
    days = dayIni - periodicidad;
    obj.date = date.endOf('days');
    // dayIni += days;
    obj.lastChecked = true;
  }
  
  obj.days = days;

  return obj;
}