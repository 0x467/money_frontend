import { FC } from "react";
import { useQuery } from "@apollo/client";
import s from "./home.module.css";
import { graphql } from "../../gql";
import { AccountList } from "../../ui/account-list/account-list";
import { Balances } from "../../ui/balances/balances";
import { TransactionList } from "../../ui/transaction-list/transaction-list";
import { Section } from "../../ui/section/section";

export const HOME_PAGE_QUERY = graphql(`
  query HomePage {
    ...AccountList
    ...Balances
    ...TransactionList
  }
`);

export const Home: FC = () => {
  const { loading, error, data } = useQuery(HOME_PAGE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className={s.box}>
      <Section title={"Balances"}>
        <Balances balances={data!} />
      </Section>

      <Section title={"My accounts"}>
        <AccountList accountList={data!} />
      </Section>

      <Section title={"Last transactions"}>
        <TransactionList query={data!} />
      </Section>
    </div>
  );
};
