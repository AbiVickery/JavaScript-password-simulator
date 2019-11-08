// document.write('Hello world!');

// Password must have at least 8 characters but no more than 20;
// Must contain at least one special charcter(!, @, #, $, %, &);
// Must contain at least one uppercase letter;
// Must contain at least one lowercase letter;
// Must contain at least one number;
// cannot contain spaces;

/* first, i start out with the psuedo code */
// a function for the box to enter the password into // targeting a div id from the html
// a function to tell if the password contains at least one special character(!, @, #, $, %, &)
// a function to tell if the password contains at least one uppercase letter
// a function to tell if the password contains at least one lowercase letter
// a function to tell if the passwrod contains at least one number
// a function to tell if the password contains zero spaces


// function pass() {
//     let yes = true;
//     let no = false;
//     if ()
// };

var code = document.getElementById('code');
code.addEventListener('keyup', checkcode);


var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var space = [' '];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_'];

function checkCode(code) {
    code = event.target.value ? event.target.value : code;

    let rules = (
        length: checkLength(code),
        char: checkChar(code),
        upper: checkUpperLower(code),
        lower: checkUpperLower(code, false),
        number: checkNumber(code),
        space: checkSpace(code)
    )
    // let tests = document.querySelectorAll('.test');

    return rules.length
           && rules.char
           && rules.upper
           && rules.lower
           && rules.number
           && rules.space;
}