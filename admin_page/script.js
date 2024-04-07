var tl=gsap.timeline();


tl.from("#img", {
    x:-20,
    duration:1,
    yoyo:true,
    delay:0.5,
    opacity:0,
    
});

tl.from("#text",{
    opacity:0,
    duration:0.5,
});

tl.from("#profile", {
    opacity:0.1,
});

