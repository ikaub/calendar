export function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function isToday(date, currentDate) {
    return date.toDateString() === currentDate.toDateString();
}

export function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 2);
}

export function getEndDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
}

export function getDatesInMonth(date, size) {
    const startDay = getStartDayOfMonth(date).getDay();
    let prevMonthCounter = -(startDay + (startDay === 0 ? 7 : 0)) + 1;
    return Array(size).fill(null).map((day) => {
        day = new Date(date.getFullYear(), date.getMonth(), ++prevMonthCounter);
        return day;
    });
}