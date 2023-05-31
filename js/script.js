// parllax
$(window).scroll(function () {
  const wScroll = $(this).scrollTop();
  console.log(wScroll);

  $(".content .baris1").css({
    transform: "translate(0px," + wScroll / 2 + "%)",
  });

  $(".content .baris2").css({
    // 'display' : 'none'
    transform: "translate(0px," + wScroll / 3 + "%)",
  });

  $(".content .fancy").css({
    transform: "translate(" + wScroll * 20 + "%," + "0px)",
  });

  $(".bg-video").css({
    'top': wScroll,
  });

  if (wScroll > 0) {
    $("nav").css({
      "background-color": "rgba(255, 255, 255, 1)",
      'padding': "5px 8%",
    });

    $("nav ul li a").css({
      'color': "#000",
    });

    $("nav a img").css({
      'filter': "invert(0%)",
    });

    $("nav a img:hover").css({
      'background-color': "#fff",
    });
  } else if (wScroll < 1) {
    $("nav").css({
      'background': "none",
      'padding': "20px 8%",
    });
    $("nav ul li a").css({
      'color': "#fff",
    });
    $("nav a img").css({
      'filter': "invert(100%)",
    });
    $("nav a img:hover").css({
      "background-color": "var(--primary-color)",
    });
  }

  if (wScroll >= 695) {
    $(".kiri").css({
      transform: "none",
    });
    $(".kanan").css({
      transform: "none",
    });
  } else if (wScroll >= 400) {
    $(".kiri").css({
      transform: "translateX(" + wScroll / 400 + "%)",
    });
    $(".kanan").css({
      transform: "translateX(-" + wScroll / 400 + "%)",
    });
  } else if (wScroll >= 200) {
    $(".kiri").css({
      transform: "translateX(-50%)",
    });
    $(".kanan").css({
      transform: "translateX(50%)",
    });
  } else if (wScroll < 600) {
    $(".kiri").css({
      transform: "translateX(-200%)",
    });

    $(".kanan").css({
      transform: "translateX(200%)",
    });
  }
});
