import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    let particlesArray;

    // constructor function
    function Particle(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    // draw method to particle prototype
    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    // update method to particle prototype
    Particle.prototype.update = function () {
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    };

    // create particle array
    function init() {
      particlesArray = [];
      for (let i = 0; i <= 200; i++) {
        const size = Math.random() * 1.5;
        const x = Math.random() * (innerWidth - size * 2);
        const y = Math.random() * (innerHeight - size * 2);
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        const color = 'white';
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    // animate loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    init();
    animate();

    window.addEventListener('resize', function () {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
