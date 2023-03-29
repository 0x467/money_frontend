import { FC } from "react";
import { dinero, toDecimal } from "dinero.js";
import s from "./account.module.css";
import { FragmentType, graphql, useFragment } from "../../gql";
import { Link } from "react-router-dom";
import { Card } from "../card/card";
import { currency } from '../../currency';

export const ACCOUNT_FIELDS_FRAGMENT = graphql(`
  fragment AccountFields on Account {
    id
    name
    balance
  }
`);

export type AccountProps = {
  account: FragmentType<typeof ACCOUNT_FIELDS_FRAGMENT>;
};

export const Account: FC<AccountProps> = (props) => {
  const account = useFragment(ACCOUNT_FIELDS_FRAGMENT, props.account);
  const balance = dinero({ amount: account.balance, currency });

  const b = new Intl.NumberFormat(import.meta.env.VITE_LOCALE, {
    style: "currency",
    currency: import.meta.env.VITE_CURRENCY_CODE,
  }).format(+toDecimal(balance));

  return (
    <Card>
      <Link to={`/account/${account.id}`} className={s.box}>
        <span className={s.name}>{account.name}</span>
        <span className={s.balance}>{b}</span>
      </Link>
    </Card>
  );
};
