gsap.registerPlugin(ScrollTrigger);

gsap.to(".Square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".Square",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "restart pause resume reset",

        // onEnter Onleave 

        markers: true,
        // toggleClass: "red"
    }
})