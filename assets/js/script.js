
window.addEventListener("load",function(){
    const body = document.body;
    const btn = document.getElementById('js-btn');
        if (!btn){ return false;}
        btn.addEventListener("click", () => {
        body.classList.toggle('nav-bar');
    });
});

function equalHeight(elements) {
    const target = Array.from(document.querySelectorAll(elements));
    const heightList = [];
    target.forEach(element => {
      const height = element.clientHeight;
      heightList.push(height);
    });
    const maxHeight = Math.max.apply(null,heightList);
    target.forEach(element => {
      element.style.height = maxHeight + 'px';
    });
  }
  if(!navigator.userAgent.match(/(iPhone|Android)/)){
    equalHeight('.js-height');
  }