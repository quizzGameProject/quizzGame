$(document).ready(function () {
  var countQues = 0;
  var lang;
  var score = 0;

  $("#score").text("Score : " + 0);
  $(".view-results").hide();
  $(".quiz, .final").hide();

  $(".choose-lang").click(function () {
    lang = $("#language").val() + "questions";

    $("#ques-left").text(
      "Question : " + (countQues + 1) + "/" + window[lang].length
    );
    $(".quiz").show();
    $(".question").html("<h1>" + window[lang][countQues].question + "</h1>");

    for (var i = 0; i <= 3; i++) {
      $("#opt" + i).val(window[lang][countQues].choices[i]);
      $("#lb" + i).html(window[lang][countQues].choices[i]);
    }
  });

  $(".submit-answer").click(function () {
    if (
      $('input[name="options"]:checked').val() ===
      window[lang][countQues].choices[window[lang][countQues].answer - 1]
    ) {
      score += 1;
      console.log(score);
      $("#score").text("Score : " + score);
      $("#ques-view").append(
        '<div class="ques-circle correct">' + (countQues + 1) + "</div>"
      );
    } else {
      score -= 1;
      console.log(score);
      $("#score").text("Score : " + score);
      $("#ques-view").append(
        '<div class="ques-circle incorrect">' + (countQues + 1) + "</div>"
      );
    }

    if (countQues < window[lang].length - 1) {
      countQues++;
    } else {
      $(".submit-answer").hide();
      $(".choose-lang").show();
    }

    $("#ques-left").text(
      "Question : " + (countQues + 1) + "/" + window[lang].length
    );
    $(".question").html("<h1>" + window[lang][countQues].question + "</h1>");

    for (var i = 0; i <= 3; i++) {
      $("#opt" + i).val(window[lang][countQues].choices[i]);
      $("#lb" + i).html(window[lang][countQues].choices[i]);
    }
  });

  $(".choose-lang").click(function () {
    $(".final").show();
    $(".solved").html(
      "You Solved " + (countQues + 1) + " questions of " + $("#language").val()
    );

    var correct = $("#ques-view .correct").length;

    $(".right-wrong").html(
      correct + " were Right and " + (countQues + 1 - correct) + " were Wrong"
    );
    $("#display-score").html("Your Final Score is: " + score);
  });

  $("#restart").click(function () {
    location.reload();
  });
});















$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  var target = $($.attr(this, "href"));

  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});


// scroling demention with dely .on with 3 params contain callBack :)
