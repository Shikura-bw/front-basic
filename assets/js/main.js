const dayOfWeek = [ "日", "月", "火", "水", "木", "金", "土" ]
let isShow = false;
let isShowModal = false;

window.onload = () => {
    windowHeight();
    datepicker('#datepicker__first');
    datepicker('#datepicker__second');
    datepicker('#datepicker__third');
    datepicker('#datepicker__fourth');
}

const windowHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--window-height', `${window.innerHeight}px`)
    doc.style.setProperty('--window-height', `${window.innerHeight}px`)
    doc.style.setProperty('--window-height', `${window.innerHeight}px`)
}

window.addEventListener('resize', windowHeight);

const datepicker = (datepickerId) => {
    const date = $(datepickerId);

    if (!datepicker) {
        return;
    }

    date.datepicker({
        dateFormat : 'yy.mm.dd',
        defaultDate: new Date(),
    });
    date.datepicker("setDate", new Date());
    $(".menubar__day").html(dayOfWeek[new Date().getDay()])

    $.datepicker.regional['ja'] = {
        closeText: "閉じる",
        prevText: "&#x3C;前",
        nextText: "次&#x3E;",
        currentText: "今日",
        monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月" ],
        monthNamesShort: [ "1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月" ],
        dayNames: [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ],
        dayNamesShort: dayOfWeek,
        dayNamesMin: dayOfWeek,
        weekHeader: "週",
        dateFormat: "yy/mm/dd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "年" 
    };
    $.datepicker.setDefaults($.datepicker.regional['ja']);

    date.datepicker().on("change", function() {
        $(".menubar__day").html(dayOfWeek[new Date(this.value.split('.').join('/')).getDay()])
    });
}

const isActive = (btnClass, className) => {
    const btnList = document.getElementsByClassName(btnClass)

    if (!btnList.length) {
        return;
    }

    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener("click", () =>  {
          const current = document.getElementsByClassName(className);

          if (current.length > 0) {
            current[0].className = current[0].className.replace(className, "");
          }
         
          btnList[i].className += ` ${className}`;
        });
    }
}

const toggleModal = (btnClass, btnClassActive, modalClass, modalClassActive) => {
    const btnList = document.getElementsByClassName(btnClass)

    if (!btnList.length) {
        return
    }

    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click',  () => {
            if (btnList[i].classList.contains(btnClassActive)) {
                btnList[i].classList.remove(btnClassActive)
                
            } else {
                btnList[i].classList.add(btnClassActive)
            } 

            for (let j = 0; j < btnList.length; j++) {
                if (j !== i && btnList[j].classList.contains(btnClassActive)) {
                    btnList[j].classList.remove(btnClassActive)
                } 
            }
            isShowModal = checkButtonActive(btnClass, btnClassActive)
            showModalForm(modalClass, modalClassActive, isShowModal, i);
        }) 
    }
}

const showModalForm = (modalClass, modalClassActive, isShowModal, index) => {
    const modalList = document.getElementsByClassName(modalClass)

    if (!isShowModal) {
        for (let i = 0; i < modalList.length; i++) {
            modalList[i].classList.remove(modalClassActive)
  
        } 
        return;
    }

    for (let i = 0; i < modalList.length; i++) {
        if (i === index) {
            modalList[i].classList.add(modalClassActive)
        } else {
            modalList[i].classList.remove(modalClassActive)
        }   
    } 
}

const closeModal = (btnId, btnClass, modalId, modalClass ) => {
    const modal = document.getElementById(modalId);
    const btnSubmit = document.getElementById(btnId);
    modal.classList.remove(modalClass)
    btnSubmit.classList.remove(btnClass)

}

const showForm = (btnId) => {
    const btn = document.getElementById(btnId)

    if (!btn) {
        return;
    }

    btn.addEventListener("click", () =>  {
        const current = document.getElementById("modal__form");

        if (current) {
          current.classList.toggle("modal__form--active")
        } 
    });
}

const changeDate = (btnId, datepickerId) => {
    const btn = document.getElementById(btnId)

    if (!btn) {
        return;
    }

    btn.addEventListener("click", () =>  {
        const now = $(datepickerId).datepicker().val()

        if (!now) {
            return
        }
    
        const timeNow = now ? now.split('.').join('/') : null
        const date = new Date(timeNow)
        const time = btnId === "btn__next" ? date.getTime() + (1000*60*60*24) : date.getTime() - (1000*60*60*24) 
        date.setTime(time)
        $(".menubar__day").html(dayOfWeek[new Date(date).getDay()])
        $(datepickerId).datepicker("setDate", date);
    });
}

const showPopUp = () => {
    const btn = document.getElementById("toggle__icon--up")
    const btnList = document.getElementsByClassName('toggle__icon')
    const modal = document.getElementsByClassName("toggle__btn")

    if (!btn) {
        return
    }

    btn.addEventListener("click", () =>  {
        const popUp = document.getElementById("modal__toggle")
        modal[1].classList.add("toggle__btn--small")
        modal[0].classList.remove("toggle__btn--margin")
        modal[0].classList.add("toggle__btn--background")

        if (popUp) {
            popUp.classList.add("animation-up")
            popUp.classList.remove("animation-down")
        }

        for (let i = 0; i < btnList.length; i++) {
            if (btnList[i].classList.contains('toggle__icon--active')) {
                btnList[i].classList.remove('toggle__icon--active')
            } else {
                btnList[i].classList.add('toggle__icon--active')
            }
        }
    });
}

const hiddenPopUp = () => {
    const btn = document.getElementById("toggle__icon--down")
    const btnList = document.getElementsByClassName('toggle__icon')
    const modal = document.getElementsByClassName("toggle__btn")

    if (!btn) {
        return
    }

    btn.addEventListener("click", () =>  {
        const popUp = document.getElementById("modal__toggle")
        modal[1].classList.remove("toggle__btn--small")
        modal[0].classList.add("toggle__btn--margin")
        modal[0].classList.remove("toggle__btn--background")

        if (popUp) {
            popUp.classList.add("animation-down")
            popUp.classList.remove("animation-up")
        }

        for (let i = 0; i < btnList.length; i++) {
            if (btnList[i].classList.contains('toggle__icon--active')) {
                btnList[i].classList.remove('toggle__icon--active')
              
            } else {
                btnList[i].classList.add('toggle__icon--active')
            } 
        }
    });
}

const activeButton = (btnClass, btnClassActive, modalClass, modalClassActive) => {
    const btnList = document.getElementsByClassName(btnClass)

    if (!btnList.length) {
        return
    }

    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click',  () => {
            if (btnList[i].classList.contains(btnClassActive)) {
                btnList[i].classList.remove(btnClassActive)
                
            } else {
                btnList[i].classList.add(btnClassActive)
            } 

            for (let j = 0; j < btnList.length; j++) {
                if (j !== i && btnList[j].classList.contains(btnClassActive)) {
                    btnList[j].classList.remove(btnClassActive)
                } 
            }
            isShow = checkButtonActive(btnClass, btnClassActive)
            showModal(modalClass, modalClassActive, isShow, i + 1);
        }) 
    }
}

const showModal = (modalClass, modalClassActive, isShow, index) => {
    const modalList = document.getElementsByClassName(modalClass)

    if (!isShow) {
        for (let i = 0; i < modalList.length; i++) {
             if (i !== 0) {
                modalList[i].classList.remove(modalClassActive)
            } else {
                modalList[i].classList.add(modalClassActive)
            }  
        }
        
        return;
    }

    for (let i = 0; i < modalList.length; i++) {
        if (i === index) {
            modalList[i].classList.add(modalClassActive)
        } else {
            modalList[i].classList.remove(modalClassActive)
        }   
    }
}


const checkButtonActive = (btnClass, btnClassActive) => {
    const btnList = document.getElementsByClassName(btnClass)

    for (let i = 0; i < btnList.length; i++) {
        if (btnList[i].classList.contains(btnClassActive)) {
            return true;
        }
    }

    return false;
}

const closeCalculator = (btnId, modalClass, modalClassActive, btnClass, btnClassActive) => {
    const btn = document.getElementById(btnId)
    const modalList = document.getElementsByClassName(modalClass);
    const btnList = document.getElementsByClassName(btnClass)

    if (btn) {
        btn.addEventListener('click',  () => {
            for (let i = 0; i < modalList.length; i++) {
                if (i === 0) {
                    modalList[i].classList.add(modalClassActive)
                } else {
                    modalList[i].classList.remove(modalClassActive)
                } 
            }
    
            for (let i = 0; i < btnList.length; i++) {
                btnList[i].classList.remove(btnClassActive)
            }
        }) 
    }
}

isActive('btn__primary', 'btn__primary--active');
isActive('btn__secondary', 'btn__secondary--active');
isActive('btn__third', 'btn__third--active');
isActive('modal__btn', 'modal__btn--active');
isActive('modal__check', 'modal__check--active');
isActive('section__option', 'section__option--active');
isActive('modal__block', 'modal__block--active');
toggleModal('btn__action--toggle', 'btn__primary--active', 'modal__toggle--primary',  'modal--show');
showForm('btn__show');
showForm('modal__btn');
changeDate('btn__next', '#datepicker__first')
changeDate('btn__prev', '#datepicker__first')
showPopUp();
hiddenPopUp();
activeButton('btn__toggle', 'input__money--active', 'section__toggle', 'section--active');
closeCalculator('btn__close--1', 'section__toggle', 'section--active', "btn__toggle", 'input__money--active')
closeCalculator("btn__close--2", "section__toggle", "section--active", "btn__toggle", 'input__money--active')