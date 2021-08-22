var month;
function getName(message = "Please enter your name") {
    let name = prompt(message);
    name = name.trim();
    if (name) {
        document.getElementById("name").innerHTML =
            "Hello " + name + "!";
        getPassword();
    } else {
        getName("Please enter your correct name !");
    }
}

function getPassword() {
    let pass = prompt("Enter your correct password");
    let check = false;
    if (pass == '123') {
        check = true;
    } else {
        for (var i = 0; i < 2; i++) {
            if (pass == '123') {
                check = true;
                break;
            } else {
                pass = prompt("Enter your correct password again");
                if (pass == '123') {
                    check = true;
                }
            }
        }
    }
    if (check == false) alert("you enter your wrong password 3 times.")
    
    if (check) {
        getMonth();
    }

}


function getMonth() {
    month = prompt("Enter your Birth Month");
    if (!month || isNaN(month) || (month < 0 && month > 12)) {
        getMonth();
    }
    getHoroscope();
}

function getHoroscope() {
    let zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

    let day = prompt("Enter your Birth Day");
    if (!day || isNaN(day) || (day < 0 && day > 30)) {
        getHoroscope();
    }
    else {
        console.log("day = ", day, " month = ", month)
        let yourZodiac = "";
        if (month == 12) {
            if (day < 22) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 1) {
            if (day < 20) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 2) {
            if (day < 19) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 3) {
            if (day < 21) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }
        else if (month == 4) {
            if (day < 20) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 5) {
            if (day < 21) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 6) {
            if (day < 21) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 7) {
            if (day < 23) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }
        else if (month == 8) {
            if (day < 23) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 9) {
            if (day < 23) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        else if (month == 10) {
            if (day < 23) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }
        else if (month == 11) {
            if (day < 22) yourZodiac = zodiac[month - 1];
            else yourZodiac = zodiac[month];
        }

        alert("Your horoscope is : " + yourZodiac);
        document.getElementById("end").innerHTML = "Thanks!";

    }
}