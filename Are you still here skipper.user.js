// ==UserScript==
// @name         Are you still here skipper
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       notusedusername
// @match        https://music.youtube.com/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    console.log("ARE YOU STILL THERE SKIPPER v0.5 started...")
    let timestamp;
    setInterval(function(){
        clickIfMatchedAndLogEvent($("ytmusic-you-there-renderer yt-button-renderer:visible"));
    }, 3000);
    function clickIfMatchedAndLogEvent($popupButton) {
        if($popupButton.length === 1) {
            let wasHidden = document.hidden;
            turnOnHiddenVision(wasHidden);
            action($popupButton);
            turnOffHiddenVision(wasHidden);
        }
    };

    function turnOnHiddenVision(wasHidden) {
        if(wasHidden){
            console.log("I see you!");
            document.hidden = false;
        }
    };

    function action($popupButton) {
        timestamp = new Date();
        console.log("[" + timestamp.getHours() + ":" + timestamp.getMinutes() + "] Got your back, bro!");
        $popupButton.click();
    };

    function turnOffHiddenVision(wasHidden) {
        if(wasHidden) {
            console.log("Now I don't see you.");
            document.hidden = true;
        }
    }

})();
