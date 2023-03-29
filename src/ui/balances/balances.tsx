import { FC } from "react";
import { dinero, toDecimal } from "dinero.js";
import { FragmentType, graphql, useFragment } from "../../gql";
import { currency } from "../../currency";

export const BALANCES_FRAGMENT = graphql(`
  fragment Balances on Query {
    balance {
      overall
    }
  }
`);

export type BalancesProps = {
  balances: FragmentType<typeof BALANCES_FRAGMENT>;
};

export const Balances: FC<BalancesProps> = (props) => {
  const balances = useFragment(BALANCES_FRAGMENT, props.balances);

  const overallDin = dinero({
    amount: balances.balance.overall,
    currency,
  });

  const overall = new Intl.NumberFormat(import.meta.env.VITE_LOCALE, {
    style: "currency",
    currency: import.meta.env.VITE_CURRENCY_CODE,
  }).format(+toDecimal(overallDin));

  return <div>{overall}</div>;
};
