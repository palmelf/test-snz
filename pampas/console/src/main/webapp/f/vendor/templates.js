(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates["group/app_list/templates/app_form_modal_content"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "readonly";
  }

function program3(depth0,data) {
  
  
  return "\n          <i class=\"lock icon\"></i>\n          ";
  }

function program5(depth0,data) {
  
  
  return "\n          <i class=\"asterisk icon\"></i>\n          ";
  }

function program7(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.domain)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program9(depth0,data) {
  
  
  return "{Domain}";
  }

function program11(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program13(depth0,data) {
  
  
  return "{App Key}";
  }

  buffer += "\n<form class=\"content ui form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>Key</label>\n      <div class=\"ui labeled input\">\n        <input name=\"key\" type=\"text\" placeholder=\"App Key\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.app), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        <div class=\"ui corner label\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.app), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Domain</label>\n      <div class=\"ui labeled input\">\n        <input name=\"domain\" type=\"text\" placeholder=\"Domain\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.domain)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Proxy Root</label>\n    <input name=\"proxyRoot\" type=\"text\" placeholder=\"default: http://";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.app), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.proxyRoot)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  </div>\n  <div class=\"field\">\n    <label>Assets Home</label>\n    <input name=\"assetsHome\" type=\"text\" placeholder=\"default: ";
  if (helper = helpers.rootPath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rootPath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.app), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.assetsHome)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  </div>\n  <div class=\"field\">\n    <label>Config Path</label>\n    <input name=\"configPath\" type=\"text\" placeholder=\"default: ";
  if (helper = helpers.rootPath) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rootPath); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.app), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/back_config.yaml\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.configPath)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  </div>\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>Config Js File</label>\n      <input name=\"configJsFile\" type=\"text\" placeholder=\"default: assets/scripts/config.js\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.configJsFile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    </div>\n    <div class=\"field\">\n      <label>Description</label>\n      \n      <textarea class=\"desc\" name=\"desc\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.app)),stack1 == null || stack1 === false ? stack1 : stack1.desc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n    </div>\n  </div>\n</form>\n";
  return buffer;
  });
templates["group/site_list/templates/site_form_modal_content"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<form class=\"content ui form\">\n  <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <input type=\"hidden\" name=\"app\" value=\"";
  if (helper = helpers.app) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.app); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"field\">\n    <label>Name</label>\n    <div class=\"ui labeled input\">\n      <input name=\"name\" type=\"text\" placeholder=\"Name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"ui corner label\">\n        <i class=\"asterisk icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Sub Domain</label>\n    <div class=\"ui labeled input\">\n      <input name=\"subdomain\" type=\"text\" placeholder=\"Sub Domain\" value=\"";
  if (helper = helpers.subdomain) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subdomain); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"ui corner label\">\n        <i class=\"asterisk icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui icon info message\" style=\"display:block;\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <p>\n        sub domain 可选填 <span class=\"ui label\">/</span> 或者 <span class=\"ui label\">字母数字下划线横线组成的字串</span>\n        <br/>\n        当填写 <span class=\"ui label\">/</span> 时代表是该 app 的主站\n      </p>\n    </div>\n  </div>\n</form>\n";
  return buffer;
  });
templates["settings/users/user_list/templates/user_form_modal_content"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "readonly";
  }

function program3(depth0,data) {
  
  
  return "\n          <i class=\"lock icon\"></i>\n          ";
  }

function program5(depth0,data) {
  
  
  return "\n          <i class=\"asterisk icon\"></i>\n          ";
  }

function program7(depth0,data) {
  
  
  return "\n    <input name=\"password\" type=\"password\" placeholder=\"password for login\">\n    ";
  }

function program9(depth0,data) {
  
  
  return "\n    <div class=\"ui labeled input\">\n      <input name=\"password\" type=\"password\" placeholder=\"password for login\">\n      <div class=\"ui corner label\">\n        <i class=\"asterisk icon\"></i>\n      </div>\n    </div>\n    ";
  }

  buffer += "\n<form class=\"content ui form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>Name</label>\n      <div class=\"ui labeled input\">\n        <input name=\"name\" type=\"text\" placeholder=\"username for login\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        <div class=\"ui corner label\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Real Name</label>\n      <div class=\"ui labeled input\">\n        <input name=\"realName\" type=\"text\" placeholder=\"real name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.realName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"ui corner label\">\n          <i class=\"asterisk icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Email</label>\n    <div class=\"ui labeled input\">\n      <input name=\"email\" type=\"text\" placeholder=\"email for notification\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <div class=\"ui corner label\">\n        <i class=\"asterisk icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Password</label>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</form>\n";
  return buffer;
  });
templates["settings/users/user_permission/templates/permission_item"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div class=\"item\" data-permission=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\n  <div class=\"right floated\">\n    <a href=\"#\" class=\"js-link-del-permission\"><i class=\"trash icon\"></i></a>\n  </div>\n  "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n</div>\n";
  return buffer;
  });

})();
