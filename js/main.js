
/*--jQuery Ripple Effect-*/
jQuery(document).ready(function() {
    "use strict";
    $("#showcase").ripples({
      dropRadius: 13,
      perturbance: 0.01
    });
  });
  
  /*--Typed.js Effect-*/
  
  var text = new Typed(".text", {
    strings: [
      "<strong>I'm a web</strong> <strong class='text-warning'> developer</strong>",
      "<strong>A</strong>  <strong class='text-warning'>programmer</strong>",
      "<strong>And a </strong> <strong class='text-warning'>coder</strong>"
    ],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  
  /*--Wow.js Effect-*/
  
  new WOW().init();
  