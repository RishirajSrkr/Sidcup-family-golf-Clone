const cursorBlur = document.getElementById("cursor-blur");
const cursor = document.getElementById("cursor");
const scrollText = document.querySelectorAll(".texts");
const scroller = document.getElementById("scroller");
const navLinks = document.querySelectorAll(".nav-link");

const aboutUs = document.getElementById("about-us-img");

const overlays = document.getElementsByClassName("overlay");


const heading3 = document.querySelectorAll("h3");



heading3.forEach(heading => {
    heading.addEventListener("mouseover",() => {
        cursor.classList.add("cursorOnH3");
    })
    heading.addEventListener("mouseout",() => {
        cursor.classList.remove("cursorOnH3");
    })
})



//cursor
document.addEventListener("mousemove", (e) => {
    // console.log(e.x); this gives the distance in the x direction where our mouse moved.
    cursor.style.left = e.x - (cursor.offsetWidth / 2) + "px";
    cursor.style.top = e.y - (cursor.offsetHeight / 2) + "px";

    cursorBlur.style.left = e.x - 200 + "px";
    cursorBlur.style.top = e.y - 200 + "px";
})



// scrolltext
scrollText.forEach(text => {
    text.addEventListener("mouseover", () => {
        cursor.classList.add("cursorOnScrollbar");
        cursor.style.scale = 0.6;
    })
    text.addEventListener("mouseout", () => {
        cursor.classList.remove("cursorOnScrollbar");
        cursor.style.scale = 1;


    })
})



//navbar

navLinks.forEach(navLink => {
    navLink.addEventListener("mouseover", () => {
        cursor.classList.add("cursorEffect01");
        navLink.style.color = "#B3E824";
    })
    navLink.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursorEffect01");
        navLink.style.color = "white";
    })
})






function openfaq() {
    window.open("#faq.html")
}

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.3,
    height: "105px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -1%",
        scrub: 1
    }
})

//background color
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1
    }

})

gsap.from("#sale-info", {
    y: 100,
    duration: .6,
    scrollTrigger: {
        trigger: "#sale-info",
        scroller: "body",
        start: "100px",
        // markers: true,
        scrub: 1
    }
})


//about us
gsap.from("#about-us-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 55%",
        scrub: 1
    }
})

gsap.from("#about-us-img1", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-us-img1",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
    }
})
gsap.from("#about-us-img2", {
    x: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-us-img2",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
    }
})



gsap.from(".card", {
    scale: 0.85,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 95%",
        end: "top 50%",
        scrub: 1
    }
})


//colons
gsap.from("#colon1", {
    x: -100,
    y: -100,
    scale: 0,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        scrub: 1,
        start: "top 50%",
        end: "top 60%",
        // markers: true
    }
})
gsap.from("#colon2", {
    x: 100,
    y: 100,
    scale: 0,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        scrub: 1,
        start: "top 110%",
        end: "top 100%",
        // markers:true

    }
})

//feedback text, reviews
gsap.from(".feedback p", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 1
    }

})

//what are you waiting for text
gsap.from("#page4 h1", {
    y: 200,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        scrub: 1,
        start: "top 110%",
        end: "top 90%",
    }
})
gsap.from("#page4 .box", {
    y: 250,
    scrollTrigger: {
        trigger: "#page4 .box",
        scroller: "body",
        scrub: 1,
        // markers:true,
        start: "top 120%",
        end: "top 100%"
    }
})










