
window.addEventListener("load",function(){
    const body = document.body;
    const btn = document.getElementById('js-btn');
        if (!btn){ return false;}
        btn.addEventListener("click", () => {
        body.classList.toggle('nav-bar');
    });
});
