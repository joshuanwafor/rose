var currencyFormatter = require("currency-formatter");

export function formatCurrency(num: number) {
  return currencyFormatter.format(num, { code: "NGN" });
}
