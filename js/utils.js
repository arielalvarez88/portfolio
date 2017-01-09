var offsetBody = function(){

    var navBar = $("#principal-navbar");

    $(".category").css("padding-top",navBar.outerHeight());
};


$(window).resize(offsetBody);
$(document).ready(offsetBody);
