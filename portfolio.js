const ed=document.querySelector('.ed');
const pr=document.querySelector('.pr');
const ex=document.querySelector('.ex');

const edu=document.querySelector('.i1');
const pro=document.querySelector('.i2');
const exp=document.querySelector('.i3');

const hover1=document.querySelector('.hover1');
const hover2=document.querySelector('.hover2');
const hover3=document.querySelector('.hover3');

hover1.addEventListener("mouseover", (e)=>{
   edu.innerHTML="<li><b>City Montessori School</b></li> <p>Scored <i> 97.83% </i> in 12th ISC Board</p>  <br><li><b>Vellore Institute Of Technology</b></li> <p>Bachelor of Technology - Computer Science and Engineering; <i>GPA: 9.22</i></p> ";
   // hover1.style.width = '500px';
   // hover1.style.height = '400px';
   // ed.style.width = '500px';
   // ed.style.height = '300px';
   // edu.style.width = '500px';
   // edu.style.height = '300px';
   // hover1.style.margin = '3px';
   hover1.style.transition = "transform 0.5s ease";
   hover1.style.transform = "scale(1.3)";
});
hover1.addEventListener("mouseout", (e)=>{
   // hover1.style.width = '300px';
   // hover1.style.height = '200px';
   // ed.style.width = '300px';
   // ed.style.height = '200px';
   // edu.style.width = '300px';
   // edu.style.height = '200px';
   // hover1.style.margin = '3px';
   hover1.style.transition = "transform 0.5s ease";
   hover1.style.transform = "scale(1)";
   edu.innerHTML="";
});

hover2.addEventListener("mouseover", (e)=>{
   pro.innerHTML=" <li><b>Currency Converter </b> (Web Development)</li> <p>Converts USD to different currencies using API. Tech: HTML, CSS, JavaScript (June '24)<br></p> <br><li><b>Rock Paper Scissor Game </b> (Web Development)</li> <p>Created from scratch a game played with hands in our childhood Tech: HTML, CSS, JavaScript (June '24)</p> ";
   hover2.style.width = '500px';
   hover2.style.height = '400px';
   pr.style.width = '500px';
   pr.style.height = '300px';
   pro.style.width = '500px';
   pro.style.height = '300px';
   hover2.style.margin = '3px';
 });
hover2.addEventListener("mouseout", (e)=>{
   pro.innerHTML="";
   hover2.style.width = '300px';
   hover2.style.height = '200px';
   pr.style.width = '300px';
   pr.style.height = '200px';
   pro.style.width = '300px';
   pro.style.height = '200px';
   hover2.style.margin = '3px';
});

hover3.addEventListener("mouseover", (e)=>{
   exp.innerHTML="<li><b>CodSoft Internship</b><i> (Remote: January 2024- Februray 2024) </i></li> <p>Tech: Completed 5 assigned tasks, including a Random Number Guessing Game, Marks Calculator, and ATM Interface, with 3 tasks being mandatory. Gained hands-on experience and deepened understanding of core Java concepts. </p> ";
   hover3.style.width = '500px';
   hover3.style.height = '400px';
   ex.style.width = '500px';
   ex.style.height = '300px';
   exp.style.width = '500px';
   exp.style.height = '300px';
   hover3.style.margin = '3px';
 });
hover3.addEventListener("mouseout", (e)=>{
   exp.innerHTML="";
   hover3.style.width = '300px';
   hover3.style.height = '200px';
   ex.style.width = '300px';
   ex.style.height = '200px';
   exp.style.width = '300px';
   exp.style.height = '200px';
   hover3.style.margin = '3px';
});