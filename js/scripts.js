var maleAkan = {
  Sunday: 'Kwasi',
  Monday: 'Kwadwo',
  Tuesday: 'Kwabena',
  Wednesday: 'Kwaku',
  Thursday: 'Yaw',
  Friday: 'Kofi',
  Saturday: 'Kwame',
};
var femaleAkan = {
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
                var gend = gender[i].value;
                //return gend;
                console.log(gend);
              
                }
               
        }
    
  }
}
  

    function myFunction(){
      var valid = validate();
      var d = parseInt(valid.mDay);
      var m = parseInt(valid.mMonth);
      var year = valid.mYear;
      var gender = valid.mGender;
 
//  var a = Math.floor((14 - m) / 12);
//  var y = year - a;
//   var m = m + 12 * a - 2;
//   var dayOfTheWeek = (d + y + Math.floor(y / 4) - Math.floor(y / 100) +
//   Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
//   console.log(dayOfTheWeek);
//   var daysOfaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',       
//           'Thursday', 'Friday', 'Saturday');
  
//  var myDay = daysOfaweek[dayOfTheWeek];
//  if (gender === male) {
//  for (var k in maleAkan) {
//          if (maleAkan.hasOwnProperty(k)) {
//              if (k === myDay) {
                 
//                  alert("Bingo! Your Akan name is "+maleAkan[k]);
//              }
//          }
//      }
//   }else if(gender === female) {
//      for (var k in femaleAkan) {
//              if (femaleAkan.hasOwnProperty(k)) {
//                  if (k === myDay){
//                      alert("Bingo! Your Akan name is "+femaleAkan[k]);
//                  }
//              }
//          }
     
//       }
    }
