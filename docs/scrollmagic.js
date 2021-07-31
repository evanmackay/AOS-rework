const intro = $('.intro');
const vid = document.querySelector('video')
const text = $('.h1')
// END SECTION
const section = $('.section');
const end = $('.aos-bottom')
// Scroll Magic

const controller = new ScrollMagic.Controller();

// SCENES
const scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElemnt: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(".intro")
    .addTo(controller);

    // Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;
    
    scene.on('update', e => {
        scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;

        vid.currentTime = delay;
    }, 70);
