(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b216fcb"],{"29db":function(e,t,a){"use strict";var l=a("cfcd"),s=a.n(l);s.a},cfcd:function(e,t,a){},e77b:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 订单列表")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[e._v("\n            订单编号："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"订单编号"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v("\n            贷款企业："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"贷款企业"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v("\n            客户："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"客户"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v("\n            状态："),a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"未审核"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"未审核",value:"weishenhe"}}),a("el-option",{attrs:{label:"已审核审核",value:"yishenhe"}})],1),e._v("\n            申请时间： "),a("el-date-picker",{staticClass:"mr10",staticStyle:{width:"250px"},attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-value":"2010-10-01"},model:{value:e.valueDate,callback:function(t){e.valueDate=t},expression:"valueDate"}}),a("el-button",{staticClass:"handle-input",attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),a("el-button",{staticClass:"handdele-input",attrs:{type:"primary",icon:"el-icon-download"}},[e._v("导出数据")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",sortable:"",width:"60",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"订单编号",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"贷款企业",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"贷款种类",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"贷款名称",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"客户",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"手机号",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"申请额度",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"客服",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"优惠金额",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"date",label:"申请时间"}}),a("el-table-column",{attrs:{prop:"address",label:"状态",formatter:e.formatter}}),a("el-table-column",{attrs:{label:"操作",width:"260",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-success"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("授理")]),a("el-button",{attrs:{type:"text",icon:"el-icon-success"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("通过")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("拒绝")]),a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"编辑订单",visible:e.AddPos,width:"30%"},on:{"update:visible":function(t){e.AddPos=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"订单编号",required:!0}},[a("el-input",{attrs:{placeholder:"请输入订单编号"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"贷款企业",required:!0}},[a("el-input",{attrs:{placeholder:"请输入贷款企业"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"贷款种类",required:!0}},[a("el-input",{attrs:{placeholder:"请输入贷款种类"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"贷款产品",required:!0}},[a("el-input",{attrs:{placeholder:"请确认贷款产品"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"客户"}},[a("el-input",{attrs:{placeholder:"请输入客户"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"申请额度"}},[a("el-input",{attrs:{placeholder:"请输入申请额度"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"优惠券"}},[a("el-input",{attrs:{placeholder:"优惠额度"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"客服"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"未选择客服人员"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"张三",value:"shanghai"}}),a("el-option",{attrs:{label:"王二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"申请时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.valuePopdate,callback:function(t){e.valuePopdate=t},expression:"valuePopdate"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择申请状态"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"申请中",value:"weishenhe"}}),a("el-option",{attrs:{label:"通过",value:"yishenhe"}}),a("el-option",{attrs:{label:"拒绝",value:"jujue"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.AddPos=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.AddPosSaveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("确认要拒绝此笔订单？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},s=[],r=(a("7f7f"),{name:"OrderList",data:function(){return{url:"./vuetable.json",tableData:[],cur_page:1,currentPage:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,AddPos:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1,valuePopdate:""}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},getData:function(){var e=this;this.$axios.post(this.url,{page:this.cur_page}).then(function(t){e.tableData=t.data.list,console.log(e.tableData)})},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},AddPosSaveEdit:function(){this.$message.success("添加商户成功！"),this.AddPos=!1},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.AddPos=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功"))},deleteRow:function(){this.$message.success("拒绝成功"),this.delVisible=!1}}}),o=r,i=(a("29db"),a("2877")),n=Object(i["a"])(o,l,s,!1,null,"2d582967",null);n.options.__file="OrderList.vue";t["default"]=n.exports}}]);