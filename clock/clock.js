const hour=document.getElementById("clock_hour");
let minutes= document.getElementById("clock_minutes");
let seconds= document.getElementById("clock_seconds");

let clock = () =>{
   let date=new Date();
   let hh =date.getHours() *30;
   let mm=date.getMinutes() *6;
   let ss=date.getSeconds() *6;

   hour.style.transform=`rotateZ(${hh + mm /12}deg)`;
   minutes.style.transform= `rotateZ(${mm}deg)`;
   seconds.style.transform= `rotateZ(${ss}deg)`;
}

setInterval(clock,1000);


let textHour=document.getElementById('text-hour');
let textMinutes=document.getElementById('text-minutes');
let textAPm=document.getElementById('text-ampm');
let dateDay=document.getElementById('date-day');
let dateManth=document.getElementById('date-month');
let dateYear=document.getElementById('date-year');

let clockText =() =>{
   let date=new Date();
   let hh=date.getHours();
   let ampm;
   let mm=date.getMinutes();
   let ss=date.getSeconds();
   let day=date.getDate();
   let month=date.getMonth();
   let year=date.getFullYear();

// show hours
   if(hh>=12){
      hh=hh-12;
      ampm='PM';
   }
   else{
      ampm='AM';
   }
   if(hh==0){
      hh=12;
   }
   if(hh<10){
      hh=`0${hh}`;
   }
   textHour.innerHTML=`${hh}:`;

   // show minutes
   if(mm<10){
      mm=`0${mm}`
   }
   textMinutes.innerHTML=mm;


   // show ampm
   textAPm.innerHTML=ampm;

   // get months,year
   let months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// show day
dateDay.innerHTML=day;
dateManth.innerHTML=`${months[month]}`;
dateYear.innerHTML=year;
}
setInterval(clockText,1000);


