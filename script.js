let hourEle=document.getElementById("hour")
let minEle=document.getElementById("min")
let secEle=document.getElementById("sec")
let ampm=document.getElementById("ampm")
console.log(ampm)
setInterval(()=>{
    let date=new Date
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    hourEle.innerHTML=`${hour<10?'0'+hour:hour}`
    minEle.innerHTML=`${min<10?'0'+min:min}`
    secEle.innerHTML=`${sec<10?'0'+sec:sec}`
    ampm.innerHTML=`${ampm}`
    
})
