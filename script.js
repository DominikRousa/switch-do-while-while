let number = 1

function showMonth(){
    let month = ""
    const input = parseInt(document.getElementById('monthInp').value)

    switch(input){
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    document.getElementById('monthOut').innerHTML = "Month: " + month
}

function showEven(){
    while ( number <= 20 ){ 
        if( (number % 2) == 0 ) 
        { 
            console.log(number); 
        } 
        number++; 
    }
} 



function showDay(){
    let day = ""
    const input = parseInt(document.getElementById('dayInp').value)

    switch(input){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            document.getElementById('dayOut').innerHTML = "Neplatný den";
    }

    if(day != ""){
        document.getElementById('dayOut').innerHTML = "Day: " + day
    }
}

function login() {

    let text = "";

    do{
        let person = prompt("Please enter password:", "");
        if (person == null || person == "") {
          text = "User cancelled the prompt.";
        } else {
          text = person;
        }
    } while ( text != "javascript" )
}

function fibonacci(){
    let i = 0;
	var j = 0, k = 1, l;
    console.log("První desítka čísel je");
	while (i <= 10){
        console.log(j);
        l = j+k;
        j = k;
        k = l;
        i++
    }
}

function checkNumber () {

    let text = "";
    let count = 0

    do{
        let person = prompt("Please enter password:", "");
        if (person == null || person == "") {
          text = "User cancelled the prompt.";
        } else {
          text = person;
          count = count + parseInt(text)
        }
    } while ( text != "0" ){
        console.log(count);
    }
}