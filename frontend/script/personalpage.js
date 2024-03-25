document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    firstDay: 1,
    slotMinTime: "07:00:00",
    slotMaxTime: "20:15:00",
    slotDuration: "00:15:00",
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth'
    },
     // Din konfiguration
     eventClick: function(info) {
      // Uppdatera modalen med information från evenemanget
      document.getElementById('modalTitle').textContent = info.event.title;
      document.getElementById('modalDescription').textContent = 'Mer information här...';
      
      // Visa modalen
      document.getElementById('eventModal').style.display = 'block';

      
    },
    events: generateEvents(),
    eventContent: function(arg) {
      var titleElement = document.createElement('div');
      titleElement.innerHTML = `<b>${arg.event.title}</b>`;
      titleElement.style.fontSize = '16px'; 

      var idElement = document.createElement('div');
      idElement.innerHTML = `ID: ${arg.event.id}`;
      idElement.style.fontSize = '10px';

      var arrayOfDomNodes = [ titleElement, idElement ];
      return { domNodes: arrayOfDomNodes };
    },
    eventDidMount: function(arg) {
      // Här antar vi att du har en funktion som hämtar antalet bokningar för ett pass
      // För demonstration använder vi en slumpfunktion
      let isFull = Math.max() >= 20; // Byt ut detta mot din egen kontroll
      arg.el.style.backgroundColor = isFull ? 'red' : 'green';
    }
  });

  calendar.render();
});

// Hantera att stänga modalen
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('eventModal').style.display = 'none';
});

// Stäng modalen om användaren klickar utanför den
window.addEventListener('click', function(event) {
  var modal = document.getElementById('eventModal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
});


function generateEvents() {
  let events = [];
  let eventTypes = [
    { title: 'Yoga', startHour: 7, endHour: 8, endMinute: 30  },
    { title: 'Yoga', startHour: 8, startMinute: 30, endHour: 10, endMinute: 0  },
    { title: 'Yoga', startHour: 10, endHour: 11, endMinute: 30  },
    { title: 'Gruppträning', startHour: 11, startMinute: 30,  endHour: 13, endMinute: 0  },
    { title: 'Gruppträning', startHour: 13, endHour: 14, endMinute: 30  },
    { title: 'Gruppträning', startHour: 14, startMinute: 30, endHour: 16, endMinute: 0  },
    { title: 'Tabata', startHour: 16, startMinute: 0, endHour: 17, endMinute: 0  },
    { title: 'Tabata', startHour: 17, startMinute: 0, endHour: 18, endMinute: 0  },
    { title: 'Spinning', startHour: 18, startMinute: 0, endHour: 19, endMinute: 0  },
    { title: 'Spinning', startHour: 19, startMinute: 0, endHour: 20, endMinute: 0  },
  ];

  let startDate = new Date(); // Börja från dagens datum
  let daysToAdd = 7;
  let eventIdCounter = 1; 

  for (let day = 0; day < daysToAdd; day++) {
    let date = new Date();
    date.setDate(startDate.getDate() + day);

    eventTypes.forEach((eventType) => {
      let start = new Date(date);
      start.setHours(eventType.startHour, eventType.startMinute || 0, 0);

      let end = new Date(date);
      end.setHours(eventType.endHour, eventType.endMinute || 0, 0);

      events.push({
        id: `event-${eventIdCounter++}`,
        title: eventType.title,
        start: start,
        end: end
      });
    });
  }

  return events;
}
