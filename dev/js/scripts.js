import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { MotionPathHelper } from "gsap/MotionPathHelper";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

const mainTL = gsap.timeline();

mainTL
//.from("#Ring-4", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})

//.from("#Planet-1", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})

//.from("#Rectangle-right", {duration: 2, drawSVG:"0% 100%"})
function loadingIn(){
    let tl = gsap.timeline({repeat:-1});

    tl
    .from("#Loading-1", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"})
    .from("#Loading-2", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .from("#Loading-3", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    
    .to("#Loading-1", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"})
    .to("#Loading-2", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    .to("#Loading-3", {duration: 0.75, scale: 0, transformOrigin: '50% 50%', opacity: 0, ease: "back.out"}, "<50%")
    ;

    return tl;
}

function orbitIn(){
    let tl = gsap.timeline({repeat:-1});

    tl
    //.to(".FullPlanet", {duration: 1, ease: "power1.out", x: 500}, "one")
    //.to(".FullPlanet", {duration: 1, ease: "power1.in", x: 0}, "two")
    //.to(".FullPlanet", {duration: 1, ease: "power1.out", x: -500}, "three")
    //.to(".FullPlanet", {duration: 1, ease: "power1.in", x: 0}, "four")

    .to("#FullPlanet", {duration: 1, ease: "power1.out", x: 200}, "one")
    .to("#FullPlanet", {duration: 1, ease: "power1.in", x: 0}, "two")
    .to("#FullPlanet", {duration: 1, ease: "power1.out", x: -200}, "three")
    .to("#FullPlanet", {duration: 1, ease: "power1.in", x: 0}, "four")

    ;

    return tl;
}

function lineFollow(){
    let tl = gsap.timeline({repeat:-1});

    tl

    .from("#Rectangle-right", {duration: 1, scaleX: 0, ease: "power1.out"}, "one")
    .to("#Rectangle-right", {duration: 1, scaleX: 0, ease: "power1.in"}, "two")
    .from("#Rectangle-left", {duration: 1, scaleX: 0, transformOrigin: '100%', ease: "power1.out"}, "three")
    .to("#Rectangle-left", {duration: 1, scaleX: 0, transformOrigin: '100%', ease: "power1.in"}, "four")
    ;

    return tl;
}

//function moonFirstOrbit(){
    //let tl = gsap.timeline();

    //tl
    //.to(".FullPlanet", {duration: 2, ease:"none", rotation: "180_cw", transformOrigin: "0% 0%"})
    //.to("#Moon", {duration: 1, ease:"none", motionPath:{path:"#Orbit", align: "#Orbit", start:0.25, end:1, alignOrigin:[0.5, 0.5]}})
    //;

    //return tl;

//}

function moonOrbit(){
    let tl = gsap.timeline({repeat:-1});

    tl
    //.to(".FullPlanet", {duration: 2, ease:"none", rotation: "180_cw", transformOrigin: "0% 0%"})
    //.to("#Moon", {duration: 1, ease:"none", motionPath:{path:"#Orbit", align: "#Orbit", start: 0.5, end:1, alignOrigin:[0.5, 0.5]}})
    .to("#Moon", {duration: 3, ease:"none", motionPath:{path:"#Orbit", align: "#Orbit", start: 0, end:1, alignOrigin:[0.5, 0.5]}})
    ;

    return tl;

}


//transformOrigin: '50% 50%', scale: 0.6,


mainTL
.add(moonOrbit())
.to("#Orbit", {duration: 0.0001, opacity: 0})
.from("#LoadingText", {duration: 3, opacity: 0, ease: "elastic.out(0.5, 0.3)", y: 200}, "begin")
.add(loadingIn())
.from("#FullPlanet", {duration: 3, opacity: 0, ease: "elastic.out(0.5, 0.7)", y: -450}, "begin")
.to("#FullPlanet", {duration: 2, ease: "power1.inOut", x: -200}, "start1")
.to("#FullPlanet", {duration: 1, ease: "power1.in", x: 0}, "start2")
//.from("#Rectangle-left", {duration: 2, scaleX: 0, transformOrigin: '100%', ease: "power1.inOut"}, "start1")
//.to("#Rectangle-left", {duration: 1, scaleX: 0, transformOrigin: '100%', ease: "power1.in"}, "start2")
.add(orbitIn(), "true")
.add(lineFollow(), "true")



//add delay
//figure out how to change motionpath origin
//why is it rotating twice around path

//.to("#Planet-1", {duration: 7, ease:"power2.in", motionPath:{path:"#Ring-1", align: "#Ring-1", alignOrigin:[0.5, 0.5]}}, "orbit")
;

//let secTL = gsap.timeline({repeat: -1});

//secTL
//.to("#Planet-1", {duration: 6, ease:"none", motionPath:{path:"#Ring-1", align: "#Ring-1", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-2", {duration: 4, ease:"none", motionPath:{path:"#Ring-2", align: "#Ring-2", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-3", {duration: 3, ease:"none", motionPath:{path:"#Ring-3", align: "#Ring-3", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-4", {duration: 2, ease:"none", motionPath:{path:"#Ring-4", align: "#Ring-4", alignOrigin:[0.5, 0.5]}}, 1)
//;