$(".interests i").on("mouseenter", e => {
  $(e.currentTarget.nextElementSibling).toggleClass("show");
});
$(".interests i").on("mouseleave", e => {
  $(e.currentTarget.nextElementSibling).toggleClass("show");
});
