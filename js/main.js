// Дата
$(function() {
  $.datepicker.setDefaults($.extend($.datepicker.regional["ru"]));
  $("#date").datepicker();
});

// Диалоговое окно
$("#dialog").dialog();

// Аккордион
$("#accordion").accordion();

// Прогрессбар
$("#bar").progressbar({
  value: 0,
  change: function(event, ui) {
    //alert('Event ' + event.type);
  },
  complete: function(event, ui) {
    alert("Event " + event.type);
  }
});
$("button#progress").click(function() {
  var currentVal = $("#bar").progressbar("option", "value");

  if (currentVal < 100) {
    currentVal = currentVal + 10;
    $("#percent").text(currentVal + "%");
    $("#bar").progressbar("option", "value", currentVal);
  }
});

// Табы
$("#tabs").tabs();

// Кнопки
$("#button1")
  .button()
  .click(function(e) {
    alert("Button 1 pressed");
  });

$("#button2")
  .button()
  .click(function(e) {
    alert("Button 2 pressed");
  });
