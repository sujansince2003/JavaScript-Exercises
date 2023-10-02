var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const btn=document.querySelector(".btn");
const para=document.querySelector(".para");

btn.addEventListener("click",function(e)
                    {
  e.preventDefault();
  showdate();
})

function showdate()

{
 const today=new Date();
  const month=today.getMonth()+1;
  const monthname=months[month-1];
  
  const day=today.getDate();
  const dayname=days[day-1]
  
  const year=today.getFullYear();
  para.textContent=`Current date is ${year}-${month}-${day} Day:${dayname} Month: ${monthname}`
  console.log(month,day,year,monthname,dayname)
}
