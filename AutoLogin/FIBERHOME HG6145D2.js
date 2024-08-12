// ==UserScript==
// @name         Auto Login FIBERHOME HG6145D2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto login script for FIBERHOME HG6145D2
// @author       Bagus23
// @match        http://192.168.1.1/html/login_inter.html*
// @match        https://192.168.1.1/html/login_inter.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.20
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Tunggu sampai elemen-elemen tersedia di halaman
    var loginInterval = setInterval(() => {
        // Periksa apakah elemen username dan password sudah ada di halaman
        if ($("#user_name").length && $("#loginpp").length) {
            // Isi username dan password
            $("#user_name").val("admin");
            $("#loginpp").val("%0|F?H@f!berhO3e");

            // Klik tombol login
            $("#login_btn").click();

            // Hentikan interval setelah login
            clearInterval(loginInterval);
        }
    }, 500);
})();
