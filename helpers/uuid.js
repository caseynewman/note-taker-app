// our instructor had us pair in class on this homework
// creates random string for ID
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
