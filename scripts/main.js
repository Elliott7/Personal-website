particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function (){
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = `${progressHeight}%`
}