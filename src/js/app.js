AOS.init();

let image = document.getElementsByClassName('parallaximg1');
new simpleParallax(image, {
    scale: 1.2,
    delay: .5,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'left'
});