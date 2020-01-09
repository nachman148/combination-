var code2 = "";
var a = 0;



function getcode2(i) {
    var Check2 = false;
    a++;
    code2 += i;
    if (a == 4) {
        a = 0;
        Check2 = true;
        console.log(code2);
    }
    return Check2;
}


async function CheckingCode() {
    var response = null;
    var settings = {
        "url": "https://loghn-test-a2f043.appdrag.site/api/login",
        "data": {
            "password": code2,
            "AD_PageNbr": "1",
            "AD_PageSize": "500"
        },
        "method": "POST",
        "async": true,
        "crossDomain": true,
        "processData": true
    };
    response = await $.ajax(settings)
    code2 = "";
    return response
}

function threeSeconds() {
    a = 0;
    code2 = "";
}

function CheckingCode1(response) {
    var Check = false;
    if (response.Table.length != 0) {
        Check = true;
    }
    return Check
}

function role(response) {
    var id = response.Table[0].rol_id;
    return id
}

function createUser(x) {
    var formData = new FormData(x);
    var arr = [];
    for (const input of formData.entries()) {
        arr.push(input[1])
    }
    var settings = {
        "url": "https://loghn-test-a2f043.appdrag.site/api/combination/Adding a user",
        "data": {
            "name": arr[0],
            "password": arr[1],
            "rol_id": arr[2]
        },
        "method": "POST",
        "async": true,
        "crossDomain": true,
        "processData": true
    };
    $.ajax(settings).done(function (response) {
        console.log(response); // TODO: Do something with the result
    });
    console.log(arr);
}
export {
    getcode2,
    CheckingCode,
    threeSeconds,
    CheckingCode1,
    role,
    createUser
}




// var settings = {
//     "url": "https://loghn-test-a2f043.appdrag.site/api/combination/Adding a user",
//     "data": {
//         "name" : arr[0],
//         "password" : arr[1],
//         "rol_id" : arr[2]
//     },
//     "method": "POST",
//     "async": true,
//     "crossDomain": true,
//     "processData": true
// };
// $.ajax(settings).done(function (response) {
//     console.log(response); // TODO: Do something with the result
// });