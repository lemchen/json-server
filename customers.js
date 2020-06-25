//customers.js
var faker = require('faker');
var faker = require('faker/locale/zh_CN');

function generateCustomers () {
  var customers = []

  for (var id = 0; id < 50; id++) {
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

  return { "customers": customers }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateCustomers
