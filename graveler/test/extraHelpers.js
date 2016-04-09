var _ = require("lodash")

module.exports = function (handlebars) {
  handlebars.registerHelper("get", function(list, index) {
    if (list == undefined || index == undefined) {
      return "";
    }
    if (!_.isArray(list)) {
      list = list.toString().split(",");
    }
    return list[index];
  });
  handlebars.registerHelper("isEmpty", function(a, options) {
    return (a == undefined || a === "") ? options.fn(this) : options.inverse(this);
  });
  handlebars.registerHelper("contain", function(a,b, options) {
    console.log("我在extraHelper.js中,尚未实现contain")
    return options.fn(this) ;
  }); 
  handlebars.registerHelper("containAny", function(a,b, options) {
    console.log("我在extraHelper.js中,尚未实现containAny")
    return options.fn(this) ;
  });  
}
