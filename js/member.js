let currentDate = new Date();

// Dummy events for the year 2025
const eventsByYear = {
  2025: {
    4: {
      8: [
        {
          title: "Board Meeting",
          description: "Discuss church updates and finances.",
        },
        {
          title: "Youth Practice",
          description: "Practice for Sabbath special number.",
        },
      ],
    },
  },
};

function showCalendar(setting, element) {
  let content = {
    monthView: getMonthView(),
    weekView: getWeekView(),
    dayView: getDayView(),
  };

  let contentDiv = document.getElementById("calendarContent");
  contentDiv.classList.remove("show");

  setTimeout(() => {
    contentDiv.innerHTML = content[setting];
    contentDiv.classList.add("show");
  }, 300);

  document
    .querySelectorAll(".list-group-item")
    .forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
}

function getMonthView() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  let calendarHTML = '<div class="calendar-grid">';
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dayNames.forEach(
    (day) =>
      (calendarHTML += `<div class="calendar-day font-weight-bold">${day}</div>`)
  );

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarHTML += '<div class="calendar-cell border p-2 bg-light"></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();
    calendarHTML += `<div class="calendar-cell border p-2 ${
      isToday ? "bg-primary text-white" : ""
    }" onclick="showEvent(${day})">${day}</div>`;
  }

  calendarHTML += "</div>";

  return `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <button class="btn btn-outline-primary btn-sm" onclick="changeMonth('prev')"><i class="ti-arrow-left"></i></button>
            <h5 class="mb-0 font-weight-bold">${monthName} ${year}</h5>
            <button class="btn btn-outline-primary btn-sm" onclick="changeMonth('next')"><i class="ti-arrow-right"></i></button>
        </div>
        ${calendarHTML}
    `;
}

function getWeekView() {
  return `
        <h5 class="card-title"><i class="ti-calendar"></i> Week View</h5>
        <p class="card-text">Display week events here.</p>
    `;
}

function getDayView() {
  return `
        <h5 class="card-title"><i class="ti-calendar"></i> Day View</h5>
        <p class="card-text">Display day events here.</p>
    `;
}

function changeMonth(direction) {
  if (direction === "prev") {
    currentDate.setMonth(currentDate.getMonth() - 1);
  } else {
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  showCalendar(
    "monthView",
    document.querySelector('button[data-view="monthView"]')
  );
}

function showEvent(day) {
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const events = eventsByYear[year]?.[month]?.[day] || [];
  const eventListDiv = document.getElementById("eventList");

  if (events.length === 0) {
    eventListDiv.innerHTML = `<p>No events for ${day}/${month}/${year}</p>`;
    return;
  }

  let html = `<ul class="list-group">`;
  events.forEach((event, index) => {
    html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${event.title}</span>
                <button class="btn btn-sm btn-primary" onclick="viewEvent('${event.title}', '${event.description}')">View</button>
            </li>`;
  });
  html += `</ul>`;

  eventListDiv.innerHTML = html;
}

function viewEvent(title, description) {
  document.getElementById("eventModalLabel").textContent = title;
  document.getElementById("eventModalBody").innerHTML = `<p>${description}</p>`;
  $("#eventModal").modal("show");
}

document.addEventListener("DOMContentLoaded", () => {
  showCalendar(
    "monthView",
    document.querySelector('button[data-view="monthView"]')
  );
});

const userId = "Mikko Rance"; // dynamic user ID

$('#attendanceModal').on('shown.bs.modal', function () {
    const qrContainer = document.getElementById("generated-qr");
    qrContainer.innerHTML = "";

    // Use plain userId instead of encoded userId
    new QRCode(qrContainer, {
        text: userId,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
