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
    "\n\tquery GetHomePage {\n\t\tPage(id: 2) {\n\t\t\thero {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tsubDescription\n\t\t\t}\n\t\t\tlayout {\n\t\t\t\t... on ContentBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\trichText\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Experience {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\texperiencePosition: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojects {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Project {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\tthumbnail {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojectPositions: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetHomePageDocument,
    "\n\tquery GetSocialMedia {\n\t\tSocialMedia {\n\t\t\ticons {\n\t\t\t\tid\n\t\t\t\ticon {\n\t\t\t\t\timage {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tlink\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetSocialMediaDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetHomePage {\n\t\tPage(id: 2) {\n\t\t\thero {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tsubDescription\n\t\t\t}\n\t\t\tlayout {\n\t\t\t\t... on ContentBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\trichText\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Experience {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\texperiencePosition: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojects {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Project {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\tthumbnail {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojectPositions: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetHomePage {\n\t\tPage(id: 2) {\n\t\t\thero {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tsubDescription\n\t\t\t}\n\t\t\tlayout {\n\t\t\t\t... on ContentBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\trichText\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Experience {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\texperiencePosition: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojects {\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on ArchiveBlock {\n\t\t\t\t\tblockName\n\t\t\t\t\tseeMore {\n\t\t\t\t\t\tlabel\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tpopulatedDocs {\n\t\t\t\t\t\trelationTo\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t... on Project {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t\tthumbnail {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttime {\n\t\t\t\t\t\t\t\t\tstartingTime\n\t\t\t\t\t\t\t\t\tendingTime\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tprojectPositions: position\n\t\t\t\t\t\t\t\ttools {\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetSocialMedia {\n\t\tSocialMedia {\n\t\t\ticons {\n\t\t\t\tid\n\t\t\t\ticon {\n\t\t\t\t\timage {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tlink\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetSocialMedia {\n\t\tSocialMedia {\n\t\t\ticons {\n\t\t\t\tid\n\t\t\t\ticon {\n\t\t\t\t\timage {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tlink\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;