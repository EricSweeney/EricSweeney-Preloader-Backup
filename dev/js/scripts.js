import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { MotionPathHelper } from "gsap/MotionPathHelper";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

let mainTL = gsap.timeline();

mainTL
.from("#Ring-4", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})
.from("#Ring-3", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})
.from("#Ring-2", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})
.from("#Ring-1", {duration: 0.4, transformOrigin: '50% 50%', scale: 0, opacity: 0, ease: "back.out(1)"})

.from("#Planet-1", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})
.from("#Planet-2", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})
.from("#Planet-3", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})
.from("#Planet-4", {duration: 0.3, transformOrigin: '50% 50%', scale: 0, ease: "elastic.out(1)", y: -600})

//add delay
//figure out how to change motionpath origin
//why is it rotating twice around path


.to("#Planet-1", {duration: 7, ease:"power2.in", motionPath:{path:"#Ring-1", align: "#Ring-1", alignOrigin:[0.5, 0.5]}}, "orbit")
.to("#Planet-2", {duration: 6, ease:"power2.in", motionPath:{path:"#Ring-2", align: "#Ring-2", alignOrigin:[0.5, 0.5]}}, "orbit")
.to("#Planet-3", {duration: 5, ease:"power2.in", motionPath:{path:"#Ring-3", align: "#Ring-3", alignOrigin:[0.5, 0.5]}}, "orbit")
.to("#Planet-4", {duration: 4, ease:"power2.in", motionPath:{path:"#Ring-4", align: "#Ring-4", alignOrigin:[0.5, 0.5]}}, "orbit")
;

//let secTL = gsap.timeline({repeat: -1});

//secTL
//.to("#Planet-1", {duration: 6, ease:"none", motionPath:{path:"#Ring-1", align: "#Ring-1", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-2", {duration: 4, ease:"none", motionPath:{path:"#Ring-2", align: "#Ring-2", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-3", {duration: 3, ease:"none", motionPath:{path:"#Ring-3", align: "#Ring-3", alignOrigin:[0.5, 0.5]}}, 1)
//.to("#Planet-4", {duration: 2, ease:"none", motionPath:{path:"#Ring-4", align: "#Ring-4", alignOrigin:[0.5, 0.5]}}, 1)
//;