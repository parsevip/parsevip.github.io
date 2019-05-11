(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-547937f2"],{"2a13":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table"},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 角色管理")])],1)],1),r("div",{staticClass:"container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("角色管理")]),r("el-button",{staticClass:"hand-input",attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:e.AddPosRotuerTo}},[e._v("添加角色")])],1),r("div",{staticClass:"text item"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{type:"index",prop:"index",label:"序号","min-width":"100",align:"center"}}),r("el-table-column",{attrs:{prop:"nameZh",label:"职位"}}),r("el-table-column",{attrs:{prop:"roleDescribe",label:"职能描述"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(r){e.power(t.$index,t.row)}}},[e._v("权限")]),r("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(r){e.revise(t.$index,t.row)}}},[e._v("修改")]),r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){e.handleEdit(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],total:e.total,"page-size":e.TotalNum,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1),r("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"添加角色",visible:e.AddPos,width:"30%",center:""},on:{"update:visible":function(t){e.AddPos=t}}},[r("el-form",{ref:"form",attrs:{model:e.AddRoleform,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"职位",required:!0}},[r("el-input",{attrs:{placeholder:"请输入职位"},model:{value:e.AddRoleform.post,callback:function(t){e.$set(e.AddRoleform,"post",t)},expression:"AddRoleform.post"}})],1),r("el-form-item",{attrs:{label:"职能描述",required:!0}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入职能描述"},model:{value:e.AddRoleform.describe,callback:function(t){e.$set(e.AddRoleform,"describe",t)},expression:"AddRoleform.describe"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.AddPos=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.AddPosSaveEdit}},[e._v("确 定")])],1)],1),r("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"权限管理",visible:e.powerPop,width:"60%",center:""},on:{"update:visible":function(t){e.powerPop=t}}},[r("div",{staticStyle:{height:"600px","overflow-x":"hidden","overflow-y":"scroll"}},[r("el-row",{staticClass:"mgb20",attrs:{gutter:25}},[r("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[r("el-tag",[e._v("职位")]),e._v("　"+e._s(e.AddRoleform.post))],1),r("el-col",{staticStyle:{"text-align":"left"},attrs:{span:12}},[r("el-tag",{attrs:{type:"danger"}},[e._v("职能描述")]),e._v("　"+e._s(e.AddRoleform.describe))],1)],1),r("el-card",{staticClass:"box-card mgb20"},[r("el-tree",{attrs:{data:e.cityOptionstitle,"check-strictly":!0,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.checkedCities,props:e.defaultProps},on:{"check-change":e.handleCheckChange}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.powerPop=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.RoleSubmit}},[e._v("确 定")])],1)]),r("el-dialog",{attrs:{title:"角色删除",visible:e.delVisible,width:"30%",center:"",align:"center"},on:{"update:visible":function(t){e.delVisible=t}}},[r("div",{staticClass:"del-dialog-cnt"},[e._v("确定删除当前{职位}角色，提交后删除，不可恢复！")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.DelRole}},[e._v("确 定")])],1)])],1)},i=[],n=(r("ac6a"),r("4328")),a=r.n(n),s={name:"Role",inject:["reload"],data:function(){return{tableData:[],total:1,currentPage:1,TotalNum:10,delVisible:!1,AddPos:!1,AddRoleform:{post:"",describe:"",id:""},form:{name:"",date:"",address:""},powerPop:!1,cityOptionstitle:[],defaultProps:{children:"subs",label:"title"},checkedCities:[]}},methods:{getRoleInfo:function(){var e=this;this.$axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.$axios.defaults.headers.post["Authorization"]="Bearer "+localStorage.getItem("Token"),this.$axios.post(this.GLOBAL.axIosUrl+"/api/menu/getRoleList",a.a.stringify({page:this.currentPage,size:this.TotalNum})).then(function(t){console.log(t),t=t.data,e.total=t.data.total,e.tableData=t.data.records}).catch(function(e){console.log(e)})},handleCurrentChange:function(e){this.currentPage=e,this.getRoleInfo()},handleSizeChange:function(e){this.TotalNum=e,this.getRoleInfo()},AddPosRotuerTo:function(){this.AddRoleform.post="",this.AddRoleform.describe="",this.AddRoleform.id="",this.AddPos=!0},AddPosSaveEdit:function(){var e=this;this.$axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.$axios.defaults.headers.post["Authorization"]="Bearer "+localStorage.getItem("Token"),this.$axios.post(this.GLOBAL.axIosUrl+"/api/menu/addRole",a.a.stringify({roleZh:this.AddRoleform.post,roleDescribe:this.AddRoleform.describe,id:this.AddRoleform.id})).then(function(t){t=t.data,200===t.code&&(e.$message({message:t.msg,type:"success"}),e.AddPos=!1,e.reload())}).catch(function(e){console.log(e)})},revise:function(e,t){this.AddPos=!0,this.AddRoleform.post=t.nameZh,this.AddRoleform.describe=t.roleDescribe,this.AddRoleform.id=t.id},power:function(e,t){var r=this;this.AddRoleform.post=t.nameZh,this.AddRoleform.describe=t.roleDescribe,this.AddRoleform.id=t.id,this.$axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.$axios.defaults.headers.post["Authorization"]="Bearer "+localStorage.getItem("Token"),this.$axios.post(this.GLOBAL.axIosUrl+"/api/menu/getMenuPermission",a.a.stringify({roleId:t.id})).then(function(e){e=e.data,console.log(e);var t=e.data.current,o=[];t.forEach(function(e){o.push(e.id)}),r.checkedCities=o,console.log(r.checkedCities),r.cityOptionstitle=e.data.all.menu}).catch(function(e){console.log(e)}),this.powerPop=!0},handleCheckChange:function(e){var t=this.checkedCities.indexOf(e.id);t>-1?this.checkedCities.splice(t,1):this.checkedCities.push(e.id)},RoleSubmit:function(){for(var e=this,t="",r=0;r<this.checkedCities.length;r++)t+=this.checkedCities[r]+",";t.length>0&&(t=t.substr(0,t.length-1)),this.$axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.$axios.defaults.headers.post["Authorization"]="Bearer "+localStorage.getItem("Token"),this.$axios.post(this.GLOBAL.axIosUrl+"/api/menu/addRoleMenus",a.a.stringify({roleId:this.AddRoleform.id,menuIds:t})).then(function(t){console.log(t),t=t.data,200===t.code?(e.$message({message:t.msg,type:"success"}),e.powerPop=!1):e.$message({message:t.msg,type:"error"})}).catch(function(e){})},handleCheckedCitiesChange:function(e){console.log(e)},handleEdit:function(e,t){this.AddRoleform.id=t.id,this.delVisible=!0},DelRole:function(){var e=this;this.$axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.$axios.defaults.headers.post["Authorization"]="Bearer "+localStorage.getItem("Token"),this.$axios.post(this.GLOBAL.axIosUrl+"/api/menu/delRole",a.a.stringify({roleId:this.AddRoleform.id})).then(function(t){console.log(t),t=t.data,200===t.code?(e.$message({message:t.msg,type:"success"}),e.delVisible=!1):e.$message({message:t.msg,type:"error"}),e.reload()}).catch(function(t){e.$message({message:"网络错误！",type:"error"}),e.delVisible=!1})}},created:function(){this.getRoleInfo()}},l=s,c=(r("c6b6"),r("2877")),d=Object(c["a"])(l,o,i,!1,null,"25f9ced1",null);d.options.__file="Role.vue";t["default"]=d.exports},4127:function(e,t,r){"use strict";var o=r("d233"),i=r("b313"),n=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,l=Array.prototype.push,c=function(e,t){l.apply(e,s(t)?t:[t])},d=Date.prototype.toISOString,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:i.formatters[i["default"]],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,i,n,a,l,d,f,p,h,m,y,g){var b=t;if("function"===typeof d?b=d(r,b):b instanceof Date?b=h(b):"comma"===i&&s(b)&&(b=b.join(",")),null===b){if(n)return l&&!y?l(r,u.encoder,g):r;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||o.isBuffer(b)){if(l){var v=y?r:l(r,u.encoder,g);return[m(v)+"="+m(l(b,u.encoder,g))]}return[m(r)+"="+m(String(b))]}var w,x=[];if("undefined"===typeof b)return x;if(s(d))w=d;else{var A=Object.keys(b);w=f?A.sort(f):A}for(var C=0;C<w.length;++C){var O=w[C];a&&null===b[O]||(s(b)?c(x,e(b[O],"function"===typeof i?i(r,O):r,i,n,a,l,d,f,p,h,m,y,g)):c(x,e(b[O],r+(p?"."+O:"["+O+"]"),i,n,a,l,d,f,p,h,m,y,g)))}return x},p=function(e){if(!e)return u;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||u.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i["default"];if("undefined"!==typeof e.format){if(!n.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=i.formatters[r],a=u.filter;return("function"===typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:u.encode,encoder:"function"===typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:a,formatter:o,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}};e.exports=function(e,t){var r,o,i=e,n=p(t);"function"===typeof n.filter?(o=n.filter,i=o("",i)):s(n.filter)&&(o=n.filter,r=o);var l,d=[];if("object"!==typeof i||null===i)return"";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var u=a[l];r||(r=Object.keys(i)),n.sort&&r.sort(n.sort);for(var h=0;h<r.length;++h){var m=r[h];n.skipNulls&&null===i[m]||c(d,f(i[m],m,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var y=d.join(n.delimiter),g=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),y.length>0?g+y:""}},4328:function(e,t,r){"use strict";var o=r("4127"),i=r("9e6a"),n=r("b313");e.exports={formats:n,parse:i,stringify:o}},"9e6a":function(e,t,r){"use strict";var o=r("d233"),i=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s="utf8=%26%2310003%3B",l="utf8=%E2%9C%93",c=function(e,t){var r,c={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,f=d.split(t.delimiter,u),p=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&(f[r]===l?h="utf-8":f[r]===s&&(h="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)if(r!==p){var m,y,g=f[r],b=g.indexOf("]="),v=-1===b?g.indexOf("="):b+1;-1===v?(m=t.decoder(g,n.decoder,h),y=t.strictNullHandling?null:""):(m=t.decoder(g.slice(0,v),n.decoder,h),y=t.decoder(g.slice(v+1),n.decoder,h)),y&&t.interpretNumericEntities&&"iso-8859-1"===h&&(y=a(y)),y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),i.call(c,m)?c[m]=o.combine(c[m],y):c[m]=y}return c},d=function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,a=e[i];if("[]"===a&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(s,10);r.parseArrays||""!==s?!isNaN(l)&&a!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=o):n[s]=o:n={0:o}}o=n}return o},u=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=n.exec(o),l=s?o.slice(0,s.index):o,c=[];if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}var u=0;while(null!==(s=a.exec(o))&&u<r.depth){if(u+=1,!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}return s&&c.push("["+o.slice(s.index)+"]"),d(c,t,r)}},f=function(e){if(!e)return n;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?n.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?n.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:n.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:n.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:n.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:n.comma,decoder:"function"===typeof e.decoder?e.decoder:n.decoder,delimiter:"string"===typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:n.delimiter,depth:"number"===typeof e.depth?e.depth:n.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:n.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:n.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:n.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:n.strictNullHandling}};e.exports=function(e,t){var r=f(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof e?c(e,r):e,n=r.plainObjects?Object.create(null):{},a=Object.keys(i),s=0;s<a.length;++s){var l=a[s],d=u(l,i[l],r);n=o.merge(n,d,r)}return o.compact(n)}},b313:function(e,t,r){"use strict";var o=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c6b6:function(e,t,r){"use strict";var o=r("cdec"),i=r.n(o);i.a},cdec:function(e,t,r){},d233:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,i=Array.isArray,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var o=[],n=0;n<r.length;++n)"undefined"!==typeof r[n]&&o.push(r[n]);t.obj[t.prop]=o}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!==typeof e[o]&&(r[o]=e[o]);return r},l=function e(t,r,n){if(!r)return t;if("object"!==typeof r){if(i(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return i(t)&&!i(r)&&(a=s(t,n)),i(t)&&i(r)?(r.forEach(function(r,i){if(o.call(t,i)){var a=t[i];a&&"object"===typeof a&&r&&"object"===typeof r?t[i]=e(a,r,n):t.push(r)}else t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return o.call(t,i)?t[i]=e(t[i],a,n):t[i]=a,t},a)},c=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},d=function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(i){return o}},u=function(e,t,r){if(0===e.length)return e;var o="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",a=0;a<o.length;++a){var s=o.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=o.charAt(a):s<128?i+=n[s]:s<2048?i+=n[192|s>>6]+n[128|63&s]:s<55296||s>=57344?i+=n[224|s>>12]+n[128|s>>6&63]+n[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&o.charCodeAt(a)),i+=n[240|s>>18]+n[128|s>>12&63]+n[128|s>>6&63]+n[128|63&s])}return i},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var i=t[o],n=i.obj[i.prop],s=Object.keys(n),l=0;l<s.length;++l){var c=s[l],d=n[c];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:n,prop:c}),r.push(d))}return a(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},h=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:s,assign:c,combine:m,compact:f,decode:d,encode:u,isBuffer:h,isRegExp:p,merge:l}}}]);