(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f93555ca"],{"1cbc":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),t._v(" 渠道分析")])],1)],1),a("div",{staticClass:"container"},[a("el-tabs",{attrs:{type:"border-card",stretch:"true"}},[a("el-tab-pane",{attrs:{label:"平台统计"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("\n                            统计时间：\n                              "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.Datevalue,callback:function(e){t.Datevalue=e},expression:"Datevalue"}})],1),a("el-button",{staticClass:"handle-input-bt",attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),a("div",{staticClass:"text item"},[a("div",{attrs:{id:"myChart"}})])]),a("el-card",{staticClass:"box-card"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",align:"center"}}),a("el-table-column",{attrs:{prop:"num01",label:"总注册数",align:"center"}}),a("el-table-column",{attrs:{prop:"num02",label:"总访问数",align:"center"}}),a("el-table-column",{attrs:{prop:"num03",label:"总UV数",align:"center"}}),a("el-table-column",{attrs:{prop:"num04",label:"平均UV数",align:"center"}})],1)],1)],1),a("el-tab-pane",{attrs:{label:"渠道统计"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n                        渠道名称："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"商户名称"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v("\n                        统计时间："),a("el-date-picker",{staticClass:"mr10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateValve,callback:function(e){t.dateValve=e},expression:"dateValve"}}),a("el-radio-group",{staticClass:"mr10 mt5",model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:"今天"}}),a("el-radio-button",{attrs:{label:"昨天"}}),a("el-radio-button",{attrs:{label:"近七天"}}),a("el-radio-button",{attrs:{label:"近30天"}})],1),a("el-button",{staticClass:"handdele-input mt5",attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),a("div",{staticClass:"text item"},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"num01",label:"渠道名称"}}),a("el-table-column",{attrs:{prop:"num02",label:"计算方式",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num03",label:"单价",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num02",label:"总量",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num03",label:"总费用",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num04",label:"当日注册UV量",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num02",label:"UV单价",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num03",label:"UV总价",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num04",label:"访问人次",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num02",label:"用户平均UV",formatter:t.formatter}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1),a("el-tab-pane",{attrs:{label:"渠道按日统计"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n                        渠道名称："),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"商户名称"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v("\n                        统计时间："),a("el-date-picker",{staticClass:"mr10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateValve,callback:function(e){t.dateValve=e},expression:"dateValve"}}),a("el-radio-group",{staticClass:"mr10 mt5",model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:"近7天"}}),a("el-radio-button",{attrs:{label:"近30天"}})],1),t._v("\n                        计算方式："),a("el-tag",{staticClass:"mr10",attrs:{type:"danger"}},[t._v("CPA")]),t._v("\n                        单价："),a("el-tag",{staticClass:"mr10",attrs:{type:"success"}},[t._v("255")]),a("el-button",{staticClass:"handdele-input mt5",attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),a("div",{staticClass:"text item"},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"num01",label:"总量"}}),a("el-table-column",{attrs:{prop:"num02",label:"总费用",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num03",label:"当日注册UV量",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num02",label:"UV单价",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num03",label:"UV总量",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num04",label:"访问人次",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"num02",label:"用户平均UV",formatter:t.formatter}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])],1)],1)],1)])},r=[],n={name:"Channel",data:function(){return{Datevalue:"",radio:"",dateValve:"",tableData:[{date:"2016-05-02",num01:"255",num02:"54512",num03:"5263",num04:"9863"},{date:"2016-05-02",num01:"455",num02:"6389",num03:"3564",num04:"2569"},{date:"2016-05-02",num01:"153",num02:"452",num03:"2569",num04:"19863"},{date:"2016-05-02",num01:"3695",num02:"4233",num03:"8967",num04:"1936"}]}},deactivated:function(){window.removeEventListener("resize",this.renderChart)},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById("myChart"));window.onresize=function(){t.resize()},t.setOption({tooltip:{trigger:"axis"},legend:{data:["浏览次数","独立访客"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"浏览次数",type:"line",stack:"总量",itemStyle:{normal:{color:"#409EFF"}},data:[120,132,101,134,90,230,210]},{name:"独立访客",type:"line",stack:"总量",itemStyle:{normal:{color:"#FC0062"}},data:[220,182,191,234,290,330,310]}]})}}},s=n,o=(a("34f4"),a("2877")),c=Object(o["a"])(s,l,r,!1,null,"1c2d0a24",null);c.options.__file="Channel.vue";e["default"]=c.exports},"34f4":function(t,e,a){"use strict";var l=a("df3e"),r=a.n(l);r.a},df3e:function(t,e,a){}}]);