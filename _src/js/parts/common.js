export default class FadeIn {
    constructor() {
        fadeIn = () => {
            window.addEventListener('scroll', (event) => {
            const scrollY = window.pageYOffset;
            const ele = document.getElementById("anc");
            const target = 200;
            if (target < scrollY) {
                ele.classList.add("active")
                } else {
                ele.classList.remove("active")
                }
            })
        }
        fadeIn();
    }
}