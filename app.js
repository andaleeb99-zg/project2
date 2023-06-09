alert("hello")


let mystudents = ["ahmad" , "ali", "mustafa"]
let mystudentsmarks = [90, 50, 33]
function markscalculate(params) {


    for (let i = 0; i < mystudentsmarks.length; i++) {
        if (mystudentsmarks[i] <= 49) {
            console.log ("sorry " + mystudents[i] + "you scored " + mystudentsmarks[i] + " and you have failed ");
        }
else if ( mystudentsmarks [i] >= 50) {  console.log ( "congrats "  + mystudents[i] + " you scored " + mystudentsmarks[i] + " and you have passed ");}
    }
}

markscalculate();






