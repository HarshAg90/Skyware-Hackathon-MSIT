document.querySelector("#login-button").addEventListener("click",function(){
    document.querySelector("#login").classList.toggle("on");
});
document.querySelector("#login-back-btn").addEventListener("click",function(){
    document.querySelector("#login").classList.toggle("on");
});

function login_signup_render_show(){
    document.querySelector(".login-page").style.display = "none !important";
}