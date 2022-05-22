$(document).ready(function () {
  $(".key").click(function () {
    let value1 = $(this).val();
    let value2 = $("#display").val();
    console.log(value2);
    $("#display")
      .val(value2 + value1)
      .html(value2 + value1);
  });

  $("#clear").click(function () {
    $("#display").val("").html("0");
    $("#result").val("").html("0");
  });

  $("#equals").click(function () {
    let value2 = eval($("#display").val());
    $("#result").val(value2).html(value2);
    console.log(value2);
  });
});
