(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db663e22"],{c6d4:function(e,t,a){},c938:function(e,t,a){"use strict";var l=a("c6d4"),s=a.n(l);s.a},f9b1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 渠道费用")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[e._v("\n            渠道名称："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"渠道名称"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v("\n            渠道类型："),a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"渠道类型"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"H5",value:"H5"}})],1),e._v("\n            计算方式："),a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"计算方式"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"CPA",value:"CPA"}}),a("el-option",{attrs:{label:"UV",value:"UV"}})],1),e._v("\n            统计时间："),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.valuedate,callback:function(t){e.valuedate=t},expression:"valuedate"}}),a("el-button",{staticClass:"handle-input",attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",label:"ID",sortable:"",width:"60",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"渠道类型",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"渠道名称",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"计算方式",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"数量",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"注册量",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"address",label:"关注量",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"date",label:"添加时间",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"date",label:"单价",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"date",label:"总费用",formatter:e.formatter}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.AddPosRotuerTo(t.$index,t.row)}}},[e._v("产品统计")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"渠道链接产品统计",center:"",visible:e.AddPos,width:"50%"},on:{"update:visible":function(t){e.AddPos=t}}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e._v("\n                渠道产品:"),a("el-select",{staticClass:"handle-input mr10",attrs:{placeholder:"选择渠道产品"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"米来到",value:"milaidao"}}),a("el-option",{attrs:{label:"钱来到",value:"qianlaidao"}})],1),e._v("\n                渠道名称:"),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"用户名称"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-button",{staticClass:"handle-input",attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),a("div",{staticClass:"text item"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"渠道产品",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名称",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"UV"}})],1)],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.AddPos=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.AddPosSaveEdit}},[e._v("确 定")])],1)],1)],1)},s=[],r=(a("7f7f"),{name:"ChannelCost",data:function(){return{url:"./vuetable.json",valuedate:"",tableData:[],cur_page:1,currentPage:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,AddPos:!1,editVisible:!1,form:{name:"",date:"",address:""},idx:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,l=0;l<e.del_list.length;l++)if(t.name===e.del_list[l].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},getData:function(){var e=this;this.$axios.post(this.url,{page:this.cur_page}).then(function(t){e.tableData=t.data.list,console.log(e.tableData)})},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},AddPosRotuerTo:function(){this.AddPos=!0},AddPosSaveEdit:function(){this.$message.success("添加商户成功！"),this.AddPos=!1},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,address:a.address},this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}}),n=r,o=(a("c938"),a("2877")),i=Object(o["a"])(n,l,s,!1,null,"e7af579c",null);i.options.__file="ChannelCost.vue";t["default"]=i.exports}}]);