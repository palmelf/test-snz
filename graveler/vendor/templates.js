(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates["admins/associated_companies/templates/tr"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
Handlebars.registerPartial("admins/back_category/templates/_category_item", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "<i class=\"operate-status js-delete-category icon-del20\"></i>";
  }

function program3(depth0,data) {
  
  
  return "<i class=\"icon-littlearrow next\"></i><i class=\"icon-whitearrow next hide\"></i>";
  }

  buffer += "\n<li class=\"divide-li\" data-category=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"normal-status\">\n    <div class=\"operate-span\">\n      <i class=\"operate-status js-edit-category icon-edit20\"></i>\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasChildren), "false", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.hasChildren), "false", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasChildren), "true", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.hasChildren), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <a href=\"javascript:void(0);\" class=\"item-pop\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n\n  </div>\n  <form class=\"form category-edit-form update-category-group\" style=\"display: none;\" onkeydown=\"if(event.keyCode==13){return false;}\">\n      <div class=\"input-group input-group-append\">\n        <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <input type=\"text\" class=\"update-category-input group-input\" name=\"name\"><span class=\"input-group-btn\">\n          <button class=\"btn btn-success js-update-category\" type=\"button\">修改</button>\n        </span>\n      </div>\n  </form>\n</li>\n\n\n";
  return buffer;
  }));
templates["admins/back_category/templates/category"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "frontCategory";
  }

function program3(depth0,data) {
  
  
  return "backCategory";
  }

function program5(depth0,data) {
  
  
  return "一级类目";
  }

function program7(depth0,data) {
  
  
  return "二级类目";
  }

function program9(depth0,data) {
  
  
  return "三级类目";
  }

function program11(depth0,data) {
  
  
  return "四级类目";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li class=\"divide-li\" data-category=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <div class=\"normal-status\">\n            <div class=\"operate-span\">\n              <i class=\"operate-status js-edit-category icon-edit20\"></i>\n              ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasChildren), "false", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.hasChildren), "false", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasChildren), "true", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.hasChildren), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a href=\"javascript:void(0);\" class=\"item-pop\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n\n          </div>\n          <form class=\"form category-edit-form update-category-group \" style=\"display: none;\" onkeydown=\"if(event.keyCode==13){return false;}\">\n              <div class=\"input-group input-group-append\">\n                <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <input type=\"text\" class=\"update-category-input\" name=\"name\"><span class=\"input-group-btn\">\n                  <button class=\"btn btn-success js-update-category\" type=\"button\">修改</button>\n                </span>\n              </div>\n          </form>\n        </li>\n      ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "<i class=\"operate-status js-delete-category icon-del20\"></i>";
  }

function program16(depth0,data) {
  
  
  return "<i class=\"icon-littlearrow next\"></i><i class=\"icon-whitearrow next hide\"></i>";
  }

  buffer += "<div class=\"category category-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " js-comp\" data-level=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-comp-path=\"category_item/category\" data-type=\"";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <div class=\"category-header\">\n    <p class=\"item-name-p\"><strong class=\"item-name\">\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 1, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 2, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 3, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 4, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></p>\n    <div class=\"sharp\">\n      <span class=\"up\"></span>\n      <span class=\"low\"></span>\n    </div>\n  </div>\n  <div class=\"category-body\">\n    <div class=\"search-item\">\n      <div class=\" search-item-group\">\n        <i class=\"icon-fdj12\"></i>\n        <input type=\"text\" class=\"search-item-input js-search-item\" placeholder=\"搜索关键字\" >\n      </div>\n    </div>\n    <ul class=\"divide-ul\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <div class=\"bottom-li\"></div>\n    <div class=\"bottom-add-category\">\n      <form class=\"category-form form\" onkeydown=\"if(event.keyCode==13){return false;}\">\n        <div class=\"input-group input-group-append add-category-group\">\n          <input id=\"category-id\" type=\"hidden\" name=\"parentId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.parentId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n          <input type=\"text\" class=\"group-input js-new-category\" name=\"name\" ><span class=\"input-group-btn\">\n            <button class=\"btn btn-success js-add-category\" type=\"button\">添加</button>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n";
  return buffer;
  });
Handlebars.registerPartial("admins/category_manage/templates/_attribute_value_item", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<li class=\"attr-value-li\" data-attr-value=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n  <span class=\"input-icon\">\n    <input type=\"text\" class=\"attribute-show\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" readonly=\"true\">\n    <i class=\"icon-del11x13 input-right js-attribute-value-delete\"></i>\n  </span>\n</li>\n";
  return buffer;
  }));
Handlebars.registerPartial("admins/category_manage/templates/_back_category_key", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)));
  }

  buffer += "<li class=\"attribute-li\" data-attribute=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n  <span class=\"attribute\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span class=\"attr\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"attribute-number\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.index), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>.&nbsp;";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </span>\n  <span class=\"operate on-hover\">\n    <span class=\"js-attr-value-get\" style=\"margin: 0 20px 0 10px;\">\n      <a href=\"javascript:void(0);\">查看属性</a>\n    </span>\n    <button class=\"btn btn-small js-attr-edit\">编辑属性值</button>\n    <span>\n      <button id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-small\" data-toggle=\"confirm\" data-title=\"您确定删除吗?\" data-content=\"删除之后若要恢复请重新添加\" data-event=\"confirm:deleteAttribute\">删除</button>\n    </span>\n  </span>\n</li>\n";
  return buffer;
  }));
Handlebars.registerPartial("admins/category_manage/templates/_spu_item", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<li class=\"spu-item-li\" data-spu=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n  <span class=\"spu-id\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  &nbsp;\n  <span class=\"spu-name\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </span>\n  <span class=\"operate on-hover\">\n    <span style=\"margin-right:40px;\">\n      <a href=\"javascript:void(0);\" class=\"js-spu-attr-get\" > 查看属性</a>\n    </span>\n    <button class=\"btn btn-small js-spu-update\">编辑</button>\n    <div class=\"dropdown-group\">\n      <div class=\"btn btn-small dropdown-title\">\n        <div class=\"dropdown-btn\">\n          更多操作\n          <span class=\"caret\"></span>\n        </div>\n        <div class=\"dropdown-menu hide\">\n          <div class=\"spu-operate-item\"><a href=\"/operations/spu_detail?spuId=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">编辑产品信息</a></div>\n          <div class=\"spu-operate-item\"><a href=\"";
  if (helper = helpers.domain) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.domain); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/design/item-templates/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">编辑产品详情</a></div>\n          <div class=\"spu-operate-item\"><a id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"javascript:void(0);\" data-toggle=\"confirm\" data-title=\"您确定删除吗?\" data-content=\"删除之后若要恢复请重新添加\" data-event=\"confirm:deleteSpu\">删除</a></div>\n        </div>\n      </div>\n    </div>\n  </span>\n</li>\n";
  return buffer;
  }));
templates["admins/category_manage/templates/attribute_create"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<li class=\"add-attr-li\" style=\"list-style-type: none;\">\n  <form class=\"add-attribute-form form\" onkeydown=\"if(event.keyCode==13){return false;}\">\n    <div class=\"form-line\">\n      <div class=\"input-group input-group-append\" style=\"display:inline-table;position:relative;\">\n        <input type=\"text\" class=\"update-category-input\" name=\"name\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-success js-create-attribute\" type=\"button\">添加</button>\n        </span>\n      </div>\n      <button type=\"button\" class=\"btn js-attribute-cancel\" style=\"margin-left:20px;\">取消</button>\n    </div>\n\n  </form>\n</li>\n";
  });
templates["admins/category_manage/templates/attribute_value_update"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"menu-panel left\" style=\"display:block;\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div class=\"properties-edit-panel properties-edit\">\n    <ul style=\"width: 160px;\">\n      <li><label class=\"properties-edit-label\" for=\"\">编辑属性</label></li>\n      <li class=\"attr-value-li\">\n        <span class=\"input-icon\">最小量（配额100%）:\n          <input type=\"text\" class=\"attribute-show\" name=\"value1\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <i class=\"icon-del11x13 input-right js-attribute-value-delete\"></i>\n        </span>\n      </li>\n      <li class=\"attr-value-li\">\n        <span class=\"input-icon\">两家合作供应商标准（配额70%、30%）:\n          <input type=\"text\" class=\"attribute-show\" name=\"value2\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <i class=\"icon-del11x13 input-right js-attribute-value-delete\"></i>\n        </span>\n      </li>\n      <li class=\"attr-value-li\">\n        <span class=\"input-icon\">三家合作供应商标准（配额50%、30%、20%）:\n          <input type=\"text\" class=\"attribute-show\" name=\"value3\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <i class=\"icon-del11x13 input-right js-attribute-value-delete\"></i>\n        </span>\n      </li>\n      <li>\n        <div class=\"button-group\">\n          <button type=\"button\" class=\"btn btn-small btn-primary js-menu-edit\">修改</button>          \n          <button type=\"button\" class=\"btn btn-small btn-info js-menu-cancel\">关闭</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  });
templates["admins/category_manage/templates/attribute_value_view"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <span class=\"attribute-value\">  最小量: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </li>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <span class=\"attribute-value\">资源量2: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </li>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <span class=\"attribute-value\">资源量3: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n      </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"menu-panel left\" style=\"display:block;\">\n  <div class=\"properties-edit-panel\" >   \n    <ul class=\"properties-edit-ul\">\n      <li><label for=\"\" class=\"properties-edit-label\"><a>查看属性值</a></label></li>\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value1), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value2), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.value3), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  });
templates["admins/category_manage/templates/attributes_manage"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials['admins/category_manage/templates/_back_category_key'], 'admins/category_manage/templates/_back_category_key', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/company_info/templates/customer"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.appliance), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.car), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.other), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr>\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.customerFile), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n  </tr>\n";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.appliance), options) : helperMissing.call(depth0, "length", (depth2 && depth2.appliance), options)))
    + "\">家电行业</td>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"";
  if (helper = helpers.customerFile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customerFile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">附件</a>";
  return buffer;
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr>\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.customerFile), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n  </tr>\n";
  return buffer;
  }
function program8(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.car), options) : helperMissing.call(depth0, "length", (depth2 && depth2.car), options)))
    + "\">汽车行业</td>";
  return buffer;
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr>\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(11, program11, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.customerFile), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n  </tr>\n";
  return buffer;
  }
function program11(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.other), options) : helperMissing.call(depth0, "length", (depth2 && depth2.other), options)))
    + "\">其他行业</td>";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.content), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
templates["admins/company_info/templates/factory"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr>\n    <td>\n      <span data-country=\"";
  if (helper = helpers.country) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.country); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n      &nbsp;\n      <span data-province=\"";
  if (helper = helpers.province) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.province); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n      &nbsp;\n      <span data-parent=\"";
  if (helper = helpers.province) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.province); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-city=\"";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n    </td>\n    <td>\n      ";
  if (helper = helpers.size) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.size); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </td>\n    <td>\n      ";
  if (helper = helpers.employee) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.employee); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </td>\n    <td>\n      ";
  if (helper = helpers.factoryFixedAssets) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryFixedAssets); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </td>\n  </tr>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/credit_list/templates/credit"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal bind-category-pop\">\n  <div class=\"modal-header\">\n    <h2>信用评价</h2>\n  </div>\n  <form class=\"form form-aligned credit-form\" id=\"reject-form\">\n    <div class=\"modal-dialog\">\n      <div class=\"control-group\">\n        <label for=\"sites-name\">评价等级:</label>\n        <input type=\"hidden\" name=\"id\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <select name=\"status\" id=\"credit-select\">\n          <option value=\"4\">AAA</option>\n          <option value=\"3\">AA</option>\n          <option value=\"2\">A</option>\n          <option value=\"1\">BBB</option>\n          <option value=\"-1\">B</option>\n          <option value=\"-2\">C</option>\n          <option value=\"-3\">其他</option>\n          <option value=\"-4\">财务报表异常</option>\n        </select>\n      </div>\n      <div class=\"control-group\" style=\"display: none;\">\n        <label for=\"sites-name\">其他意见:</label>\n        <input type=\"text\" name=\"msg\">\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-medium btn-primary\" type=\"submit\">确定</button>\n      <button class=\"btn btn-medium close\" type=\"button\">取消</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/delivery/templates/device"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <tr class=\"device-group-tr\">\n      <td class=\"control-group\">\n      ";
  if (helper = helpers.device) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.device); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </td>\n      <td class=\"control-group\">\n      ";
  if (helper = helpers.parameter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parameter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </td>\n      <td>\n      ";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </td>\n      <td>\n        <span class=\"file-name\">\n         <a href=\"";
  if (helper = helpers.deviceFile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.deviceFile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">附件</a>\n       </span>\n      </td>\n    </tr>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n  <tr class=\"device-group-tr\">\n    <td class=\"control-group\"></td>\n    <td class=\"control-group\"></td>\n    <td class=\"control-group\"></td>\n    <td></td>\n  </tr>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/demand_detail/templates/time_plan"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-requirement=\"";
  if (helper = helpers.requirementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.requirementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>计划时间</p>\n          <ul style=\"margin-left:50px;\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.predictTimeList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ul>\n          <br>\n          <p>实际时间</p>\n          ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li class=\"plan-step-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <span class=\"plan-title\">";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "3", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "4", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "4", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "5", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n              <div class=\"date-div ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), 5, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"requirement-mutual-period\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:30px;margin-bottom:20px;\">\n                "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.predictStart), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.predictStart), "day", options)))
    + " - "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.predictEnd), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.predictEnd), "day", options)))
    + "\n              </div>\n            </li>\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "active";
  }

function program7(depth0,data) {
  
  
  return "需求交互";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "1", options) : helperMissing.call(depth0, "equals", ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "需求锁定";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "<i class=\"icon-plan-title-arrow\"></i>";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "2", options) : helperMissing.call(depth0, "equals", ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "方案交互";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "3", options) : helperMissing.call(depth0, "equals", ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "方案终投";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "4", options) : helperMissing.call(depth0, "equals", ((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.requirement)),stack1 == null || stack1 === false ? stack1 : stack1.status), "4", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "选定供应商与方案";
  return buffer;
  }

function program18(depth0,data) {
  
  
  return "last";
  }

function program20(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li class=\"plan-step-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), (depth1 && depth1.status), options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), (depth1 && depth1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <span class=\"plan-title\">";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.programWithDepth(21, program21, data, depth0),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.programWithDepth(23, program23, data, depth0),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "3", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.programWithDepth(25, program25, data, depth0),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "4", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "4", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth0),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "5", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n              <div class=\"date-div control-group\" id=\"requirement-mutual-period\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <span class=\"required\">*</span><span class=\"time-desc-span\">开始时间</span><div class=\"input-group input-group-append\" style=\"display:inline-block;\">\n                  <input type=\"text\" class=\"datepicker predict-start time-input\" style=\"width:65px\" placeholder=\"开始时间\" value=\""
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.predictStart), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.predictStart), "day", options)))
    + "\" ";
  stack1 = (helper = helpers.lt || (depth0 && depth0.lt),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), (depth1 && depth1.status), options) : helperMissing.call(depth0, "lt", (depth0 && depth0.type), (depth1 && depth1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                  <span class=\"input-group-btn\">\n                  <button class=\"btn calendar\" type=\"button\" ";
  stack1 = (helper = helpers.lt || (depth0 && depth0.lt),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), (depth1 && depth1.status), options) : helperMissing.call(depth0, "lt", (depth0 && depth0.type), (depth1 && depth1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                  <i class=\"icon-calendar\"></i>\n                  </button>\n                  </span>\n                </div><br><br>\n                <span class=\"required\">*</span><span class=\"time-desc-span\">结束时间</span><div class=\"input-group input-group-append\" style=\"display:inline-block;\">\n                  <input type=\"text\" class=\"datepicker predict-end time-input\" style=\"width:65px\" placeholder=\"截止时间\" value=\""
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.predictEnd), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.predictEnd), "day", options)))
    + "\" ";
  stack1 = (helper = helpers.lt || (depth0 && depth0.lt),options={hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), (depth1 && depth1.status), options) : helperMissing.call(depth0, "lt", (depth0 && depth0.type), (depth1 && depth1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                  <span class=\"input-group-btn\">\n                  <button class=\"btn calendar\" type=\"button\"";
  stack1 = (helper = helpers.lt || (depth0 && depth0.lt),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), (depth1 && depth1.status), options) : helperMissing.call(depth0, "lt", (depth0 && depth0.type), (depth1 && depth1.status), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                  <i class=\"icon-calendar\"></i>\n                  </button>\n                  </span>\n                </div>\n              </div>\n            </li>\n            ";
  return buffer;
  }
function program21(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.status), "1", options) : helperMissing.call(depth0, "equals", (depth1 && depth1.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "需求锁定";
  return buffer;
  }

function program23(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.status), "2", options) : helperMissing.call(depth0, "equals", (depth1 && depth1.status), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "方案交互";
  return buffer;
  }

function program25(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.status), "3", options) : helperMissing.call(depth0, "equals", (depth1 && depth1.status), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "方案终投";
  return buffer;
  }

function program27(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.status), "4", options) : helperMissing.call(depth0, "equals", (depth1 && depth1.status), "4", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "选定供应商与方案";
  return buffer;
  }

function program29(depth0,data) {
  
  
  return "readOnly";
  }

function program31(depth0,data) {
  
  
  return "data-write=\"true\"";
  }

function program33(depth0,data) {
  
  
  return "disabled";
  }

  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>申请延期</h2>\n  </div>\n  <form class=\"form form-aligned\" id=\"time-form\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requirement), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <div class=\"modal-body\">\n      <div class=\"time-plan\" style=\"margin-top:0;\">\n        <div class=\"plan-step clearfix\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.predictTimeList), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <ul>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.requirementTimes), {hash:{},inverse:self.noop,fn:self.programWithDepth(20, program20, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <li class=\"plan-step-6\">\n              <span class=\"plan-title\">&nbsp;</span>\n              <div class=\"date-div\">结果公示</div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <input class=\"btn btn-primary btn-medium\" type=\"submit\" value=\"确定\">\n      &nbsp;\n      <button class=\"btn btn-info btn-medium close\">取消</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/demand_module/templates/identifies_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <li>\n        <label for=\"category-scope-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"scope-category-label\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <input id=\"category-scope-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"checkbox\" name=\"joinerId\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"menu menu-dropdown up select-menu\" id=\"identifies-select-menu\">\n  <ul id=\"identifies-select-ul\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n  <p class=\"product-operate-p\">\n    <button type=\"button\" class=\"btn btn-small btn-primary btn-info js-save-identifies-scope\">确定</button>&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-small btn-info close\">取消</button>\n  </p>\n</div>\n";
  return buffer;
  });
templates["admins/demand_module/templates/module_edit"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <input type=\"hidden\" value=\"2\" name=\"type\">\n      <input type=\"hidden\" value=\"";
  if (helper = helpers.requirementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.requirementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"requirementId\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"form-left\">\n        <div class=\"control-group\">\n          <label for=\"moduleNum\">模块专用号:</label>\n          <input id=\"moduleNum\" name=\"moduleNum\" type=\"text\" placeholder=\"请输入模块专用号\" value=\"";
  if (helper = helpers.moduleNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moduleNum), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-num=\"";
  if (helper = helpers.moduleNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.moduleNum), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"control-group\">\n          <label for=\"category\"><span class=\"required\">*</span>模块描述:</label>\n          <input id=\"name\" name=\"moduleName\" type=\"text\" placeholder=\"请输入物料号名称\" required value=\"";
  if (helper = helpers.moduleName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.moduleName), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        </div>\n        <div class=\"control-group\">\n          <label>模块属性:</label>\n          <select class=\"select\" style=\"width:164px;\" id=\"module-category\" name=\"seriesId\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.seriesId), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.seriesIds), {hash:{},inverse:self.noop,fn:self.programWithDepth(12, program12, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        </div>\n        <div class=\"control-group\">\n          <label>产品分类:</label>\n          <select class=\"select\" style=\"width:164px;\" id=\"category-property\" name=\"propertyId\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.propertyId), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></select>\n        </div>\n        \n        <div class=\"control-group\" style=\"width:900px;\">\n          <label for=\"attestation\"><span class=\"required\">*</span>认证:</label>\n          <span id=\"attestation-select-multiple\" class=\"data-validate-item\" style=\"position:relative;\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attestations), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attestationId), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            <button class=\"btn js-select-multiple\" style=\"width:164px;\" type=\"button\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requirementId), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">请选择认证 &nbsp;<span class=\"caret\" style=\"margin-top:4px;\"></span></button>\n            <span class=\"attestation-show\"></span>\n          </span>\n        </div>\n        <div class=\"control-group\">\n          <label for=\"quality\">质量目标:</label>\n          <input id=\"quality\" name=\"quality\" type=\"text\" placeholder=\"请输入质量目标\" value=\"";
  if (helper = helpers.quality) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quality); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> PPM\n        </div>\n        <div class=\"control-group\" id=\"cost-group\">\n          <label for=\"cost\">成本目标:</label>\n          <input id=\"cost\" name=\"cost\" type=\"text\" placeholder=\"请输入成本目标,最多2位小数\" value=\""
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.cost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.cost), options)))
    + "\" pattern=\"^(\\d+\\.[0-9]{1,2})$|^(\\d+)$\"/> ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.units), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"control-group\" id=\"delivery-group\">\n          <label for=\"delivery\">高峰月产能:</label>\n          <input id=\"delivery\" name=\"delivery\" type=\"text\" placeholder=\"请输入产能要求\" value=\"";
  if (helper = helpers.delivery) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.delivery); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.units), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"control-group\">\n          <label for=\"supplyAt\"><span class=\"required\">*</span>要求供货时间:</label>\n          <input type=\"text\" id=\"supplyAt\" placeholder=\"请选择要求供货时间\" class=\"datepicker\" name=\"supplyAt\" value=\""
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.supplyAt), "day", options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.supplyAt), "day", options)))
    + "\" required>\n        </div>\n      </div>\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<input type=\"hidden\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"id\">";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "readOnly";
  }

function program8(depth0,data) {
  
  
  return "<button class=\"btn btn-primary js-search-module\" style=\"vertical-align:baseline;\" type=\"button\">搜索</button>";
  }

function program10(depth0,data) {
  
  
  return "disabled";
  }

function program12(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"";
  if (helper = helpers.bcId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bcId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.seriesId), (depth0 && depth0.bcId), options) : helperMissing.call(depth0, "equals", (depth1 && depth1.seriesId), (depth0 && depth0.bcId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }
function program13(depth0,data) {
  
  
  return "selected";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-property=\"";
  if (helper = helpers.propertyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.propertyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-checkdata=\"";
  if (helper = helpers.attestations) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.attestations); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-id=\"";
  if (helper = helpers.attestationId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.attestationId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "data-id=\"";
  if (helper = helpers.requirementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.requirementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "元/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.quantityName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program25(depth0,data) {
  
  
  return "元/";
  }

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.units)),stack1 == null || stack1 === false ? stack1 : stack1.delivery)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"control-group resource-group\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <label style=\"width:60px;\"><span class=\"required\">*</span>";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</label>\n          <input type=\"text\" pattern=\"^\\d+00$\" placeholder=\"请输入整百正整数\" class=\"resource-input\" data-num=\"";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.factoryName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.resourceNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resourceNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> <select class=\"unit-sales input-small\" readOnly><option value=\"";
  if (helper = helpers.salesId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.salesName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.salesName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option></select>\n        </div>\n          ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.factory), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <div class=\"control-group resource-group\">\n            <label style=\"width:60px;\"><span class=\"required\">*</span>";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</label>\n            <input type=\"text\" pattern=\"^\\d+00$\" placeholder=\"请输入整百正整数\" class=\"resource-input\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-num=\"";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.factoryName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n          </div>\n          ";
  return buffer;
  }

  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>模块配置</h2>\n  </div>\n  <form class=\"form form-aligned module-form\" data-type=\"2\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-series=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.seriesIds), options) : helperMissing.call(depth0, "pp", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.seriesIds), options)))
    + "\">\n    <div class=\"module-new modal-body\">\n    ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.module), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"form-right\">\n        <div>资源量:</div>\n        <div class=\"control-group\">\n          <p>1. 标注“<span class=\"currency\">*</span>”是必填项，公示给供应商，其他项可在需求锁定环节锁定<br>2. 请先检查配额分配规则是否制定，否则无法计算合作供应商数量和模块配额分配比例<br>3. 资源量值必须填写整百正整数，如100、9900等</p>\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.program(32, program32, data),fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <input type=\"submit\" class=\"btn btn-success btn-medium\" value=\"确定\">\n      <button class=\"btn btn-info btn-medium close\">关闭</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/demand_module/templates/module_item"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.seriesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.attestationsName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.quality), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  <td width=\"100\">"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options) : helperMissing.call(depth0, "formatPrice", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options)))
    + "元/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.quantityName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td width=\"100\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.delivery), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.supplyAt), "day", options) : helperMissing.call(depth0, "formatDate", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.supplyAt), "day", options)))
    + "</td>\n  <td>";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.checkResult), "2", options) : helperMissing.call(depth0, "of", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.checkResult), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <td width=\"80\">";
  if (helper = helpers.resourceNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resourceNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.salesName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.quality)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "PPM";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.delivery)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.delivery)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program8(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "0,1,2", options) : helperMissing.call(depth0, "of", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "0,1,2", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<a href=\"javascript:void(0);\" class=\"js-edit-module\" data-module=\""
    + escapeExpression((helper = helpers.json || (depth0 && depth0.json),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "json", depth0, options)))
    + "\">修改</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"confirm\" data-title=\"您确定删除吗?\" data-content=\"删除之后需要无法恢复，只能重新添加\" data-event=\"confirm:delete-module\" class=\"js-delete-module\">删除</a>";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "模块已锁定";
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.moduleInfo), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/demand_module/templates/select_unit"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<select class=\"unit-quantity input-small\">\n  <option value=\"1\" data-name=\"1\">1</option>\n  <option value=\"2\" data-name=\"10\">10</option>\n  <option value=\"3\" data-name=\"100\">100</option>\n  <option value=\"4\" data-name=\"1000\">1000</option>\n</select>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasQuantity), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<select class=\"unit-sales input-small\">\n  <option value=\"1\" data-name=\"EA\">EA</option>\n  <option value=\"2\" data-name=\"JUA\">JUA</option>\n  <option value=\"3\" data-name=\"KG\">KG</option>\n  <option value=\"4\" data-name=\"BAG\">BAG</option>\n  <option value=\"5\" data-name=\"BOT\">BOT</option>\n  <option value=\"6\" data-name=\"G\">G</option>\n  <option value=\"7\" data-name=\"L\">L</option>\n  <option value=\"8\" data-name=\"M\">M</option>\n  <option value=\"9\" data-name=\"M2\">M2</option>\n  <option value=\"10\" data-name=\"M3\">M3</option>\n  <option value=\"11\" data-name=\"ML\">ML</option>\n  <option value=\"12\" data-name=\"MM\">MM</option>\n  <option value=\"13\" data-name=\"PIA\">PIA</option>\n  <option value=\"14\" data-name=\"TAO\">TAO</option>\n  <option value=\"15\" data-name=\"TEN\">TEN</option>\n  <option value=\"16\" data-name=\"TIA\">TIA</option>\n  <option value=\"17\" data-name=\"TO\">TO</option>\n  <option value=\"18\" data-name=\"ZHA\">ZHA</option>\n</select>";
  return buffer;
  });
Handlebars.registerPartial("admins/fixed_category/templates/_fixed_category", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "一级类目";
  }

function program3(depth0,data) {
  
  
  return "二级类目";
  }

function program5(depth0,data) {
  
  
  return "三级类目";
  }

function program7(depth0,data) {
  
  
  return "四级类目";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li class=\"divide-li\" data-category=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n          <span class=\"normal-status\">\n            <a href=\"javascript:void(0);\" class=\"item-pop\"><span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a>\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.hasChild), "true", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.hasChild), "true", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </span>\n        </li>\n      ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "<i class=\"icon-littlearrow next\"></i>";
  }

  buffer += "<div class=\"category category-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " js-comp\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div class=\"category-header\">\n    <p class=\"item-name-p\"><strong class=\"item-name\">\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 1, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 2, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 3, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 4, options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.extras)),stack1 == null || stack1 === false ? stack1 : stack1.level), 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></p>\n    <div class=\"sharp\">\n      <span class=\"up\"></span>\n      <span class=\"low\"></span>\n    </div>\n  </div>\n  <div class=\"form category-body\">\n    <div class=\"search-item\">\n      <div class=\" search-item-group\">\n        <i class=\"icon-fdj12\"></i>\n        <input type=\"text\" class=\"search-item-input js-search-item\" placeholder=\"搜索关键字\" >\n      </div>\n    </div>\n    <ul class=\"divide-ul\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  }));
templates["admins/front_category_bind/templates/front_category_bind"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <label class=\"binded-label\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-path=\"";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-trash-small js-delete-binded-category\"></i>&nbsp;&nbsp;&nbsp;已绑定: <span>";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></label>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "hide";
  }

  buffer += "<div class=\"front-category-bind js-comp\" data-comp-path=\"front_category_bind/front_category_bind\" data-frontid=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.frontCategoryData), options) : helperMissing.call(depth0, "pp", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.frontCategoryData), options)))
    + "\">\n  <div class=\"bind-header\">\n  	<span class=\"bind-header-span\">后台类目</span>\n  </div>\n  <button class=\"btn btn-primary btn-small js-front-category-select\">增加后台类目</button>\n  <div class=\"bind-category-show\">\n  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <button class=\"btn btn-primary btn-small js-front-category-bind ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), "", options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">绑定</button>\n  <button class=\"btn btn-small js-front-category-delete ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), "", options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"confirm\" data-title=\"您确定解除所有绑定吗?\" data-content=\"解除之后需要重新绑定，确定解除吗？\" data-event=\"confirm:delete-bind\">解除所有绑定</button>\n</div>\n";
  return buffer;
  });
templates["admins/front_category_bind/templates/popup_bind"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"modal bind-category-pop\">\n  <div class=\"modal-header\">\n    <h2>绑定前台类目</h2>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"popup-bind js-comp\" data-comp-path=\"admins/fixed_category/view\">\n      <div class=\" form pop-main\">\n        <div class=\"category-list fixed-category\">\n          ";
  stack1 = self.invokePartial(partials['admins/fixed_category/templates/_fixed_category'], 'admins/fixed_category/templates/_fixed_category', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-success btn-medium js-bind-front-category\" type=\"button\">确定</button>\n    <button class=\"btn btn-medium close\">取消</button>\n  </div>\n</div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/factory_select_num"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <tr>\n            <td>";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.factoryName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td><input type=\"number\" name=\"selectNum\" class=\"input-small\" value=\"";
  if (helper = helpers.selectNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" max=\"3\" min=\"1\" data-num=\"";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required></td>\n          </tr>\n          ";
  return buffer;
  }

  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>修改模块供应商数量</h2>\n  </div>\n  <form class=\"form form-aligned select-num-form\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-req=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.requirementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"modal-body\">\n      <div class=\"control-group\">\n        <label class=\"factory-label\">模块名称:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"control-group\">\n        <label class=\"factory-label\">模块专用号:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"control-group\">\n        <label class=\"factory-label\">模块属性:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.seriesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <table class=\"table table-striped\" style=\"width: 580px;\">\n        <thead>\n          <tr>\n            <th width=\"80\">工厂代号</th>\n            <th width=\"400\">工厂全称</th>\n            <th width=\"100\">对应供应商数量</th>\n          </tr>\n        </thead>\n        <tbody>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n      </table>\n    </div>\n    <div class=\"modal-footer\">\n      <input type=\"submit\" class=\"btn btn-primary btn-medium\" value=\"确定\" />\n      <button class=\"btn btn-info btn-medium close\">关闭</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/list_topic"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr>\n      <td class=\"topic-req-status\"></td>\n      <td><a href=\"/topic_detail?id=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n      <td><span class=\"currency\">";
  if (helper = helpers.totalViews) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalViews); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n      <td><span class=\"currency\">";
  if (helper = helpers.totalReplies) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalReplies); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n      <td>";
  if (helper = helpers.userName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td>\n        <span>\n          ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.scope), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.scope), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n      </td>\n      <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), options)))
    + "</td>\n    </tr>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            公开\n          ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            圈子(";
  if (helper = helpers.joiners) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.joiners); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "人)\n          ";
  return buffer;
  }

  buffer += "<tbody class=\"topics-body\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.topics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tbody>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/manual_update_quotation"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <tr class=\"quota-tr\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <td>"
    + escapeExpression((helper = helpers.multiple || (depth0 && depth0.multiple),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.quantity), 100, (depth0 && depth0.scale), options) : helperMissing.call(depth0, "multiple", (depth0 && depth0.quantity), 100, (depth0 && depth0.scale), options)))
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.costUnit)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>";
  if (helper = helpers.scale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%</td>\n            <td>";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.costUnit)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td><input type=\"text\" pattern=\"^((?!0)\\d{1,2}|100)$\" name=\"scale\" style=\"width:30px !important;\" value=\"";
  if (helper = helpers.scale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-original=\"";
  if (helper = helpers.scale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-total=\""
    + escapeExpression((helper = helpers.multiple || (depth0 && depth0.multiple),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.quantity), 100, (depth0 && depth0.scale), options) : helperMissing.call(depth0, "multiple", (depth0 && depth0.quantity), 100, (depth0 && depth0.scale), options)))
    + "\" title=\"请输入1-100之间的正整数\" required> %</td>\n            <td class=\"update-quotation-count\"><span data-quantity=";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.costUnit)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n          </tr>\n          ";
  return buffer;
  }

  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>修改供应商模块工厂配额</h2>\n  </div>\n  <form class=\"form form-aligned update-quota-form\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-req=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.requirementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"modal-body\">\n      <div class=\"control-group\">\n        <label class=\"factory-label\">模块名称:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"control-group\">\n        <label class=\"factory-label\">模块专用号:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <div class=\"control-group\">\n        <label class=\"factory-label\">工厂:</label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.factoryNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.factoryName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </div>\n      <table class=\"table table-striped\" style=\"width: 800px;\">\n        <thead>\n          <tr>\n            <th width=\"100\">资源总量</th>\n            <th width=\"300\">中选供应商名称</th>\n            <th width=\"100\">原有配额比例</th>\n            <th width=\"100\">原有配额数量</th>\n            <th width=\"100\">修改配额比例</th>\n            <th width=\"100\">修改配额数量</th>\n          </tr>\n        </thead>\n        <tbody>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n      </table>\n    </div>\n    <div class=\"modal-footer\">\n      <input type=\"submit\" class=\"btn btn-primary btn-medium\" value=\"确定\" />\n      <button class=\"btn btn-info btn-medium close\">关闭</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/module_item"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr class=\"module-tr\" data-series=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.series)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleNum)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.moduleName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.seriesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.attestationsName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  ";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "3,4,5,6", options) : helperMissing.call(depth0, "of", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "3,4,5,6", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.supplyAt), "day", options) : helperMissing.call(depth0, "formatDate", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.supplyAt), "day", options)))
    + "</td>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "0,1,2", options) : helperMissing.call(depth0, "of", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.status), "0,1,2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <td width=\"80\">";
  if (helper = helpers.resourceNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resourceNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  if (helper = helpers.salesName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.salesName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <td name="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.members)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.quality)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "PPM</td>\n    <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options) : helperMissing.call(depth0, "formatPrice", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options)))
    + "元/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.quantityName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.cost)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.delivery)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.units)),stack1 == null || stack1 === false ? stack1 : stack1.delivery)),stack1 == null || stack1 === false ? stack1 : stack1.salesName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <td width=\"80\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selectNum), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.selectNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program9(depth0,data) {
  
  
  return "暂无";
  }

function program11(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.user), "3", options) : helperMissing.call(depth0, "equals", ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.user), "3", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<td><a href=\"javascript:void(0);\" class=\"js-edit-module\" data-module=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">修改</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.module)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-toggle=\"confirm\" data-title=\"您确定删除吗?\" data-content=\"删除之后需要无法恢复，只能重新添加\" data-event=\"confirm:delete-module\" class=\"js-delete-module\">删除</a>";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.factoryList), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>";
  return buffer;
  }
function program13(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selectNum), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"js-edit-select-num\">修改配额</a>";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, (depth0 && depth0.moduleInfo), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/mutual_supplier_table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "参与交互的供应商名单";
  }

function program3(depth0,data) {
  
  
  return "承诺过的供应商名单";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.total), {hash:{},inverse:self.program(52, program52, data),fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n  <table class=\"table table-striped table-small\">\n    <thead>\n      <tr>\n        <th>供应商名称</th>\n        <th>资质验证状态</th>\n        <th>信用等级</th>\n        <th>保证金状态</th>\n        <th>需求方案状态</th>\n        ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.status), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n  ";
  return buffer;
  }
function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.equals || (depth1 && depth1.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth1 && depth1.status), 4, options) : helperMissing.call(depth0, "equals", (depth1 && depth1.status), 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "\n            <th>终投状态</th>\n          ";
  }

function program10(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr>\n      <td><a href=\""
    + escapeExpression(((stack1 = (depth2 && depth2.href)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/suppliers/resume-detail?userId=";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n      <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.qualifyStatus), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.qualifyStatus), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.qualifyStatus), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.qualifyStatus), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.qualifyStatus), "-2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.qualifyStatus), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.creditStatus), {hash:{},inverse:self.program(36, program36, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dealTime), {hash:{},inverse:self.program(44, program44, data),fn:self.program(42, program42, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      ";
  stack1 = helpers['if'].call(depth0, (depth2 && depth2.status), {hash:{},inverse:self.noop,fn:self.programWithDepth(46, program46, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tr>\n    ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "资质交互中";
  }

function program13(depth0,data) {
  
  
  return "资质交互通过";
  }

function program15(depth0,data) {
  
  
  return "资质交互不通过";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "-2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "-2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "-1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "-1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "3", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "4", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "4", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "5", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "10", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "10", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.creditStatus), "11", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.creditStatus), "11", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program18(depth0,data) {
  
  
  return "C";
  }

function program20(depth0,data) {
  
  
  return "B";
  }

function program22(depth0,data) {
  
  
  return "BBB";
  }

function program24(depth0,data) {
  
  
  return "A";
  }

function program26(depth0,data) {
  
  
  return "AA";
  }

function program28(depth0,data) {
  
  
  return "AAA";
  }

function program30(depth0,data) {
  
  
  return "信用等级评价通过";
  }

function program32(depth0,data) {
  
  
  return "其他";
  }

function program34(depth0,data) {
  
  
  return "正在申请中";
  }

function program36(depth0,data) {
  
  
  return "未提交信用申请";
  }

function program38(depth0,data) {
  
  
  return "已缴纳";
  }

function program40(depth0,data) {
  
  
  return "未缴纳";
  }

function program42(depth0,data) {
  
  
  return "已提交方案";
  }

function program44(depth0,data) {
  
  
  return "未提交方案";
  }

function program46(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.equals || (depth2 && depth2.equals),options={hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.status), 4, options) : helperMissing.call(depth0, "equals", (depth2 && depth2.status), 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program47(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <td>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.solutionStatus), {hash:{},inverse:self.program(50, program50, data),fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n          ";
  return buffer;
  }
function program48(depth0,data) {
  
  
  return "是";
  }

function program50(depth0,data) {
  
  
  return "否";
  }

function program52(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <p>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(55, program55, data),fn:self.program(53, program53, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "protocol", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "protocol", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  ";
  return buffer;
  }
function program53(depth0,data) {
  
  
  return "暂无参与交互的供应商";
  }

function program55(depth0,data) {
  
  
  return "暂无承诺的供应商";
  }

function program57(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.total), {hash:{},inverse:self.program(52, program52, data),fn:self.program(58, program58, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program58(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <table class=\"table table-striped table-small\">\n    <thead>\n      <tr>\n        <th>供应商名称</th>\n        <th>保证金状态</th>\n        <th>最后提交方案时间</th>\n      </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(59, program59, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n  ";
  return buffer;
  }
function program59(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr>\n      <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), 0, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.paidStatus), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.paidStatus), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n      <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dealTime), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.dealTime), options)))
    + "</td>\n    </tr>\n    ";
  return buffer;
  }

  buffer += "<h3 style=\"margin-top:0;\"><strong>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "protocol", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "protocol", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></h3>\n";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(57, program57, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "protocol", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), "protocol", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/new_topic"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <label for=\"scope-group-privacy\" class=\"scope-select-label\">\n              <input type=\"radio\" name=\"scope\" id=\"scope-group-privacy\" value=\"2\" /> 当前圈子公开\n            </label>\n            <label for=\"scope-group-public\" class=\"scope-select-label\">\n              <input type=\"radio\" name=\"scope\" id=\"scope-group-public\" value=\"3\" /> 当前圈子私密\n            </label>\n            ";
  }

  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>发起话题</h2>\n  </div>\n  <form class=\"form form-aligned\" id=\"new-topic-form\" data-id=\"";
  if (helper = helpers.reqId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reqId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"topic-new modal-body\">\n      <input type=\"hidden\" name=\"companyName\" value=\"";
  if (helper = helpers.companyName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.companyName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <input type=\"hidden\" name=\"reqId\" value=\"";
  if (helper = helpers.reqId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.reqId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <div class=\"topic-now\"><i class=\"icon-topic-now\"></i></div>\n      <div class=\"form-left\">\n        <div class=\"control-group\">\n          <label for=\"\" style=\"width:3em;\">标题:</label>\n          <input type=\"text\" placeholder=\"请输入标题\" name=\"title\" style=\"width:363px;\" required/>\n        </div>\n        <div class=\"control-group\">\n          <label for=\"\" style=\"width:3em;margin-top:7px;\">内容:</label>\n          <textarea name=\"content\" id=\"\" cols=\"50\" rows=\"10\" style=\"width:350px;\" placeholder=\"请输入内容\" reqiured></textarea>\n        </div>\n        <div class=\"control-group\">\n          <label for=\"\" class=\"control-label\" style=\"width:55px;\"><i class=\"icon-attach\"></i>&nbsp;附件:</label>\n          <div class=\"attachment-file control-content\">\n            <input type=\"hidden\" class=\"file-input\" name=\"files\">\n            <div class=\"btn btn-upload\">\n              <span>选择附件</span>\n              <input type=\"file\" name=\"file\">\n            </div>\n            <div class=\"file-info-show\">\n              <i class=\"icon-info-small\" style=\"vertical-align:top;\"></i><span class=\"note\">最多5个附件</span>\n              <span class=\"file-name\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-right\">\n        <div class=\"topic-scope\">\n          <div class=\"select-topic-scope\">\n            <input type=\"hidden\" id=\"joinerIds\">\n            <label for=\"scope-all-public\" class=\"scope-select-label\">\n              <input type=\"radio\" name=\"scope\" checked id=\"scope-all-public\" value=\"1\" /> 公开讨论\n            </label>\n            ";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.reqStatus), "3,4,5", options) : helperMissing.call(depth0, "of", (depth0 && depth0.reqStatus), "3,4,5", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <input type=\"submit\" class=\"btn btn-primary btn-medium\" value=\"确定\" />\n      <button class=\"btn btn-info btn-medium close\">关闭</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/operation_select_supplier_table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr class=\"supplier-solution-tr\">\n        <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.cost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.cost), options)))
    + "</td>\n        <td class=\"file-show-td\" data-file=\"";
  if (helper = helpers.solutionFile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.solutionFile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n      </tr>\n    ";
  return buffer;
  }

  buffer += "<table id=\"range-supplier-table\" class=\"table table-striped table-small\">\n  <thead>\n    <tr>\n      <th width=\"160\">供应商</th>\n      <th width=\"108\"><a href=\"javascript:void(0);\" class=\"js-range-supplier range-supplier\">C 成本&nbsp;&nbsp;&nbsp;<i data-sort-type=\"5\" class=\"icon-arrowdown\"></i></a></th>\n      <th width=\"150\">整体方案</th>\n    </tr>\n  </thead>\n  <tbody data-id=\"";
  if (helper = helpers.requirementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.requirementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/people_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "second-label";
  }

function program3(depth0,data) {
  
  
  return "third-label";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.userType), "2", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.userType), "2", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <li>\n        <label for=\"people-";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <input id=\"people-";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"joiner\" type=\"checkbox\" value=\"";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (helper = helpers.userName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </label>\n      </li>\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.userType), "3", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.userType), "3", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li>\n      <label for=\"people-";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <input id=\"people-";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"joiner\" type=\"checkbox\" value=\"";
  if (helper = helpers.userId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (helper = helpers.userName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </label>\n    </li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"menu menu-dropdown up ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.size), "big", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.size), "big", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <p style=\"margin-top:0;\"><a href=\"javascript:void(0);\" data-target=\"supplier-select-ul\" class=\"ul-show-a\"><i class=\"icon-arrowright-small hide\"></i><i class=\"icon-arrowdown-small\"></i> 供应商</a></p>\n  <ul id=\"supplier-select-ul\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n  <p><a data-target=\"purchaser-select-ul\" class=\"ul-show-a\" href=\"javascript:void(0);\"><i class=\"icon-arrowright-small\"></i><i class=\"icon-arrowdown-small hide\"></i> 海尔团队成员</a></p>\n  <ul id=\"purchaser-select-ul\" class=\"hide\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/purchaser_quota_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr>\n        <td>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.moduleNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.moduleName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalCost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.originalCost), options)))
    + "</td>\n        <td>";
  if (helper = helpers.scale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.status), {hash:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n        \n      </tr>\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "0", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "0", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "不同意";
  }

function program5(depth0,data) {
  
  
  return "同意";
  }

function program7(depth0,data) {
  
  
  return "\n            未回复\n          ";
  }

  buffer += "<div class=\"table-container\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th width=\"150\">模块编号</th>\n        <th width=\"200\">模块专用号</th>\n        <th width=\"150\">模块描述</th>\n        <th width=\"150\">资源量</th>\n        <th width=\"200\">中选供应商</th>\n        <th width=\"100\">供应商报价</th>\n        <th width=\"150\">配额比例</th>\n        <th width=\"100\">是否跟标</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>\n\n<div class=\"quota-pagination\" data-total=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/quota"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<tr class=\"supplier-solution-tr\">\n  <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.technology), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.technology), options)))
    + "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.quality), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.quality), options)))
    + "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.reaction), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.reaction), options)))
    + "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.delivery), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.delivery), options)))
    + "</td>\n  <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.cost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.cost), options)))
    + "</td>\n  <td class=\"file-show-td\" data-file=\"";
  if (helper = helpers.solutionFile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.solutionFile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n</tr>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/supplier_quota_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr>\n        <td>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.moduleName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalCost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.originalCost), options)))
    + "</td>\n        <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.actualCost), options) : helperMissing.call(depth0, "formatPrice", (depth0 && depth0.actualCost), options)))
    + "</td>\n        <td>\n          ";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "0,1", options) : helperMissing.call(depth0, "of", (depth0 && depth0.status), "0,1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      </tr>\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "0", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "0", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "1", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.status), "1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "未同意";
  }

function program7(depth0,data) {
  
  
  return "同意跟标";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <button type=\"button\" class=\"btn btn-info\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"confirm\" data-title=\"您确定跟标吗?\" data-content=\"跟标后将确定模块配额\" data-event=\"confirm:with-bidding\">跟标</button>&nbsp;&nbsp;&nbsp;&nbsp;\n            <button type=\"button\" class=\"btn btn-info\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"confirm\" data-title=\"您确定不跟标吗?\" data-content=\"不跟标将失去这个模块的配额\" data-event=\"confirm:without-bidding\">不跟标</button>\n          ";
  return buffer;
  }

  buffer += "<div class=\"table-container\">\n  <table class=\"table table-striped\" data-total=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._DATA_)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <thead>\n      <tr>\n        <th width=\"150\">模块编号</th>\n        <th width=\"150\">模块</th>\n        <th width=\"150\">模块配额</th>\n        <th width=\"150\">我的报价</th>\n        <th width=\"100\">跟标报价</th>\n        <th width=\"80\">是否跟标</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>\n<div class=\"quota-pagination\"></div>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/tech_select_supplier_table"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr class=\"select-supplier-tr\" data-supplier-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.supplierId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-supplier-name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.supplierName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <td><label class=\"select-label\"><input type=\"checkbox\" class=\"check-supplier\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">&nbsp;选择</label></td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.supplierName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n        <td><input type=\"text\" name=\"rank\" class=\"table-input\" min=\"1\" pattern=\"^\\d*$\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.rank)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></td>\n        <td>\n          <input type=\"text\" name=\"selectReason\" class=\"input-small\" style=\"width: 100px !important\" max-length=\"30\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.selectReason)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n          <div class=\"attachment-file-group\">\n            <input type=\"hidden\" class=\"file-input\" data-file=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.selectFile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"selectFile\">\n            <div class=\"btn btn-upload\">\n              <span>上传附件</span>\n              <input type=\"file\" name=\"file\">\n            </div>\n          </div><br>\n          <span class=\"file-name\" name=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.requirementRank)),stack1 == null || stack1 === false ? stack1 : stack1.selectFile)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.quality)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n        <td>达到产能要求</td>\n        <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.reaction), "day", options) : helperMissing.call(depth0, "formatDate", ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.reaction), "day", options)))
    + "</td>\n        <td>"
    + escapeExpression((helper = helpers.formatPrice || (depth0 && depth0.formatPrice),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options) : helperMissing.call(depth0, "formatPrice", ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.cost), options)))
    + " 元</td>\n        <td class=\"solution-download-td\" data-file=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.solutionFile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;\n          <a href=\"/purchaser/check-quotation?solutionId="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">查看报价</a>&nbsp;\n          <a href=\"/purchaser/module-solution?solutionId="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.requirementSolution)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">查看模块目标</a></td>\n      </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked disabled";
  }

function program4(depth0,data) {
  
  
  return "readOnly";
  }

  buffer += "<table id=\"range-supplier-table\" class=\"table table-striped\" style=\"width: 1200px;\">\n  <thead>\n    <tr>\n      <th width=\"80\">选定供应商</th>\n      <th width=\"200\">供应商</th>\n      <th width=\"50\">排名</th>\n      <th width=\"180\">方案选定理由</th>\n      <th width=\"100\">质量</th>\n      <th width=\"95\">高峰月产能</th>\n      <th width=\"85\">供货时间</th>\n      <th width=\"110\"><a href=\"javascript:void(0);\" class=\"js-range-supplier range-supplier\">成本&nbsp;&nbsp;&nbsp;<i data-sort-type=\"5\" class=\"icon-arrowdown-current\"></i></a></th>\n      <th width=\"200\">操作</th>\n    </tr>\n  </thead>\n  <tbody data-id=\"";
  if (helper = helpers.requirementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.requirementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/tech_solution_table"] = template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        <th>报价</th>\n      ";
  }

function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <tr>\n        <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td class=\"solution-download-td\" data-file=\"";
  if (helper = helpers.solutionFile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.solutionFile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n        ";
  stack1 = (helper = helpers.of || (depth2 && depth2.of),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.status), "5,6", options) : helperMissing.call(depth0, "of", (depth2 && depth2.status), "5,6", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.updatedAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.updatedAt), options)))
    + "</td>\n      </tr>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <td><a href=\"/purchaser/check-quotation?solutionId=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">查看报价</a></td>\n        ";
  return buffer;
  }

  buffer += "<table class=\"table table-striped table-small\" id=\"supplier-solution-table\">\n  <thead>\n    <tr>\n      <th colspan=\"5\" class=\"left-text\" style=\"padding-left:20px;\">供应商方案</th>\n    </tr>\n    <tr>\n      <th>供应商列表</th>\n      <th>整体方案</th>\n      ";
  stack1 = (helper = helpers.of || (depth0 && depth0.of),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "5,6", options) : helperMissing.call(depth0, "of", (depth0 && depth0.status), "5,6", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <th>修改时间</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.solutions), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;
  });
templates["admins/mutual_tab/templates/user_quota_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <tr class=\"quota-tr\">\n        <td>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.moduleName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.factoryNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.factoryNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.supplierName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.scale) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scale); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%</td>\n      </tr>\n      ";
  return buffer;
  }

  buffer += "<div class=\"table-container\">\n	<table class=\"table table-striped table-small\">\n    <thead>\n      <tr>\n        <th width=\"100\">模块编号</th>\n        <th width=\"200\">物料描述</th>\n        <th width=\"100\">工厂</th>\n        <th width=\"200\">供应商名称</th>\n        <th width=\"200\">配额</th>\n        <th width=\"100\">配额比例</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>";
  return buffer;
  });
templates["admins/paperwork_info/templates/license"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"compare-row\">\n  <div class=\"new-value\">\n    <label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "：</label>\n    <div>\n      <img src=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.license), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"\" class=\"paperwork-image\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.date), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <br><br>\n      证件编号: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.licenseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </div>\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.old), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "http://admin.snz.com/assets/images/other-images/null.png";
  }

function program4(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.license)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <br><br>\n      证件有效期: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0['new'])),stack1 == null || stack1 === false ? stack1 : stack1.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"old-value\">\n    <div>\n      <img src=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.old)),stack1 == null || stack1 === false ? stack1 : stack1.license), {hash:{},inverse:self.program(9, program9, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"\" class=\"paperwork-image\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.old)),stack1 == null || stack1 === false ? stack1 : stack1.date), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <br><br>\n      证件编号: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.old)),stack1 == null || stack1 === false ? stack1 : stack1.licenseId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    </div>\n  </div>\n  ";
  return buffer;
  }
function program9(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.old)),stack1 == null || stack1 === false ? stack1 : stack1.license)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <br><br>\n      证件有效期: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.old)),stack1 == null || stack1 === false ? stack1 : stack1.date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/paperwork_info/templates/license_template"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"control-group control-group-new old-line\" style=\"width: 500px;\"><label for=\"\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</label>\n    <div class=\"control-content\">\n      <div class=\"paperwork-info\">\n        <img src=\"";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.license), "", options) : helperMissing.call(depth0, "equals", (depth0 && depth0.license), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"\" class=\"paperwork-image\"><br>\n      </div>\n      <div class=\"paperwork-valid\">\n        <p>证件有效期: ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p>证 件 编 号: ";
  if (helper = helpers.licenseId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.licenseId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "http://admin.snz.com/assets/images/other-images/null.png";
  }

function program4(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.license) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.license); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/qualification_info/templates/recent_sold"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.year1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.sold1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.net1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.mainBusinessProfit1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.fmanagerCost1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preItEarning1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preTaxProfit1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFile1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFileName1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.remark1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n</tr>\n <tr>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.year2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.sold2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.net2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.mainBusinessProfit2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.managerCost2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preItEarning2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preTaxProfit2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFile2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFileName2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.remark2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n</tr>\n <tr>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.year3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.sold3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.net3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.mainBusinessProfit3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.managerCost3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preItEarning3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.preTaxProfit3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n  <td>\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFile3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.inRankFileName3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n  </td>\n  <td>\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.remark3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  </td>\n</tr>\n";
  return buffer;
  });
templates["admins/qualify_detail/templates/submit_success"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal modal-dialog\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-event=\"";
  if (helper = helpers.event) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"modal-dialog-icon\">\n    <i class=\"icon-success\"></i>\n  </div>\n  <div class=\"modal-dialog-message\">\n    <h3>内容已提交</h3>\n    <p>点击确定后返回列表</p>\n    <div class=\"modal-controls\">\n      <a class=\"btn btn-success btn-medium js-check\" href=\"/suppliers/qualify\">\n        确定\n      </a>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
templates["admins/qualify_rule/templates/rule"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"control-group rule-group\">\n  条目内容: &nbsp;<input type=\"text\" name=\"name\" class=\"input-large\">\n  &nbsp;&nbsp;&nbsp;\n  是否否决项: <label class=\"veto-label\"><input id=\"isVeto\" name=\"type";
  if (helper = helpers.data) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"radio\" value=\"0\" class=\"rule-type\" checked> 是 </label>\n   <label class=\"veto-label\"><input id=\"notVeto\" name=\"type";
  if (helper = helpers.data) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.data); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"radio\" value=\"1\" class=\"rule-type\"> 否 </label>\n  &nbsp;&nbsp;&nbsp;\n  设置权限:\n  <select name=\"role\" id=\"\">\n    <option value=\"resource\">资源小微</option>\n    <option value=\"big_data\">供应商大数据</option>\n    <option value=\"competitive\">模块竞争力</option>\n  </select>\n  &nbsp;&nbsp;\n  <a href=\"javascript:void(0)\" class=\"js-delete-rule\">删除</a>\n</div>\n";
  return buffer;
  });
templates["admins/questionnaire_manage/templates/questionnaire_info"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"modal\">\n  <div class=\"modal-header\">\n    <h2>问卷信息</h2>\n  </div>\n  <form class=\"form form-aligned questions-form\" name=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n    <div class=\"modal-body\">\n      <div class=\"control-group\">\n        <label for=\"no-interface\">1. 无模块接口/封包标准</label>&nbsp;\n        ";
  if (helper = helpers.noInterfaceOrPackage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noInterfaceOrPackage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"no-clear\">2. 接口/封包标准不清晰</label>&nbsp;\n        ";
  if (helper = helpers.noClearInterfaceOrPackage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noClearInterfaceOrPackage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"no-standard\" class=\"left-required\"><span class=\"required\">*</span>3. 接口/封包非行业标准</label>&nbsp;\n        ";
  if (helper = helpers.noStandardInterfaceOrPackage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noStandardInterfaceOrPackage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"less-order\">4. 订单量较小</label>&nbsp;\n        ";
  if (helper = helpers.lessOrderCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lessOrderCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"park-no-match\">5. 园区无法配套</label>&nbsp;\n        ";
  if (helper = helpers.parksNotMatch) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.parksNotMatch); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"short-period\">6. 项目周期太短</label>&nbsp;\n        ";
  if (helper = helpers.shortPeriod) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.shortPeriod); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n      <div class=\"control-group\">\n        <label for=\"other-reason\" class=\"left-required\"><span class=\"required\">*</span>7. 其它原因</label>&nbsp;\n        ";
  if (helper = helpers.otherReason) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherReason); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-medium btn-primary close\" type=\"button\">确定</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/supplier_audit/templates/reject"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    一流资源\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n        <h2>通过意见</h2>\n      ";
  }

function program6(depth0,data) {
  
  
  return "\n        <h2>拒绝意见</h2>\n      ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.apply), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\n      <div class=\"control-group\">\n        <label>一流资源确认</label>\n        <select name=\"resourceType\" id=\"\" class=\"js-select-quality\">\n          <option value=\"0\">普通资源</option>\n          <option value=\"1\">标杆企业</option>\n          <option value=\"2\">500强公司</option>\n        </select>\n      </div>\n      <div class=\"control-group rival-company\">\n        <label>竞争对手1</label>\n        <input type=\"text\" class=\"input-medium\" name=\"competitor\" placeholder=\"请至少填写一个竞争对手\">\n      </div>\n      <div class=\"control-group rival-company\">\n        <label>竞争对手2</label>\n        <input type=\"text\" class=\"input-medium\" name=\"competitor\" placeholder=\"请至少填写一个竞争对手\">\n      </div>\n      <div class=\"control-group rival-company\">\n        <label>竞争对手3</label>\n        <input type=\"text\" class=\"input-medium\" name=\"competitor\" placeholder=\"请至少填写一个竞争对手\">\n      </div>\n      <div class=\"control-group rival-company\">\n        <label>竞争对手4</label>\n        <input type=\"text\" class=\"input-medium\" name=\"competitor\" placeholder=\"请至少填写一个竞争对手\">\n      </div>\n      <div class=\"control-group rival-company\">\n        <label>竞争对手5</label>\n        <input type=\"text\" class=\"input-medium\" name=\"competitor\" placeholder=\"请至少填写一个竞争对手\">\n      </div>\n      ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"control-group\">\n        <label>";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <input class=\"input-medium\" name=\"description\" type=\"text\" placeholder=\"请输入";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" value=\"\" >\n      </div>\n      ";
  return buffer;
  }
function program12(depth0,data) {
  
  
  return "通过意见";
  }

function program14(depth0,data) {
  
  
  return "拒绝意见";
  }

  buffer += "<div class=\"modal supplier-audit-modal\">\n  <div class=\"modal-header\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.onlyResource), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <form class=\"form form-aligned deposit-form\" id=\"reject-form\">\n    <div class=\"modal-dialog\">\n      ";
  stack1 = (helper = helpers.equals || (depth0 && depth0.equals),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), 1, options) : helperMissing.call(depth0, "equals", (depth0 && depth0.type), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.onlyResource), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-medium btn-primary\" type=\"submit\">确定</button>\n      <button class=\"btn btn-medium close\" type=\"button\">取消</button>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
templates["admins/supplier_detail/templates/customer"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr class=\"customer-group-tr customer-appliance-tr ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"1\">\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "first";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.appliance), options) : helperMissing.call(depth0, "length", (depth2 && depth2.appliance), options)))
    + "\">家电行业</td>";
  return buffer;
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr class=\"customer-group-tr customer-appliance-tr ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"1\">\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  </tr>\n";
  return buffer;
  }
function program7(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.car), options) : helperMissing.call(depth0, "length", (depth2 && depth2.car), options)))
    + "\">汽车行业</td>";
  return buffer;
  }

function program9(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <tr class=\"customer-group-tr customer-appliance-tr ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"1\">\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.first), {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td>";
  if (helper = helpers.percentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.percentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.passivePercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.passivePercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (helper = helpers.remark) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remark); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  </tr>\n";
  return buffer;
  }
function program10(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "<td rowspan=\""
    + escapeExpression((helper = helpers.length || (depth2 && depth2.length),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.other), options) : helperMissing.call(depth0, "length", (depth2 && depth2.other), options)))
    + "\">其他行业</td>";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.appliance), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.car), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.other), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/supplier_performance/templates/show_strategy"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "√";
  }

  buffer += "<div class=\"modal\">\n    <div class=\"modal-header\">\n        <h2>策略详情</h2>\n    </div>\n    <div class=\"module-new modal-body\" name=\""
    + escapeExpression((helper = helpers.pp || (depth0 && depth0.pp),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "pp", depth0, options)))
    + "\">\n        <table class=\"table table-striped table-showstrategy\">\n            <thead>\n                <tr>\n                    <th rowspan=\"3\" colspan=\"2\" width=\"200\">策略控制</th>\n                    <th rowspan=\"3\" >说明</th>\n                    <th colspan=\"4\">690用户零距离交互平台Ⅰ期</th>\n                </tr>\n                <tr>\n                    <th width=\"80\">优选</th>\n                    <th width=\"80\">合格</th>\n                    <th width=\"80\">限制</th>\n                    <th width=\"80\">淘汰</th>\n                </tr>\n                <tr>\n                    <th>90~100</th>\n                    <th>80~89</th>\n                    <th>60~79</th>\n                    <th> <60 </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"5\">新业务机会</td>\n                    <td>扩充产品</td>\n                    <td>供应商可以在产品大类直接相互扩充（如由洗衣机扩充至冰箱）</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 90, 100, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 90, 100, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>扩充物料</td>\n                    <td>供应商可以承接新的物料类型（如由电脑板模块扩充至遥控器模块）</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 90, 100, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 90, 100, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>新品交互</td>\n                    <td>供应商可以参与零距离交互平台方案交互</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 90, 100, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 90, 100, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>早期设计</td>\n                    <td>供应商可以参与到新产品前期联合设计开发阶段</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 90, 100, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 90, 100, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>联合实验室</td>\n                    <td>供应商可以进驻海尔联合实验室参与产品设计</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 90, 100, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 90, 100, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td rowspan=\"3\">定单</td>\n                    <td>停新品订单</td>\n                    <td>供应商无法参与新品方案交互</td>\n                    <td></td>\n                    <td></td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 70, 79, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 70, 79, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.lt || (depth0 && depth0.lt),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 70, options) : helperMissing.call(depth0, "lt", (depth0 && depth0.compositeScore), 70, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                </tr>\n                <tr>\n                    <td>调老品订单</td>\n                    <td>/</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>采购冻结</td>\n                    <td>/</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td rowspan=\"4\">问题检讨</td>\n                    <td>自主改善</td>\n                    <td>供应商发现问题、内部提升改善</td>\n                    <td></td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 80, 89, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 80, 89, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>书面警告</td>\n                    <td>系统自动触发或邮件警示</td>\n                    <td></td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 80, 89, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 80, 89, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>总经理检讨</td>\n                    <td>总经理到海尔现场进行问题整改交互</td>\n                    <td></td>\n                    <td></td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 70, 79, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 70, 79, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>现场交互验收</td>\n                    <td>海尔团队到供应商现场交互整改方案实施进度</td>\n                    <td></td>\n                    <td></td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.between || (depth0 && depth0.between),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.compositeScore), 70, 79, options) : helperMissing.call(depth0, "between", (depth0 && depth0.compositeScore), 70, 79, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </td>\n                    <td></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-info btn-medium close\">关闭</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates["admins/supplier_qualify/templates/invite_member"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                   <li>\n                       <label for=\"category-scope-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"scope-category-label\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                          <input id=\"category-scope-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"checkbox\" name=\"category\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                                 value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                       </label>\n                   </li>\n						 ";
  return buffer;
  }

  buffer += "<div class=\"modal\">\n    <div class=\"modal-header\">\n        <h2>选择新成员</h2>\n    </div>\n    <div class=\"modal-body\" style=\"min-height:100px !important;padding-right:100px;\">\n        <form class=\"form form-aligned\" id=\"query-member-form\" data-supplier-id=\"";
  if (helper = helpers.supplierId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.supplierId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"control-group\">\n                <label for=\"\">权限：</label>\n                <select name=\"role\" id=\"\">\n                    <option value=\"resource\">资源小微</option>\n                    <option value=\"big_data\">供应商大数据</option>\n                    <option value=\"competitive\">模块竞争力</option>\n                </select>\n            </div>\n\n            <div class=\"control-group\">\n                <label for=\"\"></label>\n                <button class=\"btn js-select-categories\" style=\"width:145px;\" type=\"button\">请选择模块类别 &nbsp;<span class=\"caret\" style=\"margin-top:4px;\"></span></button>\n            </div>\n            <div class=\"menu menu-dropdown up select-menu\" id=\"categories-select-menu\">\n                <ul id=\"categories-select-menu-select-ul\">\n						 ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.categories), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	             </ul>\n                <p class=\"category-operate-p\" align=\"center\">\n                    <button type=\"button\" class=\"btn btn-small btn-primary btn-info category-close-btn\">确定</button>&nbsp;&nbsp;\n                </p>\n            </div>\n\n            <div class=\"control-group\">\n                <label for=\"\">成员工号：</label>\n                <input type=\"text\" name=\"workNo\" placeholder=\"请输入成员工号\">\n            </div>\n            <div class=\"control-group\">\n                <label for=\"\">成员姓名：</label>\n                <input type=\"text\" name=\"name\" placeholder=\"请输入成员姓名\">\n                <input type=\"submit\" class=\"btn\" value=\"搜索\" style=\"margin-top:-4px;display:none;\">\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-primary btn-medium js-render-new-members\" type=\"button\">查询</button>\n        &nbsp;\n        <button class=\"btn btn-info btn-medium close\" type=\"button\">取消</button>\n    </div>\n</div>\n";
  return buffer;
  });
templates["admins/supplier_qualify/templates/member_item"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<tr class=\"member-tr\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-mobile=\"";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-number=\"";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <td width=\"200\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td width=\"210\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td width=\"200\">";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td width=\"200\"><a href=\"javascript:void(0);\" class=\"js-delete-member\">删除</a></td>\n</tr>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates["admins/supplier_qualify/templates/team_member_list"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li>\n	             <label class=\"small-label\" style=\"width:300px;\">\n	               <input type=\"radio\" name=\"new-member\" class=\"new-member-info\" data-number=\"";
  if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-userPhone=\"";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "(";
  if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ") <br/> 部门:";
  if (helper = helpers.organ) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.organ); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </label>\n            </li>\n          ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li><label class=\"small-label\"><input name=\"new-member\" type=\"radio\" class=\"new-member-info\" data-number=\"";
  if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-userPhone=\"";
  if (helper = helpers.mobile) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mobile); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "(";
  if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</label></li>\n          ";
  return buffer;
  }

  buffer += "<div class=\"control-group team-list-group\">\n  <label for=\"\">成员列表：</label>\n  <div class=\"control-content\">\n    <ul>\n      ";
  stack1 = (helper = helpers.isArray || (depth0 && depth0.isArray),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.data), options) : helperMissing.call(depth0, "isArray", (depth0 && depth0.data), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  });
templates["admins/timeline/templates/item"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"item\">\n  <div class=\"time\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.createdAt), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.createdAt), options)))
    + "</div>\n  <div class=\"content\">\n    ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates["common/tip_and_alert/templates/alert"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert alert-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"alert-icon\">\n    <i class=\"icon-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display:block;\"></i>\n  </div>\n  <div class=\"alert-message\">\n    <h3>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>\n";
  return buffer;
  });
templates["common/tip_and_alert/templates/tip"] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "left:";
  if (helper = helpers.left) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.left); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "top:";
  if (helper = helpers.top) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.top); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "width:";
  if (helper = helpers.width) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.width); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "px;";
  return buffer;
  }

  buffer += "<div class=\"tip tip-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.direct) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.direct); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.left), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.top), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.width), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <div class=\"tip-icon\">\n    <i class=\"icon-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "16\"></i>\n  </div>\n  <div class=\"tip-message\">\n    <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>\n";
  return buffer;
  });

})();
