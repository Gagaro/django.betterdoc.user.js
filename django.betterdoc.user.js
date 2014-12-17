// ==UserScript==
// @name        Django Better Doc
// @namespace   Django.BetterDoc
// @description Improve django doc new layout readability
// @include     https://docs.djangoproject.com/*
// @downloadURL https://github.com/Gagaro/django.betterdoc.user.js/raw/master/django.betterdoc.user.js
// @updateURL   https://github.com/Gagaro/django.betterdoc.user.js/raw/master/django.betterdoc.user.js
// @version     0.0.1
// @require     http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==

$(document).ready(function() {
  $('body').css('color', 'black');
  $('a').css('color', '#AD2E2E');
  $('.highlight').css('background', '#EEE');
});
