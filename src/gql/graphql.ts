/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  AccountID: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  TransactionID: any;
};

export type Account = {
  __typename?: 'Account';
  /** Account balance */
  balance: Scalars['Int'];
  /** Account ID */
  id: Scalars['AccountID'];
  /** Account initial balance */
  initialBalance: Scalars['Int'];
  /** Account name */
  name: Scalars['String'];
};

export type AccountAddInput = {
  /** Account initial balance */
  balance?: InputMaybe<Scalars['Int']>;
  /** Account name */
  name: Scalars['String'];
};

export type AccountAddPayload = {
  __typename?: 'AccountAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Account>;
  recordId?: Maybe<Scalars['AccountID']>;
};

export type AccountEditInput = {
  /** Account name */
  name?: InputMaybe<Scalars['String']>;
};

export type AccountEditPayload = {
  __typename?: 'AccountEditPayload';
  query?: Maybe<Query>;
  record?: Maybe<Account>;
  recordId?: Maybe<Scalars['AccountID']>;
};

export type Balance = {
  __typename?: 'Balance';
  overall: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  account?: Maybe<MutationAccount>;
  accounts?: Maybe<MutationAccounts>;
  transaction?: Maybe<MutationTransaction>;
};

export type MutationAccount = {
  __typename?: 'MutationAccount';
  edit: AccountEditPayload;
};


export type MutationAccountEditArgs = {
  input: AccountEditInput;
};

export type MutationAccounts = {
  __typename?: 'MutationAccounts';
  add: AccountAddPayload;
};


export type MutationAccountsAddArgs = {
  input: AccountAddInput;
};

export type MutationTransaction = {
  __typename?: 'MutationTransaction';
  add: TransactionAddPayload;
};


export type MutationTransactionAddArgs = {
  input: TransactionAddInput;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountCollection: Array<Maybe<Account>>;
  balance: Balance;
  transaction?: Maybe<Transaction>;
  transactionCollection: Array<Maybe<Transaction>>;
};


export type QueryAccountArgs = {
  id?: InputMaybe<Scalars['AccountID']>;
};


export type QueryTransactionArgs = {
  id: Scalars['TransactionID'];
};

export type Transaction = {
  __typename?: 'Transaction';
  /** Transaction amount */
  amount: Scalars['Int'];
  /** Transaction date */
  date: Scalars['DateTime'];
  /** Transaction ID */
  id: Scalars['TransactionID'];
  sourceAccount: Account;
  targetAccount: Account;
};

export type TransactionAddInput = {
  /** Transaction amount */
  amount: Scalars['Int'];
  /** Transaction date */
  date: Scalars['DateTime'];
  sourceAccountId: Scalars['AccountID'];
  targetAccountId: Scalars['AccountID'];
};

export type TransactionAddPayload = {
  __typename?: 'TransactionAddPayload';
  query?: Maybe<Query>;
  record?: Maybe<Transaction>;
  recordId?: Maybe<Scalars['TransactionID']>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = (
  { __typename?: 'Query' }
  & { ' $fragmentRefs'?: { 'AccountListFragment': AccountListFragment;'BalancesFragment': BalancesFragment;'TransactionListFragment': TransactionListFragment } }
);

export type AccountSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountSelectQuery = { __typename?: 'Query', accountCollection: Array<{ __typename?: 'Account', id: any, name: string } | null> };

export type AccountAddMutationVariables = Exact<{
  input: AccountAddInput;
}>;


export type AccountAddMutation = { __typename?: 'Mutation', accounts?: { __typename?: 'MutationAccounts', add: { __typename?: 'AccountAddPayload', recordId?: any | null, record?: (
        { __typename?: 'Account' }
        & { ' $fragmentRefs'?: { 'AccountFieldsFragment': AccountFieldsFragment } }
      ) | null } } | null };

export type TransactionAddMutationVariables = Exact<{
  input: TransactionAddInput;
}>;


export type TransactionAddMutation = { __typename?: 'Mutation', transaction?: { __typename?: 'MutationTransaction', add: { __typename?: 'TransactionAddPayload', recordId?: any | null, record?: (
        { __typename?: 'Transaction' }
        & { ' $fragmentRefs'?: { 'TransactionFieldsFragment': TransactionFieldsFragment } }
      ) | null } } | null };

export type AccountListFragment = { __typename?: 'Query', accountCollection: Array<(
    { __typename?: 'Account', id: any }
    & { ' $fragmentRefs'?: { 'AccountFieldsFragment': AccountFieldsFragment } }
  ) | null> } & { ' $fragmentName'?: 'AccountListFragment' };

export type AccountFieldsFragment = { __typename?: 'Account', id: any, name: string, balance: number } & { ' $fragmentName'?: 'AccountFieldsFragment' };

export type BalancesFragment = { __typename?: 'Query', balance: { __typename?: 'Balance', overall: number } } & { ' $fragmentName'?: 'BalancesFragment' };

export type TransactionListFragment = { __typename?: 'Query', transactionCollection: Array<(
    { __typename?: 'Transaction', id: any }
    & { ' $fragmentRefs'?: { 'TransactionFieldsFragment': TransactionFieldsFragment } }
  ) | null> } & { ' $fragmentName'?: 'TransactionListFragment' };

export type TransactionFieldsFragment = { __typename?: 'Transaction', id: any, date: any, amount: number, sourceAccount: { __typename?: 'Account', id: any, name: string }, targetAccount: { __typename?: 'Account', id: any, name: string } } & { ' $fragmentName'?: 'TransactionFieldsFragment' };

export const AccountFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]} as unknown as DocumentNode<AccountFieldsFragment, unknown>;
export const AccountListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]} as unknown as DocumentNode<AccountListFragment, unknown>;
export const BalancesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Balances"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overall"}}]}}]}}]} as unknown as DocumentNode<BalancesFragment, unknown>;
export const TransactionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"sourceAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TransactionFieldsFragment, unknown>;
export const TransactionListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"sourceAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TransactionListFragment, unknown>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Balances"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionList"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"sourceAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Balances"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overall"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionFields"}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const AccountSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccountSelect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AccountSelectQuery, AccountSelectQueryVariables>;
export const AccountAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AccountAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountAddInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recordId"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]} as unknown as DocumentNode<AccountAddMutation, AccountAddMutationVariables>;
export const TransactionAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TransactionAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionAddInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TransactionFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recordId"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Transaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"sourceAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"targetAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TransactionAddMutation, TransactionAddMutationVariables>;