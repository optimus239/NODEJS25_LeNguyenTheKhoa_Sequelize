let date_ob = new Date();
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let date =
  date_ob.getFullYear() +
  "-" +
  ("0" + (date_ob.getMonth() + 1)).slice(-2) +
  "-" +
  date_ob.getDate() +
  " " +
  date_ob.getHours() +
  ":" +
  date_ob.getMinutes() +
  ":" +
  date_ob.getSeconds();

module.exports = { date };
