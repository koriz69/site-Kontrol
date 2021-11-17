$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});
$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
  }
});
function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

    setInterval(function () {
      document.getElementById('current_date_time_block2').innerHTML = date_time();
  }, 1000);
  function Table() {
    function getCheckedCheckBoxes() {
        var a = " ";
        var checkboxes = document.getElementsByClassName('checkbox');
        for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
                a = a + checkboxes[index].value+"; ";

            }
        }
        return a; // для использования в нужном месте
    }
    document.writeln("Здравствуйте, " + document.getElementById('text').value + ".  Ваш контактный телефон: " + document.getElementById('tel').value + ". Ваш email: " + document.getElementById('email').value + ". Ваша тема вопроса:" + document.querySelector('#select').value + ". То, что Вы хотите передать: " + document.getElementById('po').value +".");
}