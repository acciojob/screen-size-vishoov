//your JS code here. If required.
const w = document.querySelector('.w');
const h = document.querySelector('.h');

window.addEventListener('resize', ()=>{
	w.textContent = window.innerWidth;
	h.textContent = window.innerHeight;
})