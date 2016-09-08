$(document).ready(function(){

	//Listen for the form to be submitted
	$('#apple-search').submit(function(event) {

		// Stop the form form default submit
		event.preventDefault();

		//Get the value of the search query ie Titanic, The Beatles etc from the Get array
		var searchQuery = $('#apple-search [type=search]').val();

		// get our media type ie movie, podcast etc from the Get array 
		var mediaType = $('#apple-search select').val();

		// Make sure there is something to search
		if($.trim(searchQuery) == ''){

			//Show an error message to user

			// Return out of function
			return;
		}	

		// Send the search query to the server


		$.ajax({
			url:'api/apple-search.php',
			data: {
				//
				searchQuery: searchQuery,
				mediaType: mediaType

			},
			success:function(dataFromServer) {
				console.log(dataFromServer);
			},
			error:function(){

			}			



		})



	});

});