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
//
// @version         0.1
// @history         0.1 first version
// @history         1.0b first beta version, who knew!!
//
// ==/UserScript==


$(function(){
  $(".track-buttons-container").append('<div class="share-button" onclick="share(40171, 1)"><span class="action-text">Download</span></div>');
});
