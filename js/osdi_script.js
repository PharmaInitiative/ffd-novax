let test_phrases_interval;
let test_result_score = -1;
let test_result_stan = "";
function test_result_link_change(index) {
  if (localStorage.getItem("lang") == "ua") {
    $(".test_result_more_info_btn_link").attr(
      "href",
      "/products/" + links_arr[index]
    );
  } else {
    $(".test_result_more_info_btn_link").attr(
      "href",
      "/ru/products/" + links_arr[index]
    );
  }
}
let links_arr = [
  "luxial_plus",
  "flora_vision_dry",
  "flora_vision_irritated",
  "flora_vision_red",
  "navi_infla",
  "vision_lux_plus",
  "navite_plus",
  "navi_lipo",
  "visionlux_navite",
  "visionlux_navilipo",
  "navilipo_naviinfla",
];
function get_test_result() {
  $(".test_send_email_btn .btn_icon").attr(
    "src",
    "/img/button_arrow_white.svg"
  );
  if (localStorage.getItem("lang") == "ua") {
    $(".test_send_email_btn span").text("НАДІСЛАТИ");
  } else {
    $(".test_send_email_btn span").text("ОТПРАВИТЬ");
  }

  $(".test_send_email_btn").removeAttr("style");

  let sum = 0;
  let answered = 0;
  let preparats = [
    [0, ["1"]],
    [4, ["1"]],
    [8, ["2"]],
    [12, ["3"]],
    [16, ["4"]],
    [20, ["5"]],
    [24, ["6"]],
    [28, ["7"]],
    [32, ["8"]],
    [36, ["6", "7"]],
    [40, ["6", "8"]],
    [44, ["8", "5"]],
    [200, [""]],
  ];
  for (let i = 1; i <= 12; i++) {
    if ($('input[name="test_q_' + i + '"]:checked').val()) {
      sum += parseInt($('input[name="test_q_' + i + '"]:checked').val());
      answered++;
    }
  }
  $(".test_results_section").fadeIn(600);
  (function () {
    let res = 0;
    if ((sum * 25) / answered) {
      res = (sum * 25) / answered;
    }

    if (res == 0) {
      $(".test_result_plate_holder").css("background", "#82BB31");
      $(".test_result_plate_text").text("НОРМА");
      if (localStorage.getItem("lang") == "ua") {
        $(".test_result_preparat_header").text(
          `Для профілактики та мінімізації ризику виникнення синдрому “сухого ока” лікарі-офтальмологи рекомендують щоденне зволоження очей і використання замінників сльози.`
        );
      } else {
        $(".test_result_preparat_header").text(
          `Для профилактики и минимизации риска возникновения синдрома "сухого глаза" врачи-офтальмологи рекомендуют ежедневное увлажнение глаз и использование заменителей слезы.`
        );
      }
    } else if (res < 20) {
      $(".test_result_plate_holder").css("background", "#F08C06");
      $(".test_result_plate_text").text("ЛЕГКИЙ");
      if (localStorage.getItem("lang") == "ua") {
        $(".test_result_preparat_header").text(
          `Ви можете дотримуватись практичних порад та застосовувати рекомендовані зволожуючі краплі. Якщо протягом 2-х тижнів симптоми не зменшаться необхідно звернутись за консультацією до лікаря офтальмолога.`
        );
      } else {
        $(".test_result_preparat_header").text(
          `Вы можете придерживаться практических советов и применять рекомендованные увлажняющие капли. Если в течение 2-х недель симптомы не уменьшатся необходимо обратиться за консультацией к врачу офтальмологу.`
        );
      }
    } else if (res < 44) {
      $(".test_result_plate_holder").css("background", "#E20A19");
      if (localStorage.getItem("lang") == "ua") {
        $(".test_result_plate_text").text("ПОМІРНИЙ");
        $(".test_result_preparat_header").text(
          `Для полегшення симптомів ви можете скористатись рекомендованими очними краплями та виконувати практичні поради. Якщо протягом 2-х тижнів симптоми не зменшуються необхідно звернутись за консультацією до лікаря офтальмолога.`
        );
      } else {
        $(".test_result_plate_text").text("УМЕРЕННЫЙ");
        $(".test_result_preparat_header").text(
          `Для облегчения симптомов вы можете воспользоваться рекомендованными глазными каплями и выполнять практические советы. Если в течение 2-х недель симптомы не уменьшаются необходимо обратиться за консультацией к врачу офтальмологу.`
        );
      }
    } else {
      $(".test_result_plate_holder").css("background", "#BD1B25");
      if (localStorage.getItem("lang") == "ua") {
        $(".test_result_plate_text").text("ВАЖКИЙ");
        $(".test_result_preparat_header").text(
          `Для полегшення симптомів ви можете  скористатись рекомендованими очними краплями та виконувати практичні поради. Якщо протягом 2-х тижнів симптоми не зменшуються необхідно звернутись за консультацією до лікаря офтальмолога. При цьому результаті вам рекомендовано комплекс з двох видів крапель.`
        );
      } else {
        $(".test_result_plate_text").text("ТЯЖЕЛЫЙ");
        $(".test_result_preparat_header").text(
          `Для облегчения симптомов вы можете воспользоваться рекомендованными глазными каплями и выполнять практические советы. Если в течение 2-х недель симптомы не уменьшаются необходимо обратиться за консультацией к врачу офтальмологу. При этом результате вам рекомендуется комплекс из двух видов капель.`
        );
      }
    }
    test_result_score = Math.floor(res);

    test_result_stan = $(".test_result_plate_text").text();

    for (let i = 0; i < preparats.length; i++) {
      if (res >= preparats[i][0] && res < preparats[i + 1][0]) {
        if (preparats[i][1].length == 2) {
          test_result_link_change(i - 1);
          $(
            ".test_result_product_grid_main, .test_result_product_grid_extra"
          ).addClass("d-grid");
          $(".test_result_preparat_header").fadeIn(0);
          $(".test_rpi1").attr(
            "src",
            "/img/products/product" + preparats[i][1][1] + ".png"
          );
          $(".test_rpl1").attr(
            "src",
            "/img/products/product" + preparats[i][1][1] + "_logo.svg"
          );
          $(".test_rpi2").attr(
            "src",
            "/img/products/product" + preparats[i][1][0] + ".png"
          );
          $(".test_rpl2").attr(
            "src",
            "/img/products/product" + preparats[i][1][0] + "_logo.svg"
          );
          if (localStorage.getItem("lang") == "ua") {
            $(".test_result_more_info_btn>span").text(
              "Докладніше про препарати"
            );
          } else {
            $(".test_result_more_info_btn>span").text("Подробнее о препаратах");
          }
          // }else if(preparats[i][1][0] == "0"){
          // 	test_result_link_change(parseInt(preparats[i][1][0])-1);
          // 	$('.test_result_preparat_header').fadeOut(0);
          // 	$('.test_result_product_grid').removeClass('d-grid');
        } else {
          test_result_link_change(parseInt(preparats[i][1][0]) - 1);
          $(".test_result_preparat_header").fadeIn(0);
          $(".test_result_product_grid_main").addClass("d-grid");
          $(".test_result_product_grid_extra").removeClass("d-grid");
          $(".test_rpi1").attr(
            "src",
            "/img/products/product" + preparats[i][1][0] + ".png"
          );
          $(".test_rpl1").attr(
            "src",
            "/img/products/product" + preparats[i][1][0] + "_logo.svg"
          );
          $(".test_result_more_info_btn>span").text("Докладніше про препарат");
          if (localStorage.getItem("lang") == "ua") {
            $(".test_result_more_info_btn>span").text(
              "Докладніше про препарат"
            );
          } else {
            $(".test_result_more_info_btn>span").text("Подробнее о препарате");
          }
        }
        return 0;
      }
    }
  })();

  $("body, document, html").animate(
    {
      scrollTop: $(".test_results_header").offset().top - 25,
    },
    1000
  );
}

function init_osdi() {
  $(".test_send_phone_input").mask("+380000000000", { clearIfNotMatch: true });
  $(".test_mobile_questions_holder").css(
    "height",
    $(".test_mobile_question.active").outerHeight() + "px"
  );
  $(".before_tests_button").click(() => {
    $(".test_popUp1").addClass("active");
    $("body, html").css({ overflow: "hidden" });
    $(".scroll_top_btn").fadeOut(500);
    $("nav").css("top", "-75px");
  });
  $(".test_get_on_phone_btn img").click(() => {
    $(".test_popUp2").addClass("active");
    $("body, html").css({ overflow: "hidden" });
    $("nav").css("top", "-75px");
    setTimeout(function () {
      $(".scroll_top_btn").fadeOut(500);
    }, 300);
  });
  $(".test_popUp_back_btn").click(() => {
    $(".test_popUp").removeClass("active");
    $("body, html").css("overflow", "unset");
    $("nav").css("top", "0px");
  });
  $(".test_again_btn").click(() => {
    $(
      ".test_block2 input, .test_block1 input, .test_block3 input, .test_mobile_radio input"
    ).prop("checked", false);
    $(".test_results_section").fadeOut(500);
    $(".tests_mobile_section").removeClass("disabled");
    $(".test_mobile_question").removeClass("active");
    $(".test_mobile_question:first-child").addClass("active");
    $(".test_mobileprogress_bar").css("width", "0%");
    $(".test_mobileprogress_bar").text("0%");
    $(".test_mobile_questions_holder").css(
      "height",
      $(".test_mobile_question.active").outerHeight() + "px"
    );
    $("body, document, html").animate(
      {
        scrollTop: $(".before_tests_button_holder").offset().top,
      },
      1000
    );
  });

  $(".test_send_email_btn").click(function () {
    if ($(".test_send_phone_input").val() == "") {
      return;
    }
    var form = new FormData();
    form.append("email", $(".test_send_email_input").val());
    form.append("score", test_result_score.toString());
    form.append("stan", test_result_stan);
    form.append("phone", $(".test_send_phone_input").val());

    var settings = {
      url: "/files/sendpulse/index.php",
      method: "POST",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: form,
    };
    $(".test_send_email_btn .btn_icon").attr("src", "/img/loader.svg");
    $.ajax(settings).done(function (response) {
      if (response == "1") {
        $(".test_send_email_btn .btn_icon").attr(
          "src",
          "/img/galochka_white.svg"
        );
        if (localStorage.getItem("lang") == "ua") {
          $(".test_send_email_btn span").text("НАДІСЛАНО");
        } else {
          $(".test_send_email_btn span").text("ОТПРАВЛЕНО");
        }
        $(".test_send_email_btn").css({
          background: "rgb(130, 187, 49)",
          "border-color": "rgb(130, 187, 49)",
        });
      }
    });
    // let data = {'email':$('.test_send_email_input').val(), 'score': test_result_score, "stan": test_result_stan, "phone": $('.test_send_phone_input').val()};
    //       $.ajax({
    //           type: "POST",
    //           url: "/files/sendpulse/index.php",
    //           data: data,
    //           success: function (result) {
    //               console.log(result);
    //           },
    //       });
  });

  let i = 0;
  test_phrases_interval = setInterval(() => {
    $(".test_head_phrase").fadeTo(1000, 0);
    setTimeout(() => {
      $('.test_head_phrase[index="' + (i % 5) + '"]').fadeTo(1000, 1);
    }, 1000);
    i++;
  }, 5000);

  $(".test_mobile_radio").click(function () {
    let $input = $(this).find("input");
    let index = parseInt($input.closest(".test_mobile_question").attr("index"));
    let val = $input.attr("value");
    $('input[name="test_q_' + index + '"][value="' + val + '"]').prop(
      "checked",
      true
    );
    setTimeout(function () {
      if (index < $(".test_mobile_question").length) {
        $(".test_mobile_question").removeClass("active");
        $('.test_mobile_question[index="' + (index + 1) + '"]').addClass(
          "active"
        );
        let percent = Math.round(
          (index * 100) / $(".test_mobile_question").length
        );
        $(".test_mobileprogress_bar").css(
          "width",
          "calc(" + percent + "% - 42px)"
        );
        $(".test_mobileprogress_bar").text(percent + "%");
        $(".test_mobile_questions_holder").css(
          "height",
          $(
            '.test_mobile_question[index="' + (index + 1) + '"]'
          ).outerHeight() + "px"
        );
      } else {
        let percent = Math.round(
          (index * 100) / $(".test_mobile_question").length
        );
        $(".test_mobileprogress_bar").css(
          "width",
          "calc(" + percent + "% - 42px)"
        );
        $(".test_mobileprogress_bar").text(percent + "%");
        get_test_result();
        $(".tests_mobile_section").addClass("disabled");
      }
      console.log(index);
    }, 500);
  });

  $(window).resize(function () {
    $(".test_mobile_questions_holder").css(
      "height",
      $(".test_mobile_question.active").outerHeight() + "px"
    );
  });
}
