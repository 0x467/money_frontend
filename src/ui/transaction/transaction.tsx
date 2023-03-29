import { FC } from "react";
import { dinero, toDecimal } from "dinero.js";
import s from "./transaction.module.css";
import { FragmentType, graphql, useFragment } from "../../gql";
import { Card } from "../card/card";
import { Link } from "react-router-dom";
import { currency } from "../../currency";

export const TRANSACTION_FIELDS_FRAGMENT = graphql(`
  fragment TransactionFields on Transaction {
    id
    date
    amount
    sourceAccount {
      id
      name
    }
    targetAccount {
      id
      name
    }
  }
`);

export type TransactionProps = {
  transaction: FragmentType<typeof TRANSACTION_FIELDS_FRAGMENT>;
};

export const Transaction: FC<TransactionProps> = (props) => {
  const transaction = useFragment(
    TRANSACTION_FIELDS_FRAGMENT,
    props.transaction
  );

  const amountDin = dinero({ amount: transaction.amount, currency });

  const amount = new Intl.NumberFormat(import.meta.env.VITE_LOCALE, {
    style: "currency",
    currency: import.meta.env.VITE_CURRENCY_CODE,
  }).format(+toDecimal(amountDin));

  return (
    <Card>
      <Link
        to={`/transaction/${transaction.id}`}
        style={{ width: "100%", textDecoration: "none" }}
      >
        <div className={s.box}>
          <div className={s.icon}></div>
          <div className={s.target}>
            <div className={s.targetName}>{transaction.targetAccount.name}</div>
          </div>
          <div className={s.source}>
            <div className={s.sourceAmount}>{amount}</div>
          </div>
        </div>
      </Link>
    </Card>
  );
};
