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


}
