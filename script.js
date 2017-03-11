$(document).ready(function() {
  var $textField = $("input[type=text]");
  var $textArea = $("textarea");
  var $password = $("input[type=password]");
  var $submit = $("button");
  var $lastP = $("p").last();
  var $h1 = $("h1");

  //this section probably should have been done on the html side
  //but I wanted more practice with jQuery
  $textField.prop("maxlength", 32).prop("pattern", ".{4,32}");
  $textArea.prop("maxlength", 140).prop("pattern", ".{4,140}");
  $password.prop("maxlength", 16).prop("pattern", ".{6,16}");

  function displayCharCount(event) {
    if ($(this)[0].value.length < 1) {
      $($(this)[0].nextElementSibling).text("");
    } else {
      var str = $(this)[0].value.toString();
      var maxLength = $(this)[0].maxLength;
      $($(this)[0].nextElementSibling).text(maxLength - str.length);
    }
  }
  function passwordConformation() {
    if (this.value === "") {
      $lastP.text("");
    } else if (this.value === $password[0].value) {
      $lastP.text("Passwords Match");
    } else {
      $lastP.text("Passwords do not Match");
    }
  }

  function callAttentionHere(area, str) {
    event.preventDefault();
    $(area).addClass("red");
    $h1.text(str);
  }

  function submitForm() {
    $textField.removeClass("red");
    $textArea.removeClass("red");
    $password.removeClass("red");
    $h1.text("");
    if ($textField[0].value.length < 4) {
      callAttentionHere($textField[0], "text field needs more chars");
    } else if ($textArea[0].value.length < 4) {
      callAttentionHere($textArea[0], "text area needs more chars");
    } else if ($password[1].value !== $password[0].value) {
      callAttentionHere($password[1], "passwords don't match");
    } else if ($password[1].value.length < 6) {
      callAttentionHere($password[0], "pasword is not long enough");
    }
  }

  $textField.keyup($textField, displayCharCount);
  $textArea.keyup($textArea, displayCharCount);
  $password.keyup($password, displayCharCount);
  $($password[1]).keyup(passwordConformation);
  $submit.on("click", submitForm);
});
