$(document).ready(function(){
  $('.dropdown-submenu a.ARsubmenu').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});