var maleNames = {
  Sunday: 'Kwasi',
  Monday: 'Kwadwo',
  Tuesday: 'Kwabena',
  Wednesday: 'Kwaku',
  Thursday: 'Yaw',
  Friday: 'Kofi',
  Saturday: 'Kwame',
};
var femaleNames = {
  Sunday: 'Akosua',
  Monday: 'Adwoa',
  Tuesday: 'Abenaa',
  Wednesday: 'Akua',
  Thursday: 'Yaa',
  Friday: 'Afua',
  Saturday: 'Ama',
};
function validate() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender = document.getElementsByName("gender1");
    var i = 0;

   
  
    if (day == "" || day == null) {
      alert("Day is required");
    } else {
      if (!isNaN(day)) {
        if (day <= 0 || day > 31) {
          alert("Day is invalid");
        } else {
          alert(day);
        }
      } else {
        alert("Number required");
      }
    }
  
    if (month == "" || month == null) {
      alert("Month is empty");
    } else {
      if (!isNaN(month)) {
        if (month <= 0 || month > 12) {
          alert("Month is invalid");
          
        } else {
          alert(month);
        }
      } else {
        alert("Number required");
      }
    }
  
  
    if (year == "" || year == null) {
      alert("Year is empty");
    } else {
      if (!isNaN(year)) {
        if (year <= 0 || year > 2019) {
          alert("Year is invalid");
        } else {
          alert(year);
        }
      } else {
        alert("Number required");
      }
    }
   
    if(gender[0].checked===false && gender[1].checked ===false){
        alert("Select gender");
    } else {
        for(i=0;i<gender.length; i++){
            if(gender[i].checked){
                alert(gender[i].value);
            }
        }
    }
    function execute(){
      var a = validate();
      var DD = parseInt(a.userDate);
      var MM = parseInt(a.userMonth);
      var newYear = a.userYear;
      var YY = parseInt(newYear.slice(2,4));
      var CC = parseInt(newYear.slice(0,2));
      var newGender = a.userGender;
 //var weekDate = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
 // var a = (14 - month) / 12
                                        //calculating dday of the week
 // var y = year - a                         // https://www.mindstick.com/blog/387/calculating-day-of-the-week-for-any-date-in-javascript
 //var m = month + 12 * a - 2
 // var d = (day + y + y / 4 - y / 100 + y / 400 + (31 * m / 12) % 7
 var a = Math.floor((14 - MM) / 12);
 var y = newYear - a;
  var m = MM + 12 * a - 2;
  var dayOfTheWeek = (DD + y + Math.floor(y / 4) - Math.floor(y / 100) +
  Math.floor(newYear / 400) + Math.floor((31 * m) / 12)) % 7;
  console.log(dayOfTheWeek);
  var daysOfaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',       
          'Thursday', 'Friday', 'Saturday');
  
 var realDay = daysOfaweek[dayOfTheWeek];
 if (newGender === "male") {
 for (var name in maleNames) {
         if (maleNames.hasOwnProperty(name)) {
             if (name === realDay) {
                 document.getElementById('ans').innerHTML = maleNames[name];
                 document.getElementById('three').style.backgroundColor = "black";
                 document.getElementById('three').style.color = "white";
                 alert("Your Akan name is "+maleNames[name]);
             }
         }
     }
  }else if(newGender === "female") {
     for (var name in maleNames) {
             if (femaleNames.hasOwnProperty(name)) {
                 if (name === realDay) {
                     document.getElementById('ans').innerHTML = femaleNames[name];
                     document.getElementById('three').style.backgroundColor = "black";
                 document.getElementById('three').style.color = "white";
                     alert("Your Akan name is "+femaleNames[name]);
                 }
             }
         }
     
      }
 }
 Collapse
 
 
 
 

}
