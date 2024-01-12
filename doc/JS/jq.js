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

    $('.submit-answer').click(function () {
      if ($('input[name="options"]:checked').val() === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {
        score += 1;
        console.log(score)
        $('#score').text('Score : ' + score);
        $('#ques-view').append('<div class="ques-circle correct">' + (countQues + 1) + '</div>');
      } 



      else{
        score -= 1;
        console.log(score)
        $('#score').text('Score : ' + score);
        $('#ques-view').append('<div class="ques-circle incorrect">' + (countQues + 1) + '</div>');
      }
  
      if (countQues < window[lang].length - 1) {
        countQues++;
      } 
      
      else {
        $('.submit-answer').hide();
        $('.view-results').show();
      }
  
      $('#ques-left').text('Question : ' + (countQues + 1) + '/' + window[lang].length);
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