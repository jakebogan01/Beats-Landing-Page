AOS.init();

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

let image = document.getElementsByClassName('parallaximg1');
new simpleParallax(image, {
    scale: 1.2,
    delay: .5,
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'left'
});