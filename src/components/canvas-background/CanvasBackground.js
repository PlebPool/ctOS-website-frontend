import React from 'react';
import "./CanvasBackground.css"

function CanvasBackground(props) {
    React.useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');

        let dots = [], // Array that contains the dots
            FPS = 60, // Frames per second
            nDots = 150, // Number of dots
            mouse = {
                x: 0,
                y: 0
            };  // mouse location

// Push dots to array

        function initialize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            nDots = (window.innerWidth * window.innerHeight)/33177600 * 3000;
            dots = [];
            for (let i = 0; i < nDots; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() + 1,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25
                });
            }
        }

// Draw the scene

        function draw() {
            ctx.clearRect(0,0,canvas.width,canvas.height);

            ctx.globalCompositeOperation = "lighter";

            for (let i = 0, x = dots.length; i < x; i++) {
                let s = dots[i];

                ctx.fillStyle = getComputedStyle(
                    document.querySelector(":root")).getPropertyValue("--secondary-color");
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = 'black';
                ctx.stroke();
            }
            const distanceForLine = 150;
            ctx.beginPath();
            for (let i = 0, x = dots.length; i < x; i++) {
                let dotI = dots[i];
                ctx.moveTo(dotI.x,dotI.y);
                if(distance(mouse, dotI) < distanceForLine) ctx.lineTo(mouse.x, mouse.y);
                for (let j = 0, x = dots.length; j < x; j++) {
                    let dotII = dots[j];
                    if(distance(dotI, dotII) < distanceForLine) {
                        ctx.lineTo(dotII.x,dotII.y);
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = getComputedStyle(
                document.querySelector(":root")).getPropertyValue("--secondary-color");
            ctx.stroke();
        }

        function distance( point1, point2 ){
            let xs = point2.x - point1.x;
            xs = xs * xs;

            let ys = point2.y - point1.y;
            ys = ys * ys;

            return Math.sqrt( xs + ys );
        }

// Update star locations

        function update() {
            for (let i = 0, x = dots.length; i < x; i++) {
                let s = dots[i];

                s.x += s.vx / FPS;
                s.y += s.vy / FPS;

                if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
            }
        }

        let updateMouse = (e) => {
            const localX = e.clientX - e.target.offsetLeft;
            const localY = e.clientY - e.target.offsetTop + window.scrollY;
            mouse.x = localX;
            mouse.y = localY;
        }

        canvas.addEventListener('mousemove', updateMouse);

        window.addEventListener("scroll", updateMouse);

        window.addEventListener("resize", function(e) {
            initialize();
        });

// Update and draw

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }
        initialize();
        tick();
    });

    return (
        <canvas id={"canvas"}
                width={"1920px"} height={"1080px"}>
        </canvas>
    );
}

export default CanvasBackground;