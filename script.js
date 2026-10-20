function showTime() {
	const timeElement = document.getElementById('currentTime');
	if (timeElement) timeElement.textContent = new Date().toUTCString();
}

if (document.getElementById('currentTime')) {
	showTime();
	setInterval(showTime, 1000);
}
