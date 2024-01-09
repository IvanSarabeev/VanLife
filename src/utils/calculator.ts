export const calculatePrice = (startDate:Date, endDate:Date, vanPrice:number) => {
  const days = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
  const calculatedPrice = days * vanPrice;

  return calculatedPrice;
};

export const calculateDays = (startDay:Date, endDay:Date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((startDay.getTime() - endDay.getTime()) / oneDay));

  return diffDays;
}
  