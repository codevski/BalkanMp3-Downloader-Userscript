// ==UserScript==
//
// @name            balkanmp3 Downloader
// @description     Easy Balkanmp3 Downloader
// @namespace       https://github.com/techabyte/
// @author          techabyte (https://github.com/techabyte)
// @license         GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @homepage        https://github.com/techabyte/
// @include         http://balkanmp3.ba*
// @grant           none
// @require         https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
// @version         0.0.2
// @history         0.0.1 Cosmetic Only
//
// ==/UserScript==


$(function(){
  $(".track-buttons-container").append('<div class="download-button" onclick="share(40171, 1)"><span class="action-text">Download</span></div>');
  $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href=' https://opensource.keycdn.com/fontawesome/4.6.3/font-awesome.min.css ' type='text/css' media='screen'>");  
});
