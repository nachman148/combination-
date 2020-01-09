import * as model from "./model.js";
import * as view from "./view.js";

var c = "נסה שוב";
var repeat;
var a = 0;
export function init() {
    view.createNumbers();
    $(".number").each(function (i) {
        $(this).click(e => {
            colors(i);
            code(fix(i));
        })
    })
}

function refresh() {
    clearTimeout(repeat);
}

function colors(i) {
    refresh();
    view.colorNumber(i);
    repeat = setTimeout(function () {
        model.threeSeconds();
        view.colorNumbers();
    }, 3000)
}

function fix(i) {
    if (i == 9) {
        i = 0;
    } else {
        i += 1;
    }
    console.log(i);
    return i;
}

async function code(i) {
    if (model.getcode2(i)) {
        var response = await model.CheckingCode();
        CheckingCode(response);
        clearTimeout(repeat);
    }
}

function CheckingCode(response) {
    if (model.CheckingCode1(response)) {
        homepage(response);
    } else {
        badCode();
    }
}

function homepage(response) {
    var rol = model.role(response);
    rol.toLowerCase;
    switch (rol) {
        case 1:
            boss(response);
            break
        case 2:
            manager(response);
            break
        case 3:
            view.client(response.Table[0].name);
            output();
    }
}

function boss(x) {
    view.createFrom();

    view.boss(x.Table[0].name);
    $('#addUser').on("submit", function (e) {
        e.preventDefault();
        alert("Was preventDefault() called: " + e.isDefaultPrevented());
        model.createUser(this)
    });

    output();
    $('.output').click(function () {
        init();
    })
}



function manager(x) {
    view.createFrom();
    view.manager(x.Table[0].name);
    output();
    
}

function output() {
    view.output();
    
}

function badCode() {
    a++;
    if (a == 3) {
        c = "המשטרה בדרך!!";
    }
    c += "!";
    view.getc(c);
    setTimeout(function () {
        view.badCode();
    }, 10)
}