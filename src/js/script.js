import clas from '../modules/class.js'
import form from '../modules/form.js'
import loader from '../modules/loader.js'
import modal from '../modules/modal.js'
import slider from '../modules/slider.js'
import tab from '../modules/tab.js'
import timer from '../modules/timer.js'
import { openModal } from '../modules/modal.js'

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModal('.modal', modalTimerId),
        50000
    )

    clas()
    form('form', modalTimerId)
    loader()
    modal('[data-modal]', '.modal', modalTimerId)
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    })
    tab(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        'tabheader__item_active'
    )
    timer('.timer', '2023-11-11')
})
