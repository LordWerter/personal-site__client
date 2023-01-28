export const maskDate = (UTC: any) => {
    return new Date(UTC).toLocaleString('ru', { year: 'numeric', month: 'long', day: 'numeric' }).split('.')[0];
};

export default maskDate;
