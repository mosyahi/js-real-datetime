function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    const daysOfWeek = [
      "Ahad",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
      ];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const shortMonths = [
      "Januari",
      "Februai",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
      ];
    const month = shortMonths[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridian}`;
    const dateString = `${dayOfWeek}, ${day} ${month} ${year}`;

    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);