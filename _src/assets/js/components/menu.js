/* ------------------------------------------- -/
   Global Navigation SP : Hamburger Menu
/- ------------------------------------------- */

export default class Menu {
    constructor() {
        this.ttl = document.querySelector('.cmp-header_ttl');
        this.btn = document.querySelector('.cmp-header_ttl_btn');
        this.menu = document.querySelector('.cmp-header_gnavi');
        this.content = document.querySelector('.cmp-header_gnavi_menu');
        this.html = document.querySelector('html');

        this.btn.addEventListener('click', this.toggleMenu.bind(this));
        this.menu.addEventListener('click', this.toggleMenu.bind(this));
    }

    /* Menu Class */
    toggleMenu() {
        if (this.menu.classList.contains('is-active')) {
            this.ttl.classList.remove('is-active');
            this.btn.classList.remove('is-active');
            this.menu.classList.remove('is-active');
            this.content.classList.remove('is-active');
            this.html.classList.remove('is-fix');

        } else {
            this.ttl.classList.add('is-active');
            this.menu.classList.add('is-active');
            this.content.classList.add('is-active');
            this.html.classList.add('is-fix');
        }
    }
}


