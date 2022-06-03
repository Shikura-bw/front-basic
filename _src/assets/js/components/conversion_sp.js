/* ------------------------------------------- -/
   Conversion SP : Bottom Fix
/- ------------------------------------------- */

export default class ConversionSp {
    constructor() {

        this.headerCV = document.getElementById('target_cv');

        window.addEventListener('scroll', this._scrollIn = (event) => { // eslint-disable-line
            let viewportHeight = window.innerHeight;
            let targetTop = document.getElementById('target').getBoundingClientRect().top;
            if( targetTop <= viewportHeight + 100) {
                //console.log('scrollin!'); // do something
                this.headerCV.classList.add('is-none');
            } else {
                //console.log('scrollin!OUT'); // do somethi
                this.headerCV.classList.remove('is-none');
            }
        });

    }
}


