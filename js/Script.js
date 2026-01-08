



// Mi primera animacion


gsap.to(".Caja-1", {
    duration: 2, 
    x: 100});

// Mi segunda animacion vertical
gsap.to(".Caja-2", {
    duration: 2 , 
    y: 100, delay: 2
})

// Mi tercera animacion con de derecha a izquierda
gsap.to(".Caja-3", 
    {duracion:2,
        x: -100, delay: 3
    })


// Mi cuarta animacion con abajo hacia arriba
gsap.to(".Caja-4", 
    {duration: 1, 
        y: -100, delay: 4
    })


// ***********************


// Abajo a derecha


gsap.to(".Caja-6", 
    {
        duration: 2,
        x: 100,
        y: 100
    })


// Arriba a izquierda

gsap.to(".Caja-7",
    {
        duration: 2,
        x: -100,
        y: 100
    }
)

gsap.to(".Caja-8", {
    duration: 2,
    x: -100,
    y: -100
})

gsap.to(".Caja-9", {
    duration: 2,
    x: 100,
    y: -100
})


// ***********************
// transformaciones 



gsap.to(".Caja-10", {
    duration: 2,
    xPercent: 50,
})

gsap.to(".Caja-11", {
    duration: 2,
    yPercent: 50
})


gsap.to(".Caja-12", {
    duration: 2,
    scale: 2
})


gsap.to(".Caja-13", {
    duration: 2,
    scaleX: 2
})



gsap.to(".Caja-14", {
    duration: 2,
    scaleY: 2
})


gsap.to(".Caja-15", {
    duration: 2,
    rotation: 45
})


gsap.to(".Caja-16", {
    duration: 2,
    skew: 200
})


gsap.to(".Caja-17", {
    duration: 2,
    skewX: 45
})

gsap.to(".Caja-18", {
    duration: 2,
    skewY: 45
})



gsap.to(".Caja-19", {
    duracion: 2,
    opacity: 0.2
})


gsap.to(".Caja-20", {
    duracion: 5,
    scale: 1.5,
    repeat: -1 // Repetir infinitamente
})


gsap.to(".Caja-21", {
    duracion: 1,
    scale: 1.5,
    repeat: 5 
})


gsap.to(".Caja-22", {
    duracion: 1,
    scale: 1.5,
    ease: "none"
})

gsap.to(".Caja-23", {
    duration: 2,
    x: 100,
    ease: "power1.in"
})

gsap.to(".Caja-24", {
    duration: 2,
    y: 100,
    ease: "Power.inOut"
})

gsap.to(".Caja-25", {
    duration: 2,
    x: -100,
    ease: "Power.out"
})


gsap.to(".Caja-25", {
    duration: 2,
    y: -100,
    ease:"power1.in"
})

gsap.to(".Caja-26", {
    duration: 2,
    y: 100,
    ease: "power1.out"
})

gsap.to(".Caja-27", {
    duration: 2,
    y: 100,
    x: 100,
    ease: "Power1.inOut"
}
)

gsap.to(".Caja-28", {
    duration: 2,
    x: -100,
    y: -100,
    ease: "power2.in"}
)


gsap.to("Caja-29", {
    duration: 2,
    scaleX: 2,
    ease: "power2.out",
})


gsap.to(".Caja-30", {
    duration: 2,
    scaleY: 2,
    ease: "power2.inOut"
})


gsap.to(".Caja-31", {
    duration: 2,
    delay: 1,
    rotation: 45,
    backgroundColor: "red",
    borderRadius: "50%",
    scale: 1.5,
})

// ********************************


let tl = gsap.timeline();


tl.to(".Caja-32", {
    duration: 2,
    x: 200
}).to(".Caja-33", {
    duration: 2,
    y: -50,
    x: -50
})


let tl2 = gsap.timeline();

tl2.to(".Caja-34", {durarion: 2, x: 80}, .5)
    .to(".Caja-35", {duration: 2, y: -80}, 1)
    .to(".Caja-36", {duration: 2, skewX: 45, backgroundColor: "purple"}, 1.5)




// ********************************


let tl3 = gsap.timeline();

tl3.to(".Caja-37", {duration: 3, x: 600})
.add("Caja-38", "+=1")
.to(".Caja-38", {duratio: 2, y: -200, backgroundColor: "orange"}, "Caja-38")
.to(".Caja-39", {duration: 2, x: 100, y: 200, scale: 2, backgroundColor: "bluesky"})


// *********************


let tl4 = gsap.timeline();

tl4.to(".Caja-40", { duration: 2, x: 200 })
  .to(".Caja-41", { duration: 2, y: 200 })
  .to(".Caja-42", { duration: 2, rotation: 90 });


tl4.pause();
tl4.play();
tl4.progress(0.5);
tl4.restart();
tl4.resume();
tl4.reverse();
tl4.seek(5)
tl4.time(4)
tl4.timeScale(3);   



// ********************





gsap.registerPlugin(ScrollTrigger);

gsap.to(".Square", {
    x: 700,
    duration: 3,
    scrollTrigger: ".Square"
})





