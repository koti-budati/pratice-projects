"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
var person = {
    name: "kittu",
    age: 26,
    role: Role.ADMIN,
};
var k;
var p;
var q;
var person2 = Object.create(person);
person2.name = "koti";
person2.role = "normaluser";
console.log(person2.role);
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
var add;
var combine = function (a, b) {
    console.log(a + b);
};
add = combine;
add(1, 4);
var subtract;
var takeOut = function (a, b) {
    console.log(a - b);
    return;
};
subtract = takeOut;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
