function showVideoPopup(videoSrc) {
    var videoPlayer = document.getElementById('popup-video');
    videoPlayer.src = videoSrc;
    document.getElementById('video-popup').style.display = 'block';
}

function closeVideoPopup(event) {
    var videoPlayer = document.getElementById('popup-video');
    videoPlayer.pause();
    videoPlayer.src = ''; 
    document.getElementById('video-popup').style.display = 'none';
    event.stopPropagation(); 
}

document.addEventListener('DOMContentLoaded', function() {
    var areas = document.querySelectorAll('area');
    areas.forEach(function(area) {
        area.addEventListener('click', function(event) {
            event.preventDefault();
            var videoSrc = area.getAttribute('data-video');
            showVideoPopup(videoSrc);
        });
    });
});