import { Currency } from "dinero.js";

export const currency: Currency<number> = {
  code: import.meta.env.VITE_CURRENCY_CODE,
  base: 10,
  exponent: 2,
};
