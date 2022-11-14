document.querySelector("#login-button").addEventListener("click",function(){
    document.querySelector("#login").classList.toggle("on");
});
document.querySelector("#login-back-btn").addEventListener("click",function(){
    document.querySelector("#login").classList.toggle("on");
});
document.querySelector("#signup-back-btn").addEventListener("click",function(){
    document.querySelector("#signup").classList.toggle("on");
});
document.querySelector("#signup-btn").addEventListener("click",function(){
    document.querySelector("#signup").classList.toggle("on");
    document.querySelector("#login").classList.toggle("on");
});
document.querySelector("#login-btn").addEventListener("click",function(){
    document.querySelector("#signup").classList.toggle("on");
    document.querySelector("#login").classList.toggle("on");
});


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el))