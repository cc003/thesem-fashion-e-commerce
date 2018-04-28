//slider 
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});


//open link in background tab

function popUnder(node) {
    var newWindow = window.open("about:blank", node.target, "width=500,height=500");
    newWindow.blur();
    window.focus();
    newWindow.location.href = node.href;
    return false;
}


//side nav

/*pushes the content*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}




//product detail carousel bootstrap 4 show 2

$('#carouselExample').on('slide.bs.carousel', function (e) {



    var $e = $(e.relatedTarget);

    var idx = $e.index();

    var itemsPerSlide = 2;

    var totalItems = $('.carousel-item').length;

    

    if (idx >= totalItems-(itemsPerSlide-1)) {

        var it = itemsPerSlide - (totalItems - idx);

        for (var i=0; i<it; i++) {

            // append slides to end

            if (e.direction=="left") {

                $('.carousel-item').eq(i).appendTo('.carousel-inner');

            }

            else {

                $('.carousel-item').eq(0).appendTo('.carousel-inner');

            }

        }

    }

});

