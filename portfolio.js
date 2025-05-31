// alert("Working on desktop only !");

const header = document.querySelector('.header');
const ed = document.querySelector('.ed');
const pr = document.querySelector('.pr');
const ex = document.querySelector('.ex');
const ac = document.querySelector('.ac');
const sk = document.querySelector('.sk');

const edu = document.querySelector('.i1');
const pro = document.querySelector('.i2');
const exp = document.querySelector('.i3');
const ach = document.querySelector('.i4');
const ski = document.querySelector('.i5');

const content = document.querySelector('.content');
const i = document.querySelectorAll('.i');

const hover1 = document.querySelector('.hover1');
const hover2 = document.querySelector('.hover2');
const hover3 = document.querySelector('.hover3');
const hover4 = document.querySelector('.hover4');
const hover5 = document.querySelector('.hover5');

const arrow = document.querySelector(".arrow1");

//windows scroll effect on header
const verticalScrollpx = window.scrollY;
if (verticalScrollpx > 10) {
   header.style.backgroundColor = "black";
}
else {
   header.style.backgroundColor = "";
}
window.addEventListener('scroll', () => {
   const verticalScrollpx = window.scrollY;
   if (verticalScrollpx > 10) {
      header.style.backgroundColor = "black";
   }
   else {
      header.style.backgroundColor = "";
   }

});
//slidebar

content.addEventListener("mouseover", () => {
   arrow.style.display = "flex";
});

// let isOpen = true;

let visibleItems = 0;

const mediaQueryLL = window.matchMedia('(min-width: 1440px)');
const mediaQueryL = window.matchMedia('(min-width: 1024px)');
const mediaQueryT = window.matchMedia('(min-width: 768px)');
// const mediaQuery = window.matchMedia('(min-width: 1024px)');
// const mediaQuery = window.matchMedia('(min-width: 1024px)');
if (mediaQueryLL.matches) {
   visibleItems = 4;
}
else if (mediaQueryL.matches) {
   visibleItems = 2;
}
else if (mediaQueryT.matches) {
   visibleItems = 1;
}
else {
   visibleItems = 2;
}

console.log(visibleItems);

const itemWidth = 250;
const maxScroll = (i.length - visibleItems) * itemWidth;
let currentPosition = 0;
arrow.addEventListener("click", () => {
   if (currentPosition < maxScroll) {
      currentPosition += itemWidth;
      content.style.transform = `translateX(-${currentPosition}px)`;
   } else {
      currentPosition = 0; // Reset if end reached
      content.style.transform = `translateX(0px)`;
   }

   // if (isOpen) {
   //    content.style.transform = "translateX(-250px)";
   // }
   // else {
   //    content.style.transform = "translateX(0)";
   // }
   // isOpen = !isOpen;
});


// body.scrollTop
function togglePopup() {
   document.getElementById("popup-1").classList.toggle("active");
}

// Open popup when button is clicked
document.querySelector(".button").addEventListener("click", (e) => {
   document.getElementById("popup-1").classList.add('active');
});

// Close popup and reset overlay
document.querySelector(".closebtn").addEventListener("click", (e) => {
   document.getElementById("popup-1").classList.remove('active');
});
//hover effect on mylist
hover1.addEventListener("mouseover", (e) => {
   edu.innerHTML = `<h5>S1:E1 &quot;Education&quot;</h5><br>   
    <b>City Montessori School</b><br>
    Scored 97.67% in 10th ISCE Board<br>
    Scored 97.83% in 12th ISC Board<br><br>
    <b>Vellore Institute Of Technology</b><br>
    Bachelor of Technology - Computer Science and Engineering; GPA: 9.09`;
   hover1.style.transition = "transform 0.5s ease";
   hover1.style.transform = "scale(1.2)";
   hover1.style.zIndex = "10";
   hover1.style.position = "relative";
   hover1.style.backgroundColor = "black";
});

hover1.addEventListener("mouseleave", (e) => {
   edu.innerHTML = "";
   hover1.style.transform = "scale(1)";
   hover1.style.zIndex = "1";
   hover1.style.backgroundColor = "";
});


hover2.addEventListener("mouseover", (e) => {
   pro.innerHTML = `<h5>S1:E3 &quot;Projects&quot;</h5><br>
    <b>Currency Converter (Web Development)</b><br>
    Converts USD to different currencies using API.<br>
    Tech: HTML, CSS, JavaScript (June '24)<br><br>
    <b>Rock Paper Scissor Game (Web Development)</b><br>
    A childhood game recreated using HTML, CSS, JS (June '24)`;
   hover2.style.transition = "transform 0.5s ease";
   hover2.style.transform = "scale(1.2)";
   hover2.style.zIndex = "10";
   hover2.style.position = "relative";
   hover2.style.backgroundColor = "black";
});

hover2.addEventListener("mouseleave", (e) => {
   pro.innerHTML = "";
   hover2.style.transform = "scale(1)";
   hover2.style.zIndex = "1";
   hover2.style.backgroundColor = "";
});


hover3.addEventListener("mouseover", (e) => {
   exp.innerHTML = `<h5>S1:E4 &quot;Experience&quot;</h5><br>
    <b>CodSoft Internship</b><br>
    (Remote: January 2024 - February 2024)<br>
    Tech: Java<br>
    Tasks: Random Number Guessing Game, Marks Calculator, ATM Interface<br>
    Completed 5 tasks, 3 mandatory. Gained real-world experience.`;
   hover3.style.transition = "transform 0.5s ease";
   hover3.style.transform = "scale(1.2)";
   hover3.style.zIndex = "10";
   hover3.style.position = "relative";
   hover3.style.backgroundColor = "black";
});

hover3.addEventListener("mouseleave", (e) => {
   exp.innerHTML = "";
   hover3.style.transform = "scale(1)";
   hover3.style.zIndex = "1";
   hover3.style.backgroundColor = "";
});


hover4.addEventListener("mouseover", (e) => {
   ach.innerHTML = `<h5>S1:E5 &quot;Achievements&quot;</h5><br>
    ▪ Scholarship from CISCE (June 23)<br><br>
    ▪ Ranked 143/1318 in All India Coding Competition (April 22)<br><br>
    ▪ Letter of Recommendation from Mindler (Jan 24)`;
   hover4.style.transition = "transform 0.5s ease";
   hover4.style.transform = "scale(1.2)";
   hover4.style.zIndex = "10";
   hover4.style.position = "relative";
   hover4.style.backgroundColor = "black";
});

hover4.addEventListener("mouseleave", (e) => {
   ach.innerHTML = "";
   hover4.style.transform = "scale(1)";
   hover4.style.zIndex = "1";
   hover4.style.backgroundColor = "";
});


hover5.addEventListener("mouseover", (e) => {
   ski.innerHTML = `<h5>S1:E2 &quot;Skills&quot;</h5><br>
    Java, Python, C++, HTML, CSS, JavaScript<br>
    Front End Developer`;
   hover5.style.transition = "transform 0.5s ease";
   hover5.style.transform = "scale(1.2)";
   hover5.style.zIndex = "10";
   hover5.style.position = "relative";
   hover5.style.backgroundColor = "black";
});

hover5.addEventListener("mouseleave", (e) => {
   ski.innerHTML = "";
   hover5.style.transform = "scale(1)";
   hover5.style.zIndex = "1";
   hover5.style.backgroundColor = "";
});

header.addEventListener("mouseover", () => {
   arrow.style.display = "none";
});