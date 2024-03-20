"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classroom_ts_1 = require("./classroom.ts");
var gradesForm = document.querySelector("#grades-form");
var yourGrade = document.querySelector("#your-grade");
var grades = [12, 19, 10, 4, 15, 9];
var renderStats2Table = function (grades) {
    var tbody = document.querySelector("#stats-table2 tbody");
    tbody.innerHTML = "<tr>\n        <td>".concat((0, classroom_ts_1.getPassingGrades)(grades), "</td>\n        <td>").concat((0, classroom_ts_1.getFailingGrades)(grades), "</td>\n        <td>").concat((0, classroom_ts_1.getRaisedGrades)(grades), "</td>\n    </tr>");
};
var renderStatsTable = function (grades) {
    var tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = "<tr>\n        <td>".concat((0, classroom_ts_1.getNumberOfGrades)(grades), "</td>\n        <td>").concat((0, classroom_ts_1.getSumGrades)(grades), "</td>\n        <td>").concat((0, classroom_ts_1.getAverageValue)(grades), "</td>\n    </tr>");
};
var render = function (grades) {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
};
gradesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});
render(grades);
