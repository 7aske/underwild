function parallax(){
	var layer0 = document.getElementById('layer0');
	var layer1 = document.getElementById('layer1');
	var layer2 = document.getElementById('layer2');
	var layer3 = document.getElementById('nletter');
    var pos = window.pageYOffset;
	layer0.style.top = (pos / 2) +'px';
	layer1.style.top = (pos / 3) +'px';
	layer2.style.top = (pos / 7) +'px';
	layer3.style.backgroundPositionY = 80-(pos / 7) +'px';
}
window.addEventListener("scroll", parallax, false);