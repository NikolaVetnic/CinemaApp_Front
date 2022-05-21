var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

export function getTravelDateTimeFormatted(str) {
    var d = new Date(str);
    var day = d.getDate();
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear().toString();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var dayName = daysNames[d.getDay()];

    return hours > 12
        ? dayName +
              " " +
              day +
              " " +
              month +
              " " +
              year +
              ", " +
              ((hours - 12 < 10 ? "0" : "") + (hours - 12)) +
              ":" +
              ((minutes < 10 ? "0" : "") + minutes) +
              " PM"
        : dayName +
              " " +
              month +
              " " +
              day +
              ", " +
              ((hours < 10 ? "0" : "") + hours) +
              ":" +
              ((minutes < 10 ? "0" : "") + minutes) +
              " AM";
}

export function getTravelDateFormatted(str) {
    var d = new Date(str);
    var day = d.getDate();
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear().toString();
    var dayName = daysNames[d.getDay()];

    return dayName + " " + day + " " + month + " " + year;
}
