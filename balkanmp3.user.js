// ==UserScript==
//
// @name balkanmp3 Downloader
// @description Easy Balkanmp3 Downloader
// @namespace https://github.com/techabyte/
// @author techabyte (https://github.com/techabyte)
// @license GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @homepage https://github.com/techabyte/
// @include http://balkanmp3.ba*
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant none
// @version 0.0.2
// @history 0.0.1 Cosmetic Only
//
// ==/UserScript==

$(function(){
    console.log('test');
    function injectScript(code) {
        var script=document.createElement('script');
        script.type='application/javascript';
        script.textContent=code;
        document.body.appendChild(script);
        document.body.removeChild(script);
    }
    
    function main() {
        //console.log("TestMessage");
        // Style Button
        $(".track-buttons-container").append('<div class="download-button" onClick="findFile(this.parentNode.parentNode.parentNode.parentNode.parentNode.id)""><span class="action-text">Download</span></div>');
        //        $(".track-buttons-container").append('<div class="download-button" onClick="findFile(this.parentNode.parentNode.id)""><span class="action-text">Download</span></div>');
        $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href=' https://opensource.keycdn.com/fontawesome/4.6.3/font-awesome.min.css ' type='text/css' media='screen'>");
        $(".download-button").css({"padding": "5px 8px 5px 26px", "overflow": "hidden"});
        //console.log($('.song-art').parent().attr('id'));
    }
    
    injectScript(function findFile(fileID) {
        //test
        //find url with the div provided
        // Find first ancestor of el with tagName
        // or undefined if not found
        //console.log(fileID);
        var a = $(this).closest('.data-track-name');
        var x = $('.song-art').parent().attr('id');
        var test = document.getElementById(fileID);
        test = test.childNodes
        console.log(test);
        

            // Many DOM methods return null if they don't 
            // find the element they are searching for
            // It would be OK to omit the following and just
            // return undefined        
        //download(theDiv);
        
    });

    injectScript(function download(aDiv) {
        var a = document.createElement('a');
        a.download = "test"; // Set the file name.
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        console.log("download Link");
    });
    main();

});
