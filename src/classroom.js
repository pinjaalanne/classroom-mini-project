"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaisedGrades = exports.getFailingGrades = exports.getPassingGrades = exports.getAverageValue = exports.getSumGrades = exports.getNumberOfGrades = void 0;
function getNumberOfGrades(grades) {
    return grades.length;
}
exports.getNumberOfGrades = getNumberOfGrades;
function getSumGrades(grades) {
    return grades.reduce(function (acc, curr) { return acc + curr; }, 0);
}
exports.getSumGrades = getSumGrades;
function getAverageValue(grades) {
    var sum = getSumGrades(grades);
    return sum / grades.length;
}
exports.getAverageValue = getAverageValue;
function getPassingGrades(grades) {
    return grades.filter(function (grade) { return grade >= 10; });
}
exports.getPassingGrades = getPassingGrades;
function getFailingGrades(grades) {
    return grades.filter(function (grade) { return grade < 10; });
}
exports.getFailingGrades = getFailingGrades;
function getRaisedGrades(grades) {
    return grades.map(function (grade) { return Math.min(20, grade + 1); });
}
exports.getRaisedGrades = getRaisedGrades;
