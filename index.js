$(document).ready(function() {


$("#romance, #scifi, #horror, #action, #fantasy").hide();
$(".romance-header, .scifi-header, .horror-header, .action-header, .fantasy-header").hide();


// $("#navbarNav").click(function() {
//   location.reload(true);
// });

$('#inputGroupSelect01').on('change', function() {
  $("#comedy, .comedy-header").hide();
  $("#romance, .romance-header").hide();
  $("#scifi, .scifi-header").hide();
  $("#horror, .horror-header").hide();
  $("#action, .action-header").hide();
  $("#fantasy, .fantasy-header").hide();
  switch(this.value){
    case "Comedy":
    $("#comedy, .comedy-header").show();
    break
    case "Romance":
      $("#romance, .romance-header").show();
    break
    case "Sci-fi":
      $("#scifi, .scifi-header").show();
    break;
    case "Horror":
      $("#horror, .horror-header").show();
    break;
    case "Action":
      $("#action, .action-header").show();
    break;
    case "Fantasy":
      $("#fantasy, .fantasy-header").show();
    break;
  }

  console.log ("hola")

});

  });
