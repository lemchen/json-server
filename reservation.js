//customers.js
var faker = require('faker');
var faker = require('faker/locale/zh_CN');

module.exports = () => {
  var blank = []

  for (var i = 0; i < 150; i++) {
    var date = faker.date.future().toISOString().substr(0, 10)
    blank.push(
      date,
    )
  }

  return { "blank": blank }
}
