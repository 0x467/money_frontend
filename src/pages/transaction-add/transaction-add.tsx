import { FC, FormEvent, useState } from "react";
import s from "./transaction-add.module.css";
import CreatableSelect from "react-select/creatable";
import { Section } from "../../ui/section/section";
import { Card } from "../../ui/card/card";
import { graphql } from "../../gql";
import { useMutation, useQuery } from "@apollo/client";

export const ACCOUNT_SELECT = graphql(`
  query AccountSelect {
    accountCollection {
      id
      name
    }
  }
`);

export const ACCOUNT_ADD_MUTATION = graphql(`
  mutation AccountAdd($input: AccountAddInput!) {
    accounts {
      add(input: $input) {
        record {
          ...AccountFields
        }
        recordId
      }
    }
  }
`);

export const TRANSACTION_ADD_MUTATION = graphql(`
  mutation TransactionAdd($input: TransactionAddInput!) {
    transaction {
      add(input: $input) {
        record {
          ...TransactionFields
        }
        recordId
      }
    }
  }
`);

export const TransactionAdd: FC = () => {
  const [form, setForm] = useState<{
    date: string;
    amount: number;
    sourceAccountId: string;
    targetAccountId: string;
  }>({ amount: 0, date: "2023-03-26 21:37", sourceAccountId: '', targetAccountId: '' });

  const { loading, error, data } = useQuery(ACCOUNT_SELECT);
  const [accountAdd] = useMutation(ACCOUNT_ADD_MUTATION);
  const [transactionAdd] = useMutation(TRANSACTION_ADD_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const addAccount = async (name: string) => {
    await accountAdd({ variables: { input: { name } } });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = form;
    input.date = new Date(input.date).toISOString();
    console.log(input);
    await transactionAdd({ variables: { input } });
  };

  return (
    <div className={s.box}>
      <form onSubmit={onSubmit}>
        <Section title={"Add transactions"}>
          <Card>
            <div className={s.block}>
              <p>From</p>
              <CreatableSelect
                options={data?.accountCollection.map((v) => ({
                  value: v?.id,
                  label: v?.name,
                }))}
                onCreateOption={addAccount}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    sourceAccountId: value?.value,
                  }))
                }
              />
            </div>
          </Card>
          <Card>
            <div className={s.block}>
              <p>To</p>
              <CreatableSelect
                options={data?.accountCollection.map((v) => ({
                  value: v?.id,
                  label: v?.name,
                }))}
                onCreateOption={addAccount}
                onChange={(value) =>
                  setForm((prev) => ({
                    ...prev,
                    targetAccountId: value?.value,
                  }))
                }
              />
            </div>
          </Card>
          <Card>
            <div className={s.block}>
              <p>Amount</p>
              <input
                type={"number"}
                value={form.amount}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, amount: +e.target.value }))
                }
              />
            </div>
          </Card>
          <Card>
            <div className={s.block}>
              <p>Date</p>
              <input
                value={form.date}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
          </Card>
          <button type="submit">Add</button>
        </Section>
      </form>
    </div>
  );
};
