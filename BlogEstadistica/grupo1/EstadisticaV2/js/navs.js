$(document).ready(function() {
    $("#tmMainNav").singlePageNav();
    
    
    
    $(".navbar-toggler").on("click", function(e) {
        $(".tm-sidebar").toggleClass("show");
        e.stopPropagation();
      });
    
      $("html").click(function(e) {
        var sidebar = document.getElementById("tmSidebar");
    
        if (!sidebar.contains(e.target)) {
          $(".tm-sidebar").removeClass("show");
        }
      });
    
      $("#tmMainNav .nav-link").click(function(e) {
        $(".tm-sidebar").removeClass("show");
      });
});