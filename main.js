
$(function() {
  let check = $.ajax({
    dataType: "json",
    url: "http://www.omdbapi.com/?apikey=812eab87&s=Batman"
  });
  check.then(data => {
    console.log(data.Search);
    $(".block").remove();
    data.Search.forEach(element => {
      console.log(element.Title)
      $("div.owl-carousel").append(`<div class='block'>${element.Title}</div>`) ; return "";
    });
    $(function() {
      let own = $(".owl-carousel");
      own.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        center: true
      });
    });
  });
});
