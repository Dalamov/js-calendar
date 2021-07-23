'use strict';

const writeMonth = (month) => {

    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += ` <div class="calendar__date calendar__prev">${getTotalDays(currentMonth - 1) - (i - 1)}</div>`;
    }

    for (let day = 1; day <= getTotalDays(month); day++) {

        let dayId = day + 1;
        (day <= 9) ? (dayId = "0" + day) : dayId = day;

        let monthId = month + 1;
        (month <= 9) ? (monthId = "0" + monthId) : null;

        if (day === currentDay && todayMonth === currentMonth && todayYear === currentYear) {
            dates.innerHTML += `
                <button class="calendar__date calendar__today btn btn--modal" data-id="${currentYear}-${monthId}-${dayId}">
                    ${day}
                </button>
            `;
        } else {
            dates.innerHTML += `
                <button class="calendar__date btn btn--modal" data-id="${currentYear}-${monthId}-${dayId}">
                    ${day}
                </button>
            `;
        }
    }
}

const getTotalDays = month => {
    if (month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {
        return isLeap() ? 29 : 28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, currentMonth, 1);
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
}

const goToPrevMonth = () => {
    if (currentMonth !== 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }

    setNewDate();
}

const goToNextMonth = () => {
    if (currentMonth !== 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear, currentMonth, currentDay);
    month.textContent = monthNames[currentMonth];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(currentMonth);
}