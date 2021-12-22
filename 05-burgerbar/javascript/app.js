const links_container = document.querySelector(".links_container")

function displayOrHideLinks(){
	//this checks if Ul class contains show-links
	//show-links is a class in css that displays links
	//if we remove show-links links height becomes 0 and it will dissolve
	//links_container.classList - check ul class lists
	
	/*
	if(links_container.classList.contains('show-links')){
		links_container.classList.remove('show-links')
	}else{
		links_container.classList.add('show-links')
	}
	*/

	/*second method is a toggle*/
	/*What is toggle ? */
	/*removes an existing token from the list and returns false . 
	If the token doesn't exist it's added and the function returns true */
	
	/*if show-links class in exist remove it if not add it and return true*/
	links_container.classList.toggle('show-links')
}
