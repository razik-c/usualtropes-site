$("body").prepend('<div class="cursor"></div>');

$(document).mousemove(function (e) {
  $(".cursor")
    .eq(0)
    .css({
      left: e.pageX,
      top: e.pageY - $(window).scrollTop(),
    });
});

$("a")
  .mouseenter(function () {
    $(".cursor").addClass("hover");
  })
  .mouseleave(function () {
    $(".cursor").removeClass("hover");
  });

var owl = $(".owl-carousel");
$(".next").click(function () {
  console.log("OKAY");
  owl.trigger("next.owl.carousel");
});

$(".prev").click(function () {
  owl.trigger("prev.owl.carousel");
});
owl.owlCarousel({
  items: 4,
  margin: 10,
  loop: true,
  nav: false,
});

