// ==UserScript==
// @name         Are you still here skipper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.youtube.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("ARE YOU STILL THERE SKIPPER v0.1 started...")
    setInterval(function(){
        let $popup = $("ytmusic-you-there-renderer yt-button-renderer:visible");
        if($popup.length === 1) {
            console.log("Got your back, bro!");
            $popup.click();
        }
    }, 3000);
})();