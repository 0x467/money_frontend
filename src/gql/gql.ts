/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query HomePage {\n    ...AccountList\n    ...Balances\n    ...TransactionList\n  }\n": types.HomePageDocument,
    "\n  query AccountSelect {\n    accountCollection {\n      id\n      name\n    }\n  }\n": types.AccountSelectDocument,
    "\n  mutation AccountAdd($input: AccountAddInput!) {\n    accounts {\n      add(input: $input) {\n        record {\n          ...AccountFields\n        }\n        recordId\n      }\n    }\n  }\n": types.AccountAddDocument,
    "\n  mutation TransactionAdd($input: TransactionAddInput!) {\n    transaction {\n      add(input: $input) {\n        record {\n          ...TransactionFields\n        }\n        recordId\n      }\n    }\n  }\n": types.TransactionAddDocument,
    "\n  fragment AccountList on Query {\n    accountCollection {\n      id\n      ...AccountFields\n    }\n  }\n": types.AccountListFragmentDoc,
    "\n  fragment AccountFields on Account {\n    id\n    name\n    balance\n  }\n": types.AccountFieldsFragmentDoc,
    "\n  fragment Balances on Query {\n    balance {\n      overall\n    }\n  }\n": types.BalancesFragmentDoc,
    "\n  fragment TransactionList on Query {\n    transactionCollection {\n      id\n      ...TransactionFields\n    }\n  }\n": types.TransactionListFragmentDoc,
    "\n  fragment TransactionFields on Transaction {\n    id\n    date\n    amount\n    sourceAccount {\n      id\n      name\n    }\n    targetAccount {\n      id\n      name\n    }\n  }\n": types.TransactionFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    ...AccountList\n    ...Balances\n    ...TransactionList\n  }\n"): (typeof documents)["\n  query HomePage {\n    ...AccountList\n    ...Balances\n    ...TransactionList\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccountSelect {\n    accountCollection {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query AccountSelect {\n    accountCollection {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AccountAdd($input: AccountAddInput!) {\n    accounts {\n      add(input: $input) {\n        record {\n          ...AccountFields\n        }\n        recordId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AccountAdd($input: AccountAddInput!) {\n    accounts {\n      add(input: $input) {\n        record {\n          ...AccountFields\n        }\n        recordId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TransactionAdd($input: TransactionAddInput!) {\n    transaction {\n      add(input: $input) {\n        record {\n          ...TransactionFields\n        }\n        recordId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation TransactionAdd($input: TransactionAddInput!) {\n    transaction {\n      add(input: $input) {\n        record {\n          ...TransactionFields\n        }\n        recordId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountList on Query {\n    accountCollection {\n      id\n      ...AccountFields\n    }\n  }\n"): (typeof documents)["\n  fragment AccountList on Query {\n    accountCollection {\n      id\n      ...AccountFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountFields on Account {\n    id\n    name\n    balance\n  }\n"): (typeof documents)["\n  fragment AccountFields on Account {\n    id\n    name\n    balance\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Balances on Query {\n    balance {\n      overall\n    }\n  }\n"): (typeof documents)["\n  fragment Balances on Query {\n    balance {\n      overall\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TransactionList on Query {\n    transactionCollection {\n      id\n      ...TransactionFields\n    }\n  }\n"): (typeof documents)["\n  fragment TransactionList on Query {\n    transactionCollection {\n      id\n      ...TransactionFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TransactionFields on Transaction {\n    id\n    date\n    amount\n    sourceAccount {\n      id\n      name\n    }\n    targetAccount {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment TransactionFields on Transaction {\n    id\n    date\n    amount\n    sourceAccount {\n      id\n      name\n    }\n    targetAccount {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;