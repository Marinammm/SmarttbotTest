export const formatMoney = (num: number): string => (
  (num < 0 ? '-R$' : 'R$') + num.toFixed(2).toString().replace('.', ',')
);
