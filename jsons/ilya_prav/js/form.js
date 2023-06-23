$(document).ready(function () {
	

	

	$("form").submit(function(event) {
		
		if($(this).attr('id') != "donate")
		{
			

			event.preventDefault();
			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'),
				data: new FormData(this),
				contentType: false,
				cache: false,
			
				processData: false,
				success: function(result) {
					
					console.log(result);
					json = jQuery.parseJSON(result);
					
					if (json.url) setTimeout(redirect, 2000, json.url);
			
					swal({   

						title: json.header,
						text: json.message, 
						icon: json.status,  
			              
			        });
				}
			});
		}
	});	
});



function redirect(url) {
	  	window.location.href = url;
	}