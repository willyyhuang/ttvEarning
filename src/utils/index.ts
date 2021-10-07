export const numberFormatter = (input: number) =>
  input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
