var i = 0; //start point
var images = [];
var time = 1000;
//image lists
images[0]= 'images/travel1.png';
images[1]= 'images/travel2.jpg';
images[2]= 'images/travel3.jpg';
images[3]= 'images/travel4.jpg';
<<<<<<< HEAD

=======
images[4]= 'images/travel5.jpg';
>>>>>>> 4ab6d327f83217c0c81aaffc6a54073b5a09b0a1
//change Image
function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	} 
	else {
		i = 0;
	}
	setTimeout("changeImg()",time);
}
window.onload = changeImg;
