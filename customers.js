//customers.js
var faker = require('faker');
var faker = require('faker/locale/zh_CN');
// faker.setLocale("zh_CN");

function generateCustomers () {
  var customers = []
  var blank = []

  for (var id = 0; id < 50; id++) {
    // var firstName = faker.name.firstName()
    // var lastName = faker.name.firstName()
    var name = faker.name.firstName() + faker.name.lastName()
    var phoneNumber = faker.phone.phoneNumberFormat()
    var birthday = faker.date.past().toISOString().substr(0, 10)
    var address = faker.address.streetAddress()

    customers.push({
      "id": id,
      "name": name,
      "phone": phoneNumber,
      "birthday": birthday,
      "address": address,
    })
  }

  for (var i = 0; i < 150; i++) {
    var date = faker.date.future().toISOString().substr(0, 10)
    // var reservation = faker.random.boolean()
    blank.push(
      date,
      // "reservation": reservation,
    )
  }

  return { "blank": blank }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateCustomers
