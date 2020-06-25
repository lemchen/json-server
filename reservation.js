//customers.js
var faker = require('faker');
var faker = require('faker/locale/zh_CN');

module.exports = () => {
  var blank = []

  for (var i = 0; i < 356; i++) {
    var date = faker.date.future().toISOString().substr(0, 10)
    blank.push(
      date,
    )
  }
  // function unique (arr) {
  //   return Array.from(new Set(arr))
  // }

  function unique(arr){            
    for(var i=0; i<arr.length; i++){
      for(var j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
          arr.splice(j,1);
            j--;
        }
      }
    }
    return arr;
  }
  
  blank.sort(function(a, b) {
    return Date.parse(a.replace(/-/g,"/"))-Date.parse(b.replace(/-/g,"/"));
  })
  unique(blank)


  return { "blank": blank }
}
