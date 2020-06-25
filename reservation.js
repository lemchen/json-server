//customers.js
var faker = require('faker');
var faker = require('faker/locale/zh_CN');

function generateReservation () {
  var blank = []

  for (var i = 0; i < 150; i++) {
    var date = faker.date.future().toISOString().substr(0, 10)
    blank.push(
      date,
      // "reservation": reservation,
    )
  }

  return { "blank": blank }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateReservation
