import { FC } from "react";
import s from './account-list.module.css';
import { FragmentType, graphql, useFragment } from "../../gql";
import { Account } from "../account/account";

export const ACCOUNT_LIST_FRAGMENT = graphql(`
  fragment AccountList on Query {
    accountCollection {
      id
      ...AccountFields
    }
  }
`);

export type AccountListProps = {
  accountList: FragmentType<typeof ACCOUNT_LIST_FRAGMENT>;
};

export const AccountList: FC<AccountListProps> = (props) => {
  const { accountCollection } = useFragment(
    ACCOUNT_LIST_FRAGMENT,
    props.accountList
  );

  if (accountCollection.length === 0) {
    return <div>No avaliable accounts.</div>;
  }

  return (
    <div className={s.box}>
      {accountCollection.map((account) => (
        <Account key={account!.id} account={account!} />
      ))}
    </div>
  );
};
