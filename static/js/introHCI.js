'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Is this it?");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(formClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function formClick(e) {
	var newWidth = $("#width").val();
	var whichProject = $("#project").val();
	var newDesc = $("#description").val();
	if($("#width").val() != '') {
		$(whichProject).animate({
			width: newWidth
		}); 
	}
	$(whichProject + " .project-description").text(newDesc);
}

function projectClick(e) {
	console.log("Project clicked");
    e.preventDefault();
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
      $(".project-description").fadeOut();
    }
}