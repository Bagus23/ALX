// ==UserScript==
// @name Auto Login ZTE
// @namespace http://tampermonkey.net/
// @version 0.1
// @description admin Telkomdso123 user
// @author Bagus23
// @match https://192.168.1.1*
// @icon https://www.google.com/s2/favicons?sz=64&domain=1.20
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant none
// ==/UserScript==
(function() {
'use strict';
var loginX = setTimeout(()=>{
$("#Frm_Username").val("user")
$("#Frm_Password").val("user")
$("#LoginId").click()
clearTimeout(loginX)
},1000)
})();
