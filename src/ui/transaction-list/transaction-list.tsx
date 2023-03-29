import { FC } from "react";
import { FragmentType, graphql, useFragment } from "../../gql";
import { Transaction } from "../transaction/transaction";

export const TRANSACTION_LIST_QUERY = graphql(`
  fragment TransactionList on Query {
    transactionCollection {
      id
      ...TransactionFields
    }
  }
`);

export type TransactionListProps = {
  query: FragmentType<typeof TRANSACTION_LIST_QUERY>;
};

export const TransactionList: FC<TransactionListProps> = (props) => {
  const query = useFragment(TRANSACTION_LIST_QUERY, props.query);
  return (
    <div>
      {query.transactionCollection.map((transaction) => (
        <Transaction key={transaction!.id} transaction={transaction!} />
      ))}
    </div>
  );
};
