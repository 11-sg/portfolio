const ed=document.querySelector('.ed');
const pr=document.querySelector('.pr');
const ex=document.querySelector('.ex');
const ac=document.querySelector('.ac');
const sk=document.querySelector('.sk');

const edu=document.querySelector('.i1');
const pro=document.querySelector('.i2');
const exp=document.querySelector('.i3');
const ach=document.querySelector('.i4');
const ski=document.querySelector('.i5');

const content=document.querySelector('.content');

const hover1=document.querySelector('.hover1');
const hover2=document.querySelector('.hover2');
const hover3=document.querySelector('.hover3');
const hover4=document.querySelector('.hover4');
const hover5=document.querySelector('.hover5');

hover1.addEventListener("mouseover", (e)=>{
   edu.innerHTML="<h5>S1:E1 &quot;Education&quot;</h5>  <br><li><b>City Montessori School</b></li> <p>Scored <i> 97.83% </i> in 12th ISC Board</p>  <br><li><b>Vellore Institute Of Technology</b></li> <p>Bachelor of Technology - Computer Science and Engineering; <i>GPA: 9.22</i></p> ";
   hover1.style.transition = "transform 0.5s ease";
   hover1.style.transform = "scale(1.3)";
   edu.style.backgroundColor = "black";
   // hover1.style.transitionDelay= "0.1s";
});

hover2.addEventListener("mouseover", (e)=>{
   pro.innerHTML="<h5>S1:E3 &quot;Projects&quot;</h5> <br> <li><b>Currency Converter </b> (Web Development)</li> <p>Converts USD to different currencies using API. Tech: HTML, CSS, JavaScript (June '24)<br></p> <br><li><b>Rock Paper Scissor Game </b> (Web Development)</li> <p>Created from scratch a game played with hands in our childhood Tech: HTML, CSS, JavaScript (June '24)</p> ";
   hover2.style.transition = "transform 0.5s ease";
   hover2.style.transform = "scale(1.3)";
   pro.style.backgroundColor = "black";
 });


hover3.addEventListener("mouseover", (e)=>{
   exp.innerHTML=" <h5>S1:E4 &quot;Experience&quot;</h5>  <br><li><b>CodSoft Internship</b><i> (Remote: January 2024- Februray 2024) </i></li> <p>Tech: Completed 5 assigned tasks, including a Random Number Guessing Game, Marks Calculator, and ATM Interface, with 3 tasks being mandatory. Gained hands-on experience and deepened understanding of core Java concepts. </p> ";
   hover3.style.transition = "transform 0.5s ease";
   hover3.style.transform = "scale(1.3)";
   exp.style.backgroundColor = "black";
 });

hover4.addEventListener("mouseover", (e)=>{
   ach.innerHTML="<h5>S1:E5 &quot;Achievements&quot;</h5>  <br><p>▪ Awarded a scholarship by the Council for the Indian School Certificate Examinations (June 23)<br><br>▪ Achieved a rank of 143 out of 1,318 participants in the All India Coding Competitions (April 22)<br><br>▪ Received a Letter of Recommendation from Mindler (Jan 24) </p>";
   hover4.style.transition = "transform 0.5s ease";
   hover4.style.transform = "scale(1.3)";
   ach.style.backgroundColor = "black";
 });

hover5.addEventListener("mouseover", (e)=>{
   ski.innerHTML="<h5>S1:E2 &quot;Skills&quot;</h5><br><p> Java <br> Python <br> C++ <br> HTML CSS Javascript <br> </p>";
   hover5.style.transition = "transform 0.5s ease";
   hover5.style.transform = "scale(1.3)";
   ski.style.backgroundColor = "black";
 });



 content.addEventListener("mouseout", (e)=>{
   edu.innerHTML="";
   hover1.style.transition = "transform 0.5s ease";
   hover1.style.transform = "scale(1)";
});
content.addEventListener("mouseout", (e)=>{
   pro.innerHTML="";
   hover2.style.transition = "transform 0.5s ease";
   hover2.style.transform = "scale(1)";
});
content.addEventListener("mouseout", (e)=>{
   exp.innerHTML="";
   hover3.style.transition = "transform 0.5s ease";
   hover3.style.transform = "scale(1)";
});
content.addEventListener("mouseout", (e)=>{
   ach.innerHTML="";
   hover4.style.transition = "transform 0.5s ease";
   hover4.style.transform = "scale(1)";
});
content.addEventListener("mouseout", (e)=>{
   ski.innerHTML="";
   hover5.style.transition = "transform 0.5s ease";
   hover5.style.transform = "scale(1)";
});