let lightmode = document.getElementById('btn1')
let darkmode = document.getElementById('btn')
let search = document.getElementById('srch')
lightmode.onclick= function(){
    document.body.style.backgroundColor=('#888282')
}
function appl(color){
document.body.style.backgroundColor= color
}
darkmode.onclick = function(){
    let color='#000000'
    appl(color)
    localStorage.getItem('mycolor',color)
}
window.onload = function(){
   let saved = localStorage.getItem('mycolor')
    if(saved){
         appl(saved)
    }
}
search.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        let srk = search.value.toLowerCase();
        if (srk==="about"){
            window.location.href="aboutme.html"
        }
        else if(srk==="acc"){
          window.location.href="acc.html"
        }
        else if(srk==="my project"){
          window.location.href="myproject.html"
        }
        else{
            alert("not founded")
        }
    }

})
setInterval(()=>{
    let now = new Date()
 let datetime = now.toLocaleDateString()+"  "+ "   "+now.toLocaleTimeString()
 document.getElementById('myclock').innerText = datetime
},1000);
