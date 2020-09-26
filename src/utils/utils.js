export function daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function isToday(day, month, date) {
    return day === date.getDate() && month === date.getMonth();
}

export function getStartDayOfMonth(date) {
    const weekDay = new Date(date.getFullYear(), date.getMonth(), 2).getDay();
    if (weekDay === 0)
        return 7;
    return weekDay;
}

export function getEndDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
}