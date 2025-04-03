import { isEmpty, dayValid, monthValid, yearValid } from "./index.js";
const getAge = document.querySelector('#getAgeButton');

getAge.addEventListener('click', (event) =>{
    event.preventDefault();

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    const dayInput = document.querySelector('#dayInput');
    const monthInput = document.querySelector('#monthInput');
    const yearInput = document.querySelector('#yearInput');
    let day = Number(dayInput.value);
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);

    const inputLabel = document.getElementsByTagName('label');
    const errorSpans = document.getElementsByTagName('span');

    const yearsValue = document.querySelector('#yearsValue');
    const monthsValue = document.querySelector('#monthsValue');
    const daysValue = document.querySelector('#daysValue');

    if (isEmpty(day, month, year)){
        errorSpans[0].classList.remove('hidden');
        errorSpans[2].classList.remove('hidden');
        errorSpans[4].classList.remove('hidden');
        inputLabel[0].classList.add('text-red-400');
        inputLabel[1].classList.add('text-red-400');
        inputLabel[2].classList.add('text-red-400');
        dayInput.classList.add('border-red-400');
        monthInput.classList.add('border-red-400');
        yearInput.classList.add('border-red-400');

        yearsValue.innerHTML = '- -'
        monthsValue.innerHTML = '- -'
        daysValue.innerHTML = '- -'
    } else {
        if (!yearValid(year, currentYear)){
            errorSpans[5].classList.remove('hidden');
            yearInput.classList.add('border-red-400');
            inputLabel[2].classList.add('text-red-400');
        }  

        if (!monthValid(month)){
            errorSpans[3].classList.remove('hidden');
            monthInput.classList.add('border-red-400');
            inputLabel[1].classList.add('text-red-400');
        } 

        if (!dayValid(day, month, year)){
            errorSpans[1].classList.remove('hidden');
            dayInput.classList.add('border-red-400');
            inputLabel[0].classList.add('text-red-400');
        }

        yearsValue.innerHTML = '- -'
        monthsValue.innerHTML = '- -'
        daysValue.innerHTML = '- -'
    }

    if (!isEmpty(day, month, year) && yearValid(year, currentYear) && monthValid(month) && dayValid(day, month, year)){
        errorSpans[0].classList.add('hidden');
        errorSpans[1].classList.add('hidden');
        errorSpans[2].classList.add('hidden');
        errorSpans[3].classList.add('hidden');
        errorSpans[4].classList.add('hidden');
        errorSpans[5].classList.add('hidden');
        inputLabel[0].classList.remove('text-red-400');
        inputLabel[1].classList.remove('text-red-400');
        inputLabel[2].classList.remove('text-red-400');
        dayInput.classList.remove('border-red-400');
        monthInput.classList.remove('border-red-400');
        yearInput.classList.remove('border-red-400');
        let monthsCalc = currentMonth - (month - 1);
        let yearsCalc = currentYear - year;
        let daysCalc = currentDay - day;
          
        if (daysCalc < 0) {
          const diasMesAnterior = new Date(currentYear, currentMonth, 0).getDate();
          daysCalc += diasMesAnterior;
          monthsCalc--;
        }
        if (monthsCalc < 0) {
          monthsCalc += 12;
          yearsCalc--;
        }
        yearsValue.innerHTML = yearsCalc;
        monthsValue.innerHTML = monthsCalc;
        daysValue.innerHTML = daysCalc;
    }  
});