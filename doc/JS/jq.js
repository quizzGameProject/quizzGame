$(document).ready(function () {
    var count = 0;
    var lang;
    var score = 0;



            $('#score').text('Score : ' + 0);
            $('.view-results').hide();
            $('.quiz, .final-result').hide();
  
            $('.choose-lang').click(function () {
            lang = $('#language').val() + 'questions';


      $('#ques-left').text('Question : ' + (countQues + 1) + '/' + window[lang].length);
      $('.quiz').show();
      $('.question').html('<h1>' + window[lang][countQues].question + '</h1>');
      
      
      for (var i = 0; i <= 3; i++) {

        $('#opt' + i).val(window[lang][countQues].choices[i]);
        $('#lb' + i).html(window[lang][countQues].choices[i]);
      
    }
    });
  
    

  });






$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,  // 
      },
      1000
    );
  });

  // scroling demention with dely .on with 3 params contain callBack :) 