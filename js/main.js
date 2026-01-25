const mobileToggle=document.getElementById("mobileToggle");
const navMenu=document.getElementById("navMenu");
mobileToggle.addEventListener("click",()=>{
mobileToggle.classList.toggle("active");
navMenu.classList.toggle("active");
});

/* NAVBAR SHADOW */
window.addEventListener("scroll",()=>{
document.getElementById("navbar").style.boxShadow=
window.scrollY>50?"0 6px 20px rgba(0,0,0,.08)":"none";
});

/* SMOOTH FADE ANIMATIONS */
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.opacity=1;
e.target.style.transform="translateY(0)";
}
});
},{threshold:.12});

document.querySelectorAll(".project-card,.skill-item,.timeline-item,.cert-item").forEach(el=>{
el.style.opacity=0;
el.style.transform="translateY(30px)";
el.style.transition="all .9s cubic-bezier(.16,1,.3,1)";
observer.observe(el);
});

/* YEAR */
document.getElementById("currentYear").textContent=new Date().getFullYear();
