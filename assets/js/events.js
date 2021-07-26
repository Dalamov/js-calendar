'use strict';

// editEvent = (event) => { }

// setEvent = (event) => { }

// deleteEvent = (event) => { }

const writeEventsOfTheDay = (day) => {

  //clear events of the day
  eventsDay.innerHTML = ``;

  if (!eventsNotes.length) return;

  //get the eventsNotes from localStorage
  eventsNotes = JSON.parse(localStorage.getItem('events'));

  //print every eventNote of the day selected
  eventsNotes.forEach(event => {

    let event__color = getEventTypeColor(event);

    if (day == event.startDate) {
      eventsDay.innerHTML += `
        <div class="event">
          <div class="event__content">
            <div class="event__color ${event__color}"></div>
            <p class="event__title">${event.title}</p>
            <p class="event__time">
              <span>${event.startTime}</span>
              <span> - </span>
              <span>${event.endTime}</span>
            </p>
            <p class="event__description">${event.description}</p>
            <label class="event__type">${event.type}</label>
          </div>
        </div>
      `;
    }
  });

  //print message alert if no events in the day selected
  if (eventsDay.innerHTML == ``) {
    eventsDay.innerHTML += `
      <div class="event">
        <p class="event__message event__message--alert">You have no events this day</p>
      </div>
    `;
  }
}

function renderEventNotes(todaysNotes, selectedDate) {
  eventsDay.innerHTML = ``
  todaysNotes.forEach(event => {
    let event__color = getEventTypeColor(event);

    if (selectedDate == event.startDate) {
      eventsDay.innerHTML += `
      <div class="event">
        <div class="event__content">
        <div class="event__color ${event__color}"></div>
          <p class="event__title">${event.title}</p>
          <p class="event__time">
            <span>${event.startTime}</span>
            <span> - </span>
            <span>${event.endTime}</span>
          </p>
          <p class="event__description">${event.description}</p>
          <label class="event__type">${event.type}</label>
        </div>
      </div>
    `;
    }
  });
}

function writeDayWeek(dateSelected) {

  //convert dateSelected string to date
  const targetDateArr = dateSelected.split("-");
  const targetYear = targetDateArr[0];
  const targetMonth = targetDateArr[1] - 1;
  const targetDay = targetDateArr[2];
  const targetDate = new Date(targetYear, targetMonth, targetDay);

  //convert 01 to friday
  const targetDayNumber = targetDate.getDay();
  const targetDayWeek = dayOfWeekAsString(targetDayNumber);

  //get the events title
  const eventTitle = document.querySelector('.events__title');

  //set the events title
  eventTitle.innerHTML = targetDayWeek + " " + targetDay;
}

const getEventTypeColor = (event) => {
  let event__color;

  switch (event.type) {
    case "Meeting":
      event__color = "bg--red";
      break;
    case "Call":
      event__color = "bg--blue";
      break;
    case "Coffee with":
      event__color = "bg--green";
      break;
    case "Peer helping":
      event__color = "bg--yellow";
      break;
    default:
      event__color = "bg--red";
      break;
  }

  return event__color;
}