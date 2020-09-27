export const NEXT_MONTH = 'NEXT_MONTH';
export const PREVIOUS_MONTH = 'PREVIOUS_MONTH'
export const SHOW_POPUP = 'SHOW_POPUP';
export const DISPLAY_DAY_DATA = 'DISPLAY_DAY_DATA';

export const nextMonth = () => ({
    type: NEXT_MONTH
});

export const previousMonth = () => ({
    type: PREVIOUS_MONTH
});

export const showPopup = (show) => ({
    type: SHOW_POPUP,
    payload: show
});

export const displayDateData = (month, dayNumber, weekDay) => ({
    type: DISPLAY_DAY_DATA,
    payload: {month, dayNumber, weekDay}
});