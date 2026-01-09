gsap.registerPlugin(ScrollTrigger);

gsap.to(".Square", {
    x: 1000,    duration: 8,
    scrollTrigger: {
        trigger: ".Square2",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
        
        pin: ".Square",
        pinSpacing: true,

        // onEnter Onleave 

        markers: true,
        // toggleClass: "red"
    }
})




// gsap.to(".box", {
//     x: 500,
//     duration: 2
// })

// gsap.to(".box", {
//     y: 200,
//     duration: 3,
//     delay: 2
// })

// gsap.to(".box", {
//     x: -20,
//     duration: 3,
//     delay: 5
// })

// gsap.to(".box", {
//     y: -10,
//     duration: 3,
//     delay: 12
// })


const tl = gsap.timeline();

tl.to(".box", {duration: 3, x: 400})
   .to(".box", {duration: 3, y: 400})
   .to(".box", {duration: 3, x: 0})        




















