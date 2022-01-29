$(document).ready(function() {


      //$('h2').hide(100);
      //$('h5').hide(100);
      //$(".searchdiv").hide(100);
      //$('img').hide(100);
      $('#aboutp').hide(100);
      $('#abouth2').hide(100);
      $("#comedyjq").hide();
      $("#romancejq").hide();
      $("#scifijq").hide();
      $("#horrorjq").hide();
      $("#actionjq").hide();
      $("#fantasyjq").hide();

      $('.aboutlink').click(function() {
        //event.preventDefault()
        $('#abouth2').show();
        $('#aboutp').show();
        $("#homeparent").hide();
        $("#homeselect").hide();

      });

      $(".homediv").click(function() {
        location.reload(true);
      });

      $('.movies').on('change', function() {
        $(".moviesection").hide();
        switch(this.value){
          case "Comedy":
          $("#comedyjq").show("slow");
          break;
          case "Romance":
          $("#romancejq").show("slow");
          break
          case "Sci-fi":
          $("#scifijq").show("slow");
          break;
          case "Horror":
          $("#horrorjq").show("slow");
          break;
          case "Action":
          $("#actionjq").show("slow");
          break;
          case "Fantasy":
          $("#fantasyjq").show("slow");
          break;
        }



        console.log("h")
      });

});
