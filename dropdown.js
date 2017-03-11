$(document).ready(function() {
  var $h4 = $("h4", ".drop-down");
  var $mainVal = $("h4").first();
  var $nav = $("nav");

  function changeMainValue() {
    $mainVal.text($(this).text());
  }

  function toggleDisplayClass() {
    $($(this)[0].children[1]).slideToggle().toggleClass("please");
  }

  $nav.mouseenter($h4, toggleDisplayClass);
  $nav.mouseleave($h4, toggleDisplayClass);
  $h4.on("click", changeMainValue);
});
