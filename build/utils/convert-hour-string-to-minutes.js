"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
function convertHourStringToMinutes(hourString) {
    const [hour, minutes] = hourString.split(':').map(Number);
    const minutesAmount = hour * 60 + minutes;
    return minutesAmount;
}
exports.convertHourStringToMinutes = convertHourStringToMinutes;
