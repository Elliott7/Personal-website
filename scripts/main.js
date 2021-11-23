
// Particles effects
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Scroll bar effect
let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function (){
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = `${progressHeight}%`
}

// Observer API used to add animations once certain elements are within the viewport
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
let observer = new IntersectionObserver(callbackFunc, options)
observer.observe(document.getElementById('my-description'))

function callbackFunc(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            let items = document.getElementsByClassName('skills-item')
            let text = document.getElementById('my-description')
            for (let i = 0; i < items.length; i++){
                items[i].classList.add('skills-item-ani')
            }
            text.classList.add('about-me-info-ani')
        }
        let txt = `${entry.target.id} visibility ${entry.isIntersecting}`
        console.log(txt)
    })
}

