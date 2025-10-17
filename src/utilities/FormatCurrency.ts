export const FormatCurrency = (value: number) => {
    const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
  return price;
}