export const NEXT_MONTH = 'NEXT_MONTH';
export const PREVIOUS_MONTH = 'PREVIOUS_MONTH'

export const nextMonth = () => ({
    type: NEXT_MONTH
});

export const previousMonth = () => ({
    type: PREVIOUS_MONTH
});