function createFrom() {
    $('#main').html('<input type="text" minlength="4"  maxlength = "4"  id="code1"> <button id="submit"> הגדר </button>')
}

var toAppend = "";
var i = 1;

function createNumbers() {
    for (i = 1; i < 11; i++) {
        if (i == 10) {
            toAppend += `<div class="number"> 0 </div>`;
            break
        }
        toAppend += `<div class="number"> ${i} </div>`;
    }
    $('#main').html(`<div id="numbers"> ${toAppend} </div>`)
    toAppend = "";
}



function colorNumber(i) {
    document.querySelectorAll('.number')[i].style.background = 'rgba(255, 127, 80, 0.5)';
}

function colorNumbers() {
    var i = 0;
    for (i = 0; i < 10; i++) {
        document.querySelectorAll(".number")[i].style.background = 'rgba(255, 127, 80)';
    }
}

var d = "";

function getc(c) {
    d = c;
}

function badCode() {
    alert("קוד שגוי, " + d);
    colorNumbers();
}


function boss(name) {
    $('#main').html($('#main').html() + `<h1>  ברוך הבא ${name} </h1>  
    <form id="addUser">
    <input type="text" name="fname" placeholder="שם פרטי">
    <input type="password" name="password"  placeholder="סיסמה">
    <select name="role">
    <option> דרגה</option>
    <option value="1"> בוס</option>
    <option value="2"> מנהל</option>
    <option value="3"> שחקן</option></select>
    <input type="submit" value="שלח" >
    </form>`);
}

function manager(name) {
    $('#main').html($('#main').html() + ` <h1>  ברוך הבא ${name} </h1>`);
}

function client(name) {
    $('#main').html(` <h1>  ברוך הבא ${name}  </h1>`);
}

function output() {
    $('#main').html($('#main').html() + `  <button class="output"> יציאה </button>`)
}


export {
    createFrom,
    createNumbers,
    colorNumber,
    colorNumbers,
    getc,
    badCode,
    boss,
    manager,
    client,
    output
}