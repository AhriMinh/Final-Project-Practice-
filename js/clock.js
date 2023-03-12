function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  
    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  };
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);



// Lấy đối tượng HTML của câu hỏi
const question = document.getElementById("question");

// Thiết lập múi giờ cho Việt Nam
const vietnamTimezoneOffset = 7;

// Lấy thời gian hiện tại ở Việt Nam
const nowInVietnam = new Date(new Date().getTime() + (vietnamTimezoneOffset * 60 * 60));

// Kiểm tra thời gian hiện tại thuộc khung giờ nào trong ngày
let timeOfDay;
if (nowInVietnam.getHours() < 12) {
  timeOfDay = "Sáng nay";
} else if (nowInVietnam.getHours() < 17) {
  timeOfDay = "Trưa nay";
} else if (nowInVietnam.getHours() < 20) {
  timeOfDay = "Chiều nay";
} else {
  timeOfDay = "Tối nay";
}

console.log(nowInVietnam.getHours());

// Thiết lập câu hỏi
question.innerText = `${timeOfDay} ăn gì?`;