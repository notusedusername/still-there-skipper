// ==UserScript==
// @name         Are you still here skipper
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       notusedusername
// @match        https://music.youtube.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("ARE YOU STILL THERE SKIPPER v0.1 started...")
    let timestamp;
    setInterval(function(){
        if(!document.hidden){
            clickIfMatchedAndLogEvent($("ytmusic-you-there-renderer yt-button-renderer:visible"));
        } else {
             clickIfMatchedAndLogEvent($("ytmusic-you-there-renderer yt-button-renderer"));
        }
    }, 3000);
    function clickIfMatchedAndLogEvent($popupButton) {
        if($popupButton.length === 1) {
            timestamp = new Date();
            console.log("[" + timestamp.getHours() + ":" + timestamp.getMinutes() + "] Got your back, bro!");
            $popupButton.click();
            $popupButton.closest("ytmusic-you-there-renderer").remove();
        }
    }
})();
