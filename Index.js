$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
window.onload = function () {
    console.log("Page loaded")
    
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "My SuperPowers"              
        },
        axisY: {
        title: "Percentage %"
      },
        axisX: {
        title: "Languages/Framework",        
      },
        legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontFamily: "Raleway",
      },
        dynamicDisplay: true,
        animationEnabled: true,
        data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                
                type: "column",
                
                dataPoints: [
                    { label: "HTML5",  y: 80, color: "orange"},
                    { label: "CSS3", y: 85, color: "#66a3ff"  },
                    { label: "Javascript", y: 50, color: "#e6e600" },
                    { label: "Jquery",  y: 65, color: "#3399ff" },
                    { label: "Bootstrap",  y: 75, color: "#751aff" },
                    { label: "CanvasJs", y:80, color: "#e62e00" }
                ]
            }
        ]
    });
    
    chart.render(); 
    $('.animate').scrolla({mobile: false});

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 45.5071, lng: -73.5806},
        scrollwheel: false,

    });
    var marker = new google.maps.Marker({
        position: {lat: 45.5071, lng: -73.5806},
        map: map
    });      
}



