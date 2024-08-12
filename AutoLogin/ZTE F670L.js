// ==UserScript==
// @name         Auto Login ZTE F670L
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simplified auto login script for ZTE F670L
// @author       Bagus23
// @match        http://192.168.1.1*
// @match        https://192.168.1.1*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    setTimeout(() => {
        // Mendapatkan elemen username, password, dan tombol login
        const usernameField = document.getElementById("Frm_Username");
        const passwordField = document.getElementById("Frm_Password");
        const loginButton = document.getElementById("LoginId");

        // Memastikan elemen-elemen tersebut ada sebelum melanjutkan
        if (usernameField && passwordField && loginButton) {
            usernameField.value = "admin";
            passwordField.value = "Telkomdso123";
            loginButton.click();
        }
    }, 1000); // Delay 1 detik
})();
