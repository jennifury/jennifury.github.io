function line(particle, particle2) {
  context.beginPath();
  context.moveTo(particle.x, particle.y);
  context.lineTo(particle2.x, particle2.y);
  context.stroke();
}
//function to conect code

//animation for the code to move
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < maxParticles; i++) {
    let particle = particles[i];
    context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
    for (let j = 0; j < maxParticles; j++) {
      if (i != j) {
        let particle2 = particles[j];
        let distanceX = Math.abs(particle.x - particle2.x);
        let distanceY = Math.abs(particle.y - particle2.y);
        if (distanceX < threshold && distanceY < threshold) {
          context.lineWidth = ((threshold * 1.2) - (distanceX + distanceY)) / 50;
          if(j%2 ==0){
            context.strokeStyle = 'rgb(204,204,255)';
        }else{
            context.strokeStyle = 'rgb(255, 102, 102)';
        }
          line(particle, particle2);
        }
      }
    }
    particle.x = particle.x + particle.vx;
    particle.y = particle.y + particle.vy;
    if (particle.x > canvas.width - particleSize || particle.x < particleSize) {
      particle.vx = -particle.vx;
    }
    if (particle.y > canvas.height - particleSize || particle.y < particleSize)	 {
      particle.vy = -particle.vy;
    }
  }
  window.requestAnimationFrame(animate);
}

let canvas = document.getElementById('myACanvas');
let context = canvas.getContext('2d');
let particles = [];
let particleSize = 3;
let maxParticles =150;
let threshold = 50;
for (let i = 0; i < maxParticles; i++) {
  let particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random(),
    vy: Math.random()
  }

  particles.push(particle);
}
context.fillStyle = 'white';
animate();




}
