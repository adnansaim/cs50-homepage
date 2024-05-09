
//the responsive bar:
let navLinks = document.querySelector('.navlinks');
let bars = document.querySelector('.fa-bars')
let xmark = document.querySelector('.fa-xmark')

bars.addEventListener('click',(e)=>{
  navLinks.style.display = 'block';
  bars.style.display = 'none';
  xmark.style.display = 'block'
})

xmark.addEventListener('click',(e)=>{
  navLinks.style.display = 'none';
  bars.style.display = 'block';
  xmark.style.display = 'none'
})


//typed js:
let programmer = "Programmer^1500";
learner = "Learner^1500";
student = "Student^1500";

const typed = new Typed(".auto-text", {
  strings: [student , learner, programmer],
  typeSpeed: 120,
  backSpeed: 80,
  loop: true,
});
