const cursor = document.querySelector('.cursor');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;

let speed = 0.5;

function animate() {
  let distX = mouseX - cursorX;
  let distY = mouseY - cursorY;

  cursorX += distX * speed;
  cursorY += distY * speed;

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  requestAnimationFrame(animate);
}

// Center on load
cursor.style.left = cursorX + 'px';
cursor.style.top = cursorY + 'px';

animate();

document.addEventListener('mousemove', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});
