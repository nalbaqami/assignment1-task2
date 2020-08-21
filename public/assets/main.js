
function plusSlides(n) {
  showSlides(slideIndex += n);
  var id = document.querySelector('.mySlides.active').id;
  document.getElementById("like").setAttribute("data-attr", id);
  document.getElementById("dislike").setAttribute("data-attr", id);
  displayProfilesResult();
	calculateCount();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  var id = document.querySelector('.mySlides.active').id;
  document.getElementById("like").setAttribute("data-attr", id);
  document.getElementById("dislike").setAttribute("data-attr", id);
  displayProfilesResult();
	calculateCount();
}

var slides = document.getElementsByClassName("mySlides");
var randomIndex = new Array();
function showSlides(n) {
  var i;
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      slides[i].classList.remove("active"); 
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[randomIndex[slideIndex-1]].style.display = "block";
  slides[randomIndex[slideIndex-1]].classList.add("active");
  
  var id = document.querySelector('.mySlides.active').id;
  document.getElementById("like").setAttribute("data-attr", id);
  document.getElementById("dislike").setAttribute("data-attr", id);
  // dots[slideIndex-1].className += " active";
}

function shuffle() {
  for(i=0; i<slides.length; i++){
    randomIndex.push(i);
  }
  
  //http://stackoverflow.com/a/18650169/1582080
  randomIndex.sort(function() {
  return .5-Math.random();
  });
}

var myIndex = Math.floor(Math.random()*slides.length);
shuffle();
var slideIndex = 1;
showSlides(slideIndex);

function like() {
	if(document.getElementById("like").getAttribute("data-attr") == 'Profile 1') {
		document.getElementById("slider1_hidden").value = 1;
	}	
	if(document.getElementById("like").getAttribute("data-attr") == 'Profile 2') {
		document.getElementById("slider2_hidden").value = 1;
	}
	if(document.getElementById("like").getAttribute("data-attr") == 'Profile 3') {
		document.getElementById("slider3_hidden").value = 1;
	}
	if(document.getElementById("like").getAttribute("data-attr") == 'Profile 4') {
		document.getElementById("slider4_hidden").value = 1;
	}
	if(document.getElementById("like").getAttribute("data-attr") == 'Profile 5') {
    document.getElementById("slider5_hidden").value = 1;
  }
  displayProfilesResult();
  calculateCount();
}

function dislike() {
	if(document.getElementById("dislike").getAttribute("data-attr") == 'Profile 1') {
		document.getElementById("slider1_hidden").value = 0;
	}	
	if(document.getElementById("dislike").getAttribute("data-attr") == 'Profile 2') {
		document.getElementById("slider2_hidden").value = 0;
	}
	if(document.getElementById("dislike").getAttribute("data-attr") == 'Profile 3') {
		document.getElementById("slider3_hidden").value = 0;
	}
	if(document.getElementById("dislike").getAttribute("data-attr") == 'Profile 4') {
		document.getElementById("slider4_hidden").value = 0;
	}
	if(document.getElementById("dislike").getAttribute("data-attr") == 'Profile 5') {
    document.getElementById("slider5_hidden").value = 0;
  }
  displayProfilesResult();
  calculateCount();
}

function calculateCount() {
	var totallike = ((parseInt(document.getElementById("slider1_hidden").value) == 1) ? 1 : 0) + ((parseInt(document.getElementById("slider2_hidden").value) == 1) ? 1 : 0) + ((parseInt(document.getElementById("slider3_hidden").value) == 1) ? 1 : 0) + ((parseInt(document.getElementById("slider4_hidden").value) == 1) ? 1 : 0) + ((parseInt(document.getElementById("slider5_hidden").value) == 1) ? 1 : 0);
		
		
	var totaldislike = ((parseInt(document.getElementById("slider1_hidden").value) == 0) ? 1 : 0) + ((parseInt(document.getElementById("slider2_hidden").value) == 0) ? 1 : 0) + ((parseInt(document.getElementById("slider3_hidden").value) == 0) ? 1 : 0) + ((parseInt(document.getElementById("slider4_hidden").value) == 0) ? 1 : 0) + ((parseInt(document.getElementById("slider5_hidden").value) == 0) ? 1 : 0);
	
	// document.getElementById("content-total").innerHTML = "Total Like:"+ totallike +"</br> Total Dislike:"+ totaldislike;

}

function displayProfilesResult() {
	var slider1 = ((parseInt(document.getElementById("slider1_hidden").value) == 1) ? 'Profile 1' : 0);
	var slider2 = ((parseInt(document.getElementById("slider2_hidden").value) == 1) ? 'Profile 2' : 0);
	var slider3 = ((parseInt(document.getElementById("slider3_hidden").value) == 1) ? 'Profile 3' : 0);
	var slider4 = ((parseInt(document.getElementById("slider4_hidden").value) == 1) ? 'Profile 4' : 0);
	var slider5 = ((parseInt(document.getElementById("slider5_hidden").value) == 1) ? 'Profile 5' : 0);
  var htmlData = '';
  if(slider1 == "Profile 1") {
    htmlData  += slider1+'</br>';
  }
  if(slider2 == "Profile 2") {
    htmlData += slider2+'</br>';
  }
  if(slider3 == "Profile 3") {
    htmlData += slider3+'</br>';
  }
  if(slider4 == "Profile 4") {
    htmlData += slider4+'</br>';
  }
  if(slider5 == "Profile 5") {
    htmlData += slider5;
  }
  console.log(htmlData);
  document.getElementById("content-profile-result").innerHTML = htmlData;
}