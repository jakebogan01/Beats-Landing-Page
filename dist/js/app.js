AOS.init();

// mouse light
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const light of document.querySelectorAll(".light")) {
    light.onmousemove = e => handleOnMouseMove(e);
}

// parallax
let group1Images = document.querySelectorAll(".images1");
let group2Images = document.querySelectorAll(".images2");
let image = document.getElementsByClassName('headphones');
let image2 = document.getElementsByClassName('case-headphones');

group1Images.forEach((item) => {
    new simpleParallax(item, {
        scale: 1.2,
        delay: .5,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'left'
    });
})

group2Images.forEach((item) => {
    new simpleParallax(item, {
        scale: 1.8,
        delay: .5,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'down'
    });
})

new simpleParallax(image, {
    scale: 3,
    delay: .5,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'up'
});

new simpleParallax(image2, {
    scale: 1.2,
    delay: .5,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'right'
});