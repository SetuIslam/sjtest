$(document).ready(function(){
    "use strict";
    //WOW
	new WOW().init();	
	

    // Scroll To Top	
	$.scrollUp({
		scrollText: '<i class="fas fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
    });	

	//Fixed top
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  });

    
    //Menu collapse
    $("#caffeToggleMenuBtn").click(function () { 
        $("#caffeToggleMenu").slideToggle();
	});



    //main slider
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000
        // fade: true,
    });
 

//Favourite
  $('.caffe_favourite_slider').owlCarousel({
    loop:true,
    nav:false,
    margin:30,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

  //customer_review_slider slider
  $('.home_customer_review_slider').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		fade: true
	});
  $('.customer_review_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		fade: true
	});

	

	//caffe_map active
	$(function() {
	    // Snazzy Map Style - https://snazzymaps.com/style/6618/cladme
	    var mapStyle = 
	    [
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#444444"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#46bcec"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    }
		];

	    // Create the map
	    var map = new google.maps.Map($('.caffe_map')[0], {
	        zoom: 8,
	        center: new google.maps.LatLng(40.6976701,-74.2598758),
	        scrollwheel: true,
	        styles: mapStyle
	    });

	    // Custom marker icon
	    var icon = {
		    url: "assets/images/map_marker.svg", // url
		    scaledSize: new google.maps.Size(50, 50), // scaled size
		};
	    // Add a marker
	    var marker = new google.maps.Marker({
	        map: map,
	        // icon: 'assets/images/map_marker.svg',
	        icon: icon,
	        position: new google.maps.LatLng(40.7055689,-74.0156334)
	    });

	});    

});
