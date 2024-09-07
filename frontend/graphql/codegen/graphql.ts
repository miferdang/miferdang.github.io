/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  experience?: Maybe<ExperienceAccess>;
  media?: Maybe<MediaAccess>;
  pages?: Maybe<PagesAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  projects?: Maybe<ProjectsAccess>;
  social_media?: Maybe<Social_MediaAccess>;
  tags?: Maybe<TagsAccess>;
  users?: Maybe<UsersAccess>;
};

export type ArchiveBlock = {
  __typename?: 'ArchiveBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  limit?: Maybe<Scalars['Float']['output']>;
  populatedDocs?: Maybe<Array<ArchiveBlock_PopulatedDocs_Relationship>>;
  populatedDocsTotal?: Maybe<Scalars['Float']['output']>;
  relationTo?: Maybe<ArchiveBlock_RelationTo>;
  seeMore?: Maybe<ArchiveBlock_SeeMore>;
};


export type ArchiveBlockPopulatedDocsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArchiveBlock_PopulatedDocs = Experience | Project;

export enum ArchiveBlock_PopulatedDocs_RelationTo {
  Experience = 'experience',
  Projects = 'projects'
}

export type ArchiveBlock_PopulatedDocs_Relationship = {
  __typename?: 'ArchiveBlock_PopulatedDocs_Relationship';
  relationTo?: Maybe<ArchiveBlock_PopulatedDocs_RelationTo>;
  value?: Maybe<ArchiveBlock_PopulatedDocs>;
};

export type ArchiveBlock_SeeMore = {
  __typename?: 'ArchiveBlock_SeeMore';
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum ArchiveBlock_RelationTo {
  Experience = 'experience',
  Projects = 'projects'
}

export type CallToActionBlock = {
  __typename?: 'CallToActionBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<CallToActionBlock_Link>;
};

export type CallToActionBlock_Link = {
  __typename?: 'CallToActionBlock_Link';
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContentBlock = {
  __typename?: 'ContentBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  richText?: Maybe<Scalars['JSON']['output']>;
};


export type ContentBlockRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience = {
  __typename?: 'Experience';
  _status?: Maybe<Experience__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Array<Experience_Position>>;
  projects?: Maybe<Array<Project>>;
  slug?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Experience_Time>;
  title?: Maybe<Scalars['String']['output']>;
  tools?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExperienceProjectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceCreateAccess = {
  __typename?: 'ExperienceCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceCreateDocAccess = {
  __typename?: 'ExperienceCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceDeleteAccess = {
  __typename?: 'ExperienceDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceDeleteDocAccess = {
  __typename?: 'ExperienceDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceDocAccessFields = {
  __typename?: 'ExperienceDocAccessFields';
  _status?: Maybe<ExperienceDocAccessFields__Status>;
  createdAt?: Maybe<ExperienceDocAccessFields_CreatedAt>;
  description?: Maybe<ExperienceDocAccessFields_Description>;
  position?: Maybe<ExperienceDocAccessFields_Position>;
  projects?: Maybe<ExperienceDocAccessFields_Projects>;
  slug?: Maybe<ExperienceDocAccessFields_Slug>;
  time?: Maybe<ExperienceDocAccessFields_Time>;
  title?: Maybe<ExperienceDocAccessFields_Title>;
  tools?: Maybe<ExperienceDocAccessFields_Tools>;
  updatedAt?: Maybe<ExperienceDocAccessFields_UpdatedAt>;
};

export type ExperienceDocAccessFields__Status = {
  __typename?: 'ExperienceDocAccessFields__status';
  create?: Maybe<ExperienceDocAccessFields__Status_Create>;
  delete?: Maybe<ExperienceDocAccessFields__Status_Delete>;
  read?: Maybe<ExperienceDocAccessFields__Status_Read>;
  update?: Maybe<ExperienceDocAccessFields__Status_Update>;
};

export type ExperienceDocAccessFields__Status_Create = {
  __typename?: 'ExperienceDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields__Status_Delete = {
  __typename?: 'ExperienceDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields__Status_Read = {
  __typename?: 'ExperienceDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields__Status_Update = {
  __typename?: 'ExperienceDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_CreatedAt = {
  __typename?: 'ExperienceDocAccessFields_createdAt';
  create?: Maybe<ExperienceDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ExperienceDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ExperienceDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ExperienceDocAccessFields_CreatedAt_Update>;
};

export type ExperienceDocAccessFields_CreatedAt_Create = {
  __typename?: 'ExperienceDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ExperienceDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_CreatedAt_Read = {
  __typename?: 'ExperienceDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_CreatedAt_Update = {
  __typename?: 'ExperienceDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Description = {
  __typename?: 'ExperienceDocAccessFields_description';
  create?: Maybe<ExperienceDocAccessFields_Description_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Description_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Description_Read>;
  update?: Maybe<ExperienceDocAccessFields_Description_Update>;
};

export type ExperienceDocAccessFields_Description_Create = {
  __typename?: 'ExperienceDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Description_Delete = {
  __typename?: 'ExperienceDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Description_Read = {
  __typename?: 'ExperienceDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Description_Update = {
  __typename?: 'ExperienceDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Position = {
  __typename?: 'ExperienceDocAccessFields_position';
  create?: Maybe<ExperienceDocAccessFields_Position_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Position_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Position_Read>;
  update?: Maybe<ExperienceDocAccessFields_Position_Update>;
};

export type ExperienceDocAccessFields_Position_Create = {
  __typename?: 'ExperienceDocAccessFields_position_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Position_Delete = {
  __typename?: 'ExperienceDocAccessFields_position_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Position_Read = {
  __typename?: 'ExperienceDocAccessFields_position_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Position_Update = {
  __typename?: 'ExperienceDocAccessFields_position_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Projects = {
  __typename?: 'ExperienceDocAccessFields_projects';
  create?: Maybe<ExperienceDocAccessFields_Projects_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Projects_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Projects_Read>;
  update?: Maybe<ExperienceDocAccessFields_Projects_Update>;
};

export type ExperienceDocAccessFields_Projects_Create = {
  __typename?: 'ExperienceDocAccessFields_projects_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Projects_Delete = {
  __typename?: 'ExperienceDocAccessFields_projects_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Projects_Read = {
  __typename?: 'ExperienceDocAccessFields_projects_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Projects_Update = {
  __typename?: 'ExperienceDocAccessFields_projects_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Slug = {
  __typename?: 'ExperienceDocAccessFields_slug';
  create?: Maybe<ExperienceDocAccessFields_Slug_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Slug_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Slug_Read>;
  update?: Maybe<ExperienceDocAccessFields_Slug_Update>;
};

export type ExperienceDocAccessFields_Slug_Create = {
  __typename?: 'ExperienceDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Slug_Delete = {
  __typename?: 'ExperienceDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Slug_Read = {
  __typename?: 'ExperienceDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Slug_Update = {
  __typename?: 'ExperienceDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time = {
  __typename?: 'ExperienceDocAccessFields_time';
  create?: Maybe<ExperienceDocAccessFields_Time_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Time_Delete>;
  fields?: Maybe<ExperienceDocAccessFields_Time_Fields>;
  read?: Maybe<ExperienceDocAccessFields_Time_Read>;
  update?: Maybe<ExperienceDocAccessFields_Time_Update>;
};

export type ExperienceDocAccessFields_Time_Create = {
  __typename?: 'ExperienceDocAccessFields_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_Delete = {
  __typename?: 'ExperienceDocAccessFields_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_Fields = {
  __typename?: 'ExperienceDocAccessFields_time_Fields';
  endingTime?: Maybe<ExperienceDocAccessFields_Time_EndingTime>;
  startingTime?: Maybe<ExperienceDocAccessFields_Time_StartingTime>;
};

export type ExperienceDocAccessFields_Time_Read = {
  __typename?: 'ExperienceDocAccessFields_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_Update = {
  __typename?: 'ExperienceDocAccessFields_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_EndingTime = {
  __typename?: 'ExperienceDocAccessFields_time_endingTime';
  create?: Maybe<ExperienceDocAccessFields_Time_EndingTime_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Time_EndingTime_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Time_EndingTime_Read>;
  update?: Maybe<ExperienceDocAccessFields_Time_EndingTime_Update>;
};

export type ExperienceDocAccessFields_Time_EndingTime_Create = {
  __typename?: 'ExperienceDocAccessFields_time_endingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_EndingTime_Delete = {
  __typename?: 'ExperienceDocAccessFields_time_endingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_EndingTime_Read = {
  __typename?: 'ExperienceDocAccessFields_time_endingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_EndingTime_Update = {
  __typename?: 'ExperienceDocAccessFields_time_endingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_StartingTime = {
  __typename?: 'ExperienceDocAccessFields_time_startingTime';
  create?: Maybe<ExperienceDocAccessFields_Time_StartingTime_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Time_StartingTime_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Time_StartingTime_Read>;
  update?: Maybe<ExperienceDocAccessFields_Time_StartingTime_Update>;
};

export type ExperienceDocAccessFields_Time_StartingTime_Create = {
  __typename?: 'ExperienceDocAccessFields_time_startingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_StartingTime_Delete = {
  __typename?: 'ExperienceDocAccessFields_time_startingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_StartingTime_Read = {
  __typename?: 'ExperienceDocAccessFields_time_startingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Time_StartingTime_Update = {
  __typename?: 'ExperienceDocAccessFields_time_startingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Title = {
  __typename?: 'ExperienceDocAccessFields_title';
  create?: Maybe<ExperienceDocAccessFields_Title_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Title_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Title_Read>;
  update?: Maybe<ExperienceDocAccessFields_Title_Update>;
};

export type ExperienceDocAccessFields_Title_Create = {
  __typename?: 'ExperienceDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Title_Delete = {
  __typename?: 'ExperienceDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Title_Read = {
  __typename?: 'ExperienceDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Title_Update = {
  __typename?: 'ExperienceDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Tools = {
  __typename?: 'ExperienceDocAccessFields_tools';
  create?: Maybe<ExperienceDocAccessFields_Tools_Create>;
  delete?: Maybe<ExperienceDocAccessFields_Tools_Delete>;
  read?: Maybe<ExperienceDocAccessFields_Tools_Read>;
  update?: Maybe<ExperienceDocAccessFields_Tools_Update>;
};

export type ExperienceDocAccessFields_Tools_Create = {
  __typename?: 'ExperienceDocAccessFields_tools_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Tools_Delete = {
  __typename?: 'ExperienceDocAccessFields_tools_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Tools_Read = {
  __typename?: 'ExperienceDocAccessFields_tools_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_Tools_Update = {
  __typename?: 'ExperienceDocAccessFields_tools_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_UpdatedAt = {
  __typename?: 'ExperienceDocAccessFields_updatedAt';
  create?: Maybe<ExperienceDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ExperienceDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ExperienceDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ExperienceDocAccessFields_UpdatedAt_Update>;
};

export type ExperienceDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ExperienceDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ExperienceDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ExperienceDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ExperienceDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields = {
  __typename?: 'ExperienceFields';
  _status?: Maybe<ExperienceFields__Status>;
  createdAt?: Maybe<ExperienceFields_CreatedAt>;
  description?: Maybe<ExperienceFields_Description>;
  position?: Maybe<ExperienceFields_Position>;
  projects?: Maybe<ExperienceFields_Projects>;
  slug?: Maybe<ExperienceFields_Slug>;
  time?: Maybe<ExperienceFields_Time>;
  title?: Maybe<ExperienceFields_Title>;
  tools?: Maybe<ExperienceFields_Tools>;
  updatedAt?: Maybe<ExperienceFields_UpdatedAt>;
};

export type ExperienceFields__Status = {
  __typename?: 'ExperienceFields__status';
  create?: Maybe<ExperienceFields__Status_Create>;
  delete?: Maybe<ExperienceFields__Status_Delete>;
  read?: Maybe<ExperienceFields__Status_Read>;
  update?: Maybe<ExperienceFields__Status_Update>;
};

export type ExperienceFields__Status_Create = {
  __typename?: 'ExperienceFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields__Status_Delete = {
  __typename?: 'ExperienceFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields__Status_Read = {
  __typename?: 'ExperienceFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields__Status_Update = {
  __typename?: 'ExperienceFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_CreatedAt = {
  __typename?: 'ExperienceFields_createdAt';
  create?: Maybe<ExperienceFields_CreatedAt_Create>;
  delete?: Maybe<ExperienceFields_CreatedAt_Delete>;
  read?: Maybe<ExperienceFields_CreatedAt_Read>;
  update?: Maybe<ExperienceFields_CreatedAt_Update>;
};

export type ExperienceFields_CreatedAt_Create = {
  __typename?: 'ExperienceFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_CreatedAt_Delete = {
  __typename?: 'ExperienceFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_CreatedAt_Read = {
  __typename?: 'ExperienceFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_CreatedAt_Update = {
  __typename?: 'ExperienceFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Description = {
  __typename?: 'ExperienceFields_description';
  create?: Maybe<ExperienceFields_Description_Create>;
  delete?: Maybe<ExperienceFields_Description_Delete>;
  read?: Maybe<ExperienceFields_Description_Read>;
  update?: Maybe<ExperienceFields_Description_Update>;
};

export type ExperienceFields_Description_Create = {
  __typename?: 'ExperienceFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Description_Delete = {
  __typename?: 'ExperienceFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Description_Read = {
  __typename?: 'ExperienceFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Description_Update = {
  __typename?: 'ExperienceFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Position = {
  __typename?: 'ExperienceFields_position';
  create?: Maybe<ExperienceFields_Position_Create>;
  delete?: Maybe<ExperienceFields_Position_Delete>;
  read?: Maybe<ExperienceFields_Position_Read>;
  update?: Maybe<ExperienceFields_Position_Update>;
};

export type ExperienceFields_Position_Create = {
  __typename?: 'ExperienceFields_position_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Position_Delete = {
  __typename?: 'ExperienceFields_position_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Position_Read = {
  __typename?: 'ExperienceFields_position_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Position_Update = {
  __typename?: 'ExperienceFields_position_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Projects = {
  __typename?: 'ExperienceFields_projects';
  create?: Maybe<ExperienceFields_Projects_Create>;
  delete?: Maybe<ExperienceFields_Projects_Delete>;
  read?: Maybe<ExperienceFields_Projects_Read>;
  update?: Maybe<ExperienceFields_Projects_Update>;
};

export type ExperienceFields_Projects_Create = {
  __typename?: 'ExperienceFields_projects_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Projects_Delete = {
  __typename?: 'ExperienceFields_projects_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Projects_Read = {
  __typename?: 'ExperienceFields_projects_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Projects_Update = {
  __typename?: 'ExperienceFields_projects_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Slug = {
  __typename?: 'ExperienceFields_slug';
  create?: Maybe<ExperienceFields_Slug_Create>;
  delete?: Maybe<ExperienceFields_Slug_Delete>;
  read?: Maybe<ExperienceFields_Slug_Read>;
  update?: Maybe<ExperienceFields_Slug_Update>;
};

export type ExperienceFields_Slug_Create = {
  __typename?: 'ExperienceFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Slug_Delete = {
  __typename?: 'ExperienceFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Slug_Read = {
  __typename?: 'ExperienceFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Slug_Update = {
  __typename?: 'ExperienceFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time = {
  __typename?: 'ExperienceFields_time';
  create?: Maybe<ExperienceFields_Time_Create>;
  delete?: Maybe<ExperienceFields_Time_Delete>;
  fields?: Maybe<ExperienceFields_Time_Fields>;
  read?: Maybe<ExperienceFields_Time_Read>;
  update?: Maybe<ExperienceFields_Time_Update>;
};

export type ExperienceFields_Time_Create = {
  __typename?: 'ExperienceFields_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_Delete = {
  __typename?: 'ExperienceFields_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_Fields = {
  __typename?: 'ExperienceFields_time_Fields';
  endingTime?: Maybe<ExperienceFields_Time_EndingTime>;
  startingTime?: Maybe<ExperienceFields_Time_StartingTime>;
};

export type ExperienceFields_Time_Read = {
  __typename?: 'ExperienceFields_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_Update = {
  __typename?: 'ExperienceFields_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_EndingTime = {
  __typename?: 'ExperienceFields_time_endingTime';
  create?: Maybe<ExperienceFields_Time_EndingTime_Create>;
  delete?: Maybe<ExperienceFields_Time_EndingTime_Delete>;
  read?: Maybe<ExperienceFields_Time_EndingTime_Read>;
  update?: Maybe<ExperienceFields_Time_EndingTime_Update>;
};

export type ExperienceFields_Time_EndingTime_Create = {
  __typename?: 'ExperienceFields_time_endingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_EndingTime_Delete = {
  __typename?: 'ExperienceFields_time_endingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_EndingTime_Read = {
  __typename?: 'ExperienceFields_time_endingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_EndingTime_Update = {
  __typename?: 'ExperienceFields_time_endingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_StartingTime = {
  __typename?: 'ExperienceFields_time_startingTime';
  create?: Maybe<ExperienceFields_Time_StartingTime_Create>;
  delete?: Maybe<ExperienceFields_Time_StartingTime_Delete>;
  read?: Maybe<ExperienceFields_Time_StartingTime_Read>;
  update?: Maybe<ExperienceFields_Time_StartingTime_Update>;
};

export type ExperienceFields_Time_StartingTime_Create = {
  __typename?: 'ExperienceFields_time_startingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_StartingTime_Delete = {
  __typename?: 'ExperienceFields_time_startingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_StartingTime_Read = {
  __typename?: 'ExperienceFields_time_startingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Time_StartingTime_Update = {
  __typename?: 'ExperienceFields_time_startingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Title = {
  __typename?: 'ExperienceFields_title';
  create?: Maybe<ExperienceFields_Title_Create>;
  delete?: Maybe<ExperienceFields_Title_Delete>;
  read?: Maybe<ExperienceFields_Title_Read>;
  update?: Maybe<ExperienceFields_Title_Update>;
};

export type ExperienceFields_Title_Create = {
  __typename?: 'ExperienceFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Title_Delete = {
  __typename?: 'ExperienceFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Title_Read = {
  __typename?: 'ExperienceFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Title_Update = {
  __typename?: 'ExperienceFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Tools = {
  __typename?: 'ExperienceFields_tools';
  create?: Maybe<ExperienceFields_Tools_Create>;
  delete?: Maybe<ExperienceFields_Tools_Delete>;
  read?: Maybe<ExperienceFields_Tools_Read>;
  update?: Maybe<ExperienceFields_Tools_Update>;
};

export type ExperienceFields_Tools_Create = {
  __typename?: 'ExperienceFields_tools_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Tools_Delete = {
  __typename?: 'ExperienceFields_tools_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Tools_Read = {
  __typename?: 'ExperienceFields_tools_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_Tools_Update = {
  __typename?: 'ExperienceFields_tools_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_UpdatedAt = {
  __typename?: 'ExperienceFields_updatedAt';
  create?: Maybe<ExperienceFields_UpdatedAt_Create>;
  delete?: Maybe<ExperienceFields_UpdatedAt_Delete>;
  read?: Maybe<ExperienceFields_UpdatedAt_Read>;
  update?: Maybe<ExperienceFields_UpdatedAt_Update>;
};

export type ExperienceFields_UpdatedAt_Create = {
  __typename?: 'ExperienceFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_UpdatedAt_Delete = {
  __typename?: 'ExperienceFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_UpdatedAt_Read = {
  __typename?: 'ExperienceFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceFields_UpdatedAt_Update = {
  __typename?: 'ExperienceFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ExperienceReadAccess = {
  __typename?: 'ExperienceReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceReadDocAccess = {
  __typename?: 'ExperienceReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceReadVersionsAccess = {
  __typename?: 'ExperienceReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceReadVersionsDocAccess = {
  __typename?: 'ExperienceReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceUpdateAccess = {
  __typename?: 'ExperienceUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExperienceUpdateDocAccess = {
  __typename?: 'ExperienceUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum ExperienceUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export enum ExperienceUpdate_Position_MutationInput {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type ExperienceVersion = {
  __typename?: 'ExperienceVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Experience>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<ExperienceVersion_Version>;
};


export type ExperienceVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceVersion_Version = {
  __typename?: 'ExperienceVersion_Version';
  _status?: Maybe<ExperienceVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Array<ExperienceVersion_Version_Position>>;
  projects?: Maybe<Array<Project>>;
  slug?: Maybe<Scalars['String']['output']>;
  time?: Maybe<ExperienceVersion_Version_Time>;
  title?: Maybe<Scalars['String']['output']>;
  tools?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExperienceVersion_VersionProjectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExperienceVersion_Version_Time = {
  __typename?: 'ExperienceVersion_Version_Time';
  endingTime?: Maybe<Scalars['DateTime']['output']>;
  startingTime?: Maybe<Scalars['DateTime']['output']>;
};

export enum ExperienceVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum ExperienceVersion_Version_Position {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type Experience_Time = {
  __typename?: 'Experience_Time';
  endingTime?: Maybe<Scalars['DateTime']['output']>;
  startingTime?: Maybe<Scalars['DateTime']['output']>;
};

export enum Experience__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Experience__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Experience__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Experience__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Experience__Status_Input>>>;
  equals?: InputMaybe<Experience__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Experience__Status_Input>>>;
  not_equals?: InputMaybe<Experience__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Experience__Status_Input>>>;
};

export type Experience_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export enum Experience_Position {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export enum Experience_Position_Input {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export enum Experience_Position_MutationInput {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type Experience_Position_Operator = {
  all?: InputMaybe<Array<InputMaybe<Experience_Position_Input>>>;
  equals?: InputMaybe<Experience_Position_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Experience_Position_Input>>>;
  not_equals?: InputMaybe<Experience_Position_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Experience_Position_Input>>>;
};

export type Experience_Projects_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Time__EndingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Time__StartingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Experience_Tools_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Experience_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience_Where = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  _status?: InputMaybe<Experience__Status_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  description?: InputMaybe<Experience_Description_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  position?: InputMaybe<Experience_Position_Operator>;
  projects?: InputMaybe<Experience_Projects_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  time__endingTime?: InputMaybe<Experience_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Experience_Time__StartingTime_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  tools?: InputMaybe<Experience_Tools_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  _status?: InputMaybe<Experience__Status_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  description?: InputMaybe<Experience_Description_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  position?: InputMaybe<Experience_Position_Operator>;
  projects?: InputMaybe<Experience_Projects_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  time__endingTime?: InputMaybe<Experience_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Experience_Time__StartingTime_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  tools?: InputMaybe<Experience_Tools_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experience_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Experience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Experience_Where_Or>>>;
  _status?: InputMaybe<Experience__Status_Operator>;
  createdAt?: InputMaybe<Experience_CreatedAt_Operator>;
  description?: InputMaybe<Experience_Description_Operator>;
  id?: InputMaybe<Experience_Id_Operator>;
  position?: InputMaybe<Experience_Position_Operator>;
  projects?: InputMaybe<Experience_Projects_Operator>;
  slug?: InputMaybe<Experience_Slug_Operator>;
  time__endingTime?: InputMaybe<Experience_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Experience_Time__StartingTime_Operator>;
  title?: InputMaybe<Experience_Title_Operator>;
  tools?: InputMaybe<Experience_Tools_Operator>;
  updatedAt?: InputMaybe<Experience_UpdatedAt_Operator>;
};

export type Experiences = {
  __typename?: 'Experiences';
  docs?: Maybe<Array<Maybe<Experience>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: Media_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaBlock = {
  __typename?: 'MediaBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Media>;
};


export type MediaBlockMediaArgs = {
  where?: InputMaybe<MediaBlock_Media_Where>;
};

export type MediaBlock_Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaBlock_Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum MediaBlock_Media_Type_Input {
  Image = 'image',
  Pdf = 'pdf'
}

export type MediaBlock_Media_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Type_Input>>>;
  equals?: InputMaybe<MediaBlock_Media_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Type_Input>>>;
  not_equals?: InputMaybe<MediaBlock_Media_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Type_Input>>>;
};

export type MediaBlock_Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaBlock_Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_Or>>>;
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  focalX?: InputMaybe<MediaBlock_Media_FocalX_Operator>;
  focalY?: InputMaybe<MediaBlock_Media_FocalY_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  title?: InputMaybe<MediaBlock_Media_Title_Operator>;
  type?: InputMaybe<MediaBlock_Media_Type_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_Or>>>;
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  focalX?: InputMaybe<MediaBlock_Media_FocalX_Operator>;
  focalY?: InputMaybe<MediaBlock_Media_FocalY_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  title?: InputMaybe<MediaBlock_Media_Title_Operator>;
  type?: InputMaybe<MediaBlock_Media_Type_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_Or>>>;
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  focalX?: InputMaybe<MediaBlock_Media_FocalX_Operator>;
  focalY?: InputMaybe<MediaBlock_Media_FocalY_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  title?: InputMaybe<MediaBlock_Media_Title_Operator>;
  type?: InputMaybe<MediaBlock_Media_Type_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  title?: Maybe<MediaDocAccessFields_Title>;
  type?: Maybe<MediaDocAccessFields_Type>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title = {
  __typename?: 'MediaDocAccessFields_title';
  create?: Maybe<MediaDocAccessFields_Title_Create>;
  delete?: Maybe<MediaDocAccessFields_Title_Delete>;
  read?: Maybe<MediaDocAccessFields_Title_Read>;
  update?: Maybe<MediaDocAccessFields_Title_Update>;
};

export type MediaDocAccessFields_Title_Create = {
  __typename?: 'MediaDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Delete = {
  __typename?: 'MediaDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Read = {
  __typename?: 'MediaDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Update = {
  __typename?: 'MediaDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Type = {
  __typename?: 'MediaDocAccessFields_type';
  create?: Maybe<MediaDocAccessFields_Type_Create>;
  delete?: Maybe<MediaDocAccessFields_Type_Delete>;
  read?: Maybe<MediaDocAccessFields_Type_Read>;
  update?: Maybe<MediaDocAccessFields_Type_Update>;
};

export type MediaDocAccessFields_Type_Create = {
  __typename?: 'MediaDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Type_Delete = {
  __typename?: 'MediaDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Type_Read = {
  __typename?: 'MediaDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Type_Update = {
  __typename?: 'MediaDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  title?: Maybe<MediaFields_Title>;
  type?: Maybe<MediaFields_Type>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title = {
  __typename?: 'MediaFields_title';
  create?: Maybe<MediaFields_Title_Create>;
  delete?: Maybe<MediaFields_Title_Delete>;
  read?: Maybe<MediaFields_Title_Read>;
  update?: Maybe<MediaFields_Title_Update>;
};

export type MediaFields_Title_Create = {
  __typename?: 'MediaFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Delete = {
  __typename?: 'MediaFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Read = {
  __typename?: 'MediaFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Update = {
  __typename?: 'MediaFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Type = {
  __typename?: 'MediaFields_type';
  create?: Maybe<MediaFields_Type_Create>;
  delete?: Maybe<MediaFields_Type_Delete>;
  read?: Maybe<MediaFields_Type_Read>;
  update?: Maybe<MediaFields_Type_Update>;
};

export type MediaFields_Type_Create = {
  __typename?: 'MediaFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Type_Delete = {
  __typename?: 'MediaFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Type_Read = {
  __typename?: 'MediaFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Type_Update = {
  __typename?: 'MediaFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum MediaUpdate_Type_MutationInput {
  Image = 'image',
  Pdf = 'pdf'
}

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Media_Type {
  Image = 'image',
  Pdf = 'pdf'
}

export enum Media_Type_Input {
  Image = 'image',
  Pdf = 'pdf'
}

export enum Media_Type_MutationInput {
  Image = 'image',
  Pdf = 'pdf'
}

export type Media_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Media_Type_Input>>>;
  equals?: InputMaybe<Media_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Media_Type_Input>>>;
  not_equals?: InputMaybe<Media_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Media_Type_Input>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  type?: InputMaybe<Media_Type_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  type?: InputMaybe<Media_Type_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  type?: InputMaybe<Media_Type_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MenusBlock = {
  __typename?: 'MenusBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  menus?: Maybe<Array<MenusBlock_Menus>>;
};

export type MenusBlock_Menus = {
  __typename?: 'MenusBlock_Menus';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<MenusBlock_Menus_Link>;
};

export type MenusBlock_Menus_Link = {
  __typename?: 'MenusBlock_Menus_Link';
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createExperience?: Maybe<Experience>;
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createProject?: Maybe<Project>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteExperience?: Maybe<Experience>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteProject?: Maybe<Project>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionExperience?: Maybe<Experience>;
  restoreVersionPage?: Maybe<Page>;
  restoreVersionProject?: Maybe<Project>;
  unlockUser: Scalars['Boolean']['output'];
  updateExperience?: Maybe<Experience>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateProject?: Maybe<Project>;
  updateSocialMedia?: Maybe<SocialMedia>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateExperienceArgs = {
  data: MutationExperienceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
};


export type MutationCreateProjectArgs = {
  data: MutationProjectInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionExperienceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRestoreVersionPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRestoreVersionProjectArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateExperienceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationExperienceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProjectArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProjectUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateSocialMediaArgs = {
  data: MutationSocialMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTagUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hero?: Maybe<Page_Hero>;
  id?: Maybe<Scalars['Int']['output']>;
  layout: Array<Page_Layout>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PageVersion = {
  __typename?: 'PageVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Page>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PageVersion_Version>;
};


export type PageVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hero?: Maybe<PageVersion_Version_Hero>;
  layout: Array<PageVersion_Version_Layout>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageVersion_Version_Hero = {
  __typename?: 'PageVersion_Version_Hero';
  description?: Maybe<Scalars['String']['output']>;
  subDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageVersion_Version_Layout = ArchiveBlock | CallToActionBlock | ContentBlock | MediaBlock | MenusBlock;

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Page_Hero = {
  __typename?: 'Page_Hero';
  description?: Maybe<Scalars['String']['output']>;
  subDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Page_Layout = ArchiveBlock | CallToActionBlock | ContentBlock | MediaBlock | MenusBlock;

export enum Page__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  equals?: InputMaybe<Page__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Hero__Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Hero__SubDescription_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Hero__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Page_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  hero__description?: InputMaybe<Page_Hero__Description_Operator>;
  hero__subDescription?: InputMaybe<Page_Hero__SubDescription_Operator>;
  hero__title?: InputMaybe<Page_Hero__Title_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  hero__description?: InputMaybe<Page_Hero__Description_Operator>;
  hero__subDescription?: InputMaybe<Page_Hero__SubDescription_Operator>;
  hero__title?: InputMaybe<Page_Hero__Title_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  hero__description?: InputMaybe<Page_Hero__Description_Operator>;
  hero__subDescription?: InputMaybe<Page_Hero__SubDescription_Operator>;
  hero__title?: InputMaybe<Page_Hero__Title_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  _status?: Maybe<PagesDocAccessFields__Status>;
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  hero?: Maybe<PagesDocAccessFields_Hero>;
  layout?: Maybe<PagesDocAccessFields_Layout>;
  publishedDate?: Maybe<PagesDocAccessFields_PublishedDate>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields__Status = {
  __typename?: 'PagesDocAccessFields__status';
  create?: Maybe<PagesDocAccessFields__Status_Create>;
  delete?: Maybe<PagesDocAccessFields__Status_Delete>;
  read?: Maybe<PagesDocAccessFields__Status_Read>;
  update?: Maybe<PagesDocAccessFields__Status_Update>;
};

export type PagesDocAccessFields__Status_Create = {
  __typename?: 'PagesDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Delete = {
  __typename?: 'PagesDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Read = {
  __typename?: 'PagesDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Update = {
  __typename?: 'PagesDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero = {
  __typename?: 'PagesDocAccessFields_hero';
  create?: Maybe<PagesDocAccessFields_Hero_Create>;
  delete?: Maybe<PagesDocAccessFields_Hero_Delete>;
  fields?: Maybe<PagesDocAccessFields_Hero_Fields>;
  read?: Maybe<PagesDocAccessFields_Hero_Read>;
  update?: Maybe<PagesDocAccessFields_Hero_Update>;
};

export type PagesDocAccessFields_Hero_Create = {
  __typename?: 'PagesDocAccessFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Delete = {
  __typename?: 'PagesDocAccessFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Fields = {
  __typename?: 'PagesDocAccessFields_hero_Fields';
  description?: Maybe<PagesDocAccessFields_Hero_Description>;
  subDescription?: Maybe<PagesDocAccessFields_Hero_SubDescription>;
  title?: Maybe<PagesDocAccessFields_Hero_Title>;
};

export type PagesDocAccessFields_Hero_Read = {
  __typename?: 'PagesDocAccessFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Update = {
  __typename?: 'PagesDocAccessFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Description = {
  __typename?: 'PagesDocAccessFields_hero_description';
  create?: Maybe<PagesDocAccessFields_Hero_Description_Create>;
  delete?: Maybe<PagesDocAccessFields_Hero_Description_Delete>;
  read?: Maybe<PagesDocAccessFields_Hero_Description_Read>;
  update?: Maybe<PagesDocAccessFields_Hero_Description_Update>;
};

export type PagesDocAccessFields_Hero_Description_Create = {
  __typename?: 'PagesDocAccessFields_hero_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Description_Delete = {
  __typename?: 'PagesDocAccessFields_hero_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Description_Read = {
  __typename?: 'PagesDocAccessFields_hero_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Description_Update = {
  __typename?: 'PagesDocAccessFields_hero_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_SubDescription = {
  __typename?: 'PagesDocAccessFields_hero_subDescription';
  create?: Maybe<PagesDocAccessFields_Hero_SubDescription_Create>;
  delete?: Maybe<PagesDocAccessFields_Hero_SubDescription_Delete>;
  read?: Maybe<PagesDocAccessFields_Hero_SubDescription_Read>;
  update?: Maybe<PagesDocAccessFields_Hero_SubDescription_Update>;
};

export type PagesDocAccessFields_Hero_SubDescription_Create = {
  __typename?: 'PagesDocAccessFields_hero_subDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_SubDescription_Delete = {
  __typename?: 'PagesDocAccessFields_hero_subDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_SubDescription_Read = {
  __typename?: 'PagesDocAccessFields_hero_subDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_SubDescription_Update = {
  __typename?: 'PagesDocAccessFields_hero_subDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Title = {
  __typename?: 'PagesDocAccessFields_hero_title';
  create?: Maybe<PagesDocAccessFields_Hero_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Hero_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Hero_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Hero_Title_Update>;
};

export type PagesDocAccessFields_Hero_Title_Create = {
  __typename?: 'PagesDocAccessFields_hero_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Title_Delete = {
  __typename?: 'PagesDocAccessFields_hero_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Title_Read = {
  __typename?: 'PagesDocAccessFields_hero_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Hero_Title_Update = {
  __typename?: 'PagesDocAccessFields_hero_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout = {
  __typename?: 'PagesDocAccessFields_layout';
  create?: Maybe<PagesDocAccessFields_Layout_Create>;
  delete?: Maybe<PagesDocAccessFields_Layout_Delete>;
  read?: Maybe<PagesDocAccessFields_Layout_Read>;
  update?: Maybe<PagesDocAccessFields_Layout_Update>;
};

export type PagesDocAccessFields_Layout_Create = {
  __typename?: 'PagesDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Delete = {
  __typename?: 'PagesDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Read = {
  __typename?: 'PagesDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Update = {
  __typename?: 'PagesDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate = {
  __typename?: 'PagesDocAccessFields_publishedDate';
  create?: Maybe<PagesDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<PagesDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<PagesDocAccessFields_PublishedDate_Read>;
  update?: Maybe<PagesDocAccessFields_PublishedDate_Update>;
};

export type PagesDocAccessFields_PublishedDate_Create = {
  __typename?: 'PagesDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Delete = {
  __typename?: 'PagesDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Read = {
  __typename?: 'PagesDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Update = {
  __typename?: 'PagesDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title';
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  _status?: Maybe<PagesFields__Status>;
  createdAt?: Maybe<PagesFields_CreatedAt>;
  hero?: Maybe<PagesFields_Hero>;
  layout?: Maybe<PagesFields_Layout>;
  publishedDate?: Maybe<PagesFields_PublishedDate>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields__Status = {
  __typename?: 'PagesFields__status';
  create?: Maybe<PagesFields__Status_Create>;
  delete?: Maybe<PagesFields__Status_Delete>;
  read?: Maybe<PagesFields__Status_Read>;
  update?: Maybe<PagesFields__Status_Update>;
};

export type PagesFields__Status_Create = {
  __typename?: 'PagesFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Delete = {
  __typename?: 'PagesFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Read = {
  __typename?: 'PagesFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Update = {
  __typename?: 'PagesFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero = {
  __typename?: 'PagesFields_hero';
  create?: Maybe<PagesFields_Hero_Create>;
  delete?: Maybe<PagesFields_Hero_Delete>;
  fields?: Maybe<PagesFields_Hero_Fields>;
  read?: Maybe<PagesFields_Hero_Read>;
  update?: Maybe<PagesFields_Hero_Update>;
};

export type PagesFields_Hero_Create = {
  __typename?: 'PagesFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Delete = {
  __typename?: 'PagesFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Fields = {
  __typename?: 'PagesFields_hero_Fields';
  description?: Maybe<PagesFields_Hero_Description>;
  subDescription?: Maybe<PagesFields_Hero_SubDescription>;
  title?: Maybe<PagesFields_Hero_Title>;
};

export type PagesFields_Hero_Read = {
  __typename?: 'PagesFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Update = {
  __typename?: 'PagesFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Description = {
  __typename?: 'PagesFields_hero_description';
  create?: Maybe<PagesFields_Hero_Description_Create>;
  delete?: Maybe<PagesFields_Hero_Description_Delete>;
  read?: Maybe<PagesFields_Hero_Description_Read>;
  update?: Maybe<PagesFields_Hero_Description_Update>;
};

export type PagesFields_Hero_Description_Create = {
  __typename?: 'PagesFields_hero_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Description_Delete = {
  __typename?: 'PagesFields_hero_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Description_Read = {
  __typename?: 'PagesFields_hero_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Description_Update = {
  __typename?: 'PagesFields_hero_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_SubDescription = {
  __typename?: 'PagesFields_hero_subDescription';
  create?: Maybe<PagesFields_Hero_SubDescription_Create>;
  delete?: Maybe<PagesFields_Hero_SubDescription_Delete>;
  read?: Maybe<PagesFields_Hero_SubDescription_Read>;
  update?: Maybe<PagesFields_Hero_SubDescription_Update>;
};

export type PagesFields_Hero_SubDescription_Create = {
  __typename?: 'PagesFields_hero_subDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_SubDescription_Delete = {
  __typename?: 'PagesFields_hero_subDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_SubDescription_Read = {
  __typename?: 'PagesFields_hero_subDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_SubDescription_Update = {
  __typename?: 'PagesFields_hero_subDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Title = {
  __typename?: 'PagesFields_hero_title';
  create?: Maybe<PagesFields_Hero_Title_Create>;
  delete?: Maybe<PagesFields_Hero_Title_Delete>;
  read?: Maybe<PagesFields_Hero_Title_Read>;
  update?: Maybe<PagesFields_Hero_Title_Update>;
};

export type PagesFields_Hero_Title_Create = {
  __typename?: 'PagesFields_hero_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Title_Delete = {
  __typename?: 'PagesFields_hero_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Title_Read = {
  __typename?: 'PagesFields_hero_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Hero_Title_Update = {
  __typename?: 'PagesFields_hero_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout = {
  __typename?: 'PagesFields_layout';
  create?: Maybe<PagesFields_Layout_Create>;
  delete?: Maybe<PagesFields_Layout_Delete>;
  read?: Maybe<PagesFields_Layout_Read>;
  update?: Maybe<PagesFields_Layout_Update>;
};

export type PagesFields_Layout_Create = {
  __typename?: 'PagesFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Delete = {
  __typename?: 'PagesFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Read = {
  __typename?: 'PagesFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Update = {
  __typename?: 'PagesFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate = {
  __typename?: 'PagesFields_publishedDate';
  create?: Maybe<PagesFields_PublishedDate_Create>;
  delete?: Maybe<PagesFields_PublishedDate_Delete>;
  read?: Maybe<PagesFields_PublishedDate_Read>;
  update?: Maybe<PagesFields_PublishedDate_Update>;
};

export type PagesFields_PublishedDate_Create = {
  __typename?: 'PagesFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Delete = {
  __typename?: 'PagesFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Read = {
  __typename?: 'PagesFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Update = {
  __typename?: 'PagesFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  __typename?: 'PagesFields_title';
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsAccess = {
  __typename?: 'PagesReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsDocAccess = {
  __typename?: 'PagesReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Project = {
  __typename?: 'Project';
  _status?: Maybe<Project__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Array<Project_Position>>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Media>;
  time?: Maybe<Project_Time>;
  tools?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ProjectUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export enum ProjectUpdate_Position_MutationInput {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type ProjectVersion = {
  __typename?: 'ProjectVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<ProjectVersion_Version>;
};


export type ProjectVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectVersion_Version = {
  __typename?: 'ProjectVersion_Version';
  _status?: Maybe<ProjectVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Array<ProjectVersion_Version_Position>>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Media>;
  time?: Maybe<ProjectVersion_Version_Time>;
  tools?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectVersion_Version_Time = {
  __typename?: 'ProjectVersion_Version_Time';
  endingTime?: Maybe<Scalars['DateTime']['output']>;
  startingTime?: Maybe<Scalars['DateTime']['output']>;
};

export enum ProjectVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum ProjectVersion_Version_Position {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type Project_Time = {
  __typename?: 'Project_Time';
  endingTime?: Maybe<Scalars['DateTime']['output']>;
  startingTime?: Maybe<Scalars['DateTime']['output']>;
};

export enum Project__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Project__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Project__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Project__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Project__Status_Input>>>;
  equals?: InputMaybe<Project__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Project__Status_Input>>>;
  not_equals?: InputMaybe<Project__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Project__Status_Input>>>;
};

export type Project_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Project_Link_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Project_Position {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export enum Project_Position_Input {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export enum Project_Position_MutationInput {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type Project_Position_Operator = {
  all?: InputMaybe<Array<InputMaybe<Project_Position_Input>>>;
  equals?: InputMaybe<Project_Position_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Project_Position_Input>>>;
  not_equals?: InputMaybe<Project_Position_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Project_Position_Input>>>;
};

export type Project_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Thumbnail_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Project_Time__EndingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Time__StartingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Tools_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Project_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Where = {
  AND?: InputMaybe<Array<InputMaybe<Project_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Project_Where_Or>>>;
  _status?: InputMaybe<Project__Status_Operator>;
  createdAt?: InputMaybe<Project_CreatedAt_Operator>;
  description?: InputMaybe<Project_Description_Operator>;
  id?: InputMaybe<Project_Id_Operator>;
  link?: InputMaybe<Project_Link_Operator>;
  name?: InputMaybe<Project_Name_Operator>;
  position?: InputMaybe<Project_Position_Operator>;
  slug?: InputMaybe<Project_Slug_Operator>;
  thumbnail?: InputMaybe<Project_Thumbnail_Operator>;
  time__endingTime?: InputMaybe<Project_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Project_Time__StartingTime_Operator>;
  tools?: InputMaybe<Project_Tools_Operator>;
  updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Project_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Project_Where_Or>>>;
  _status?: InputMaybe<Project__Status_Operator>;
  createdAt?: InputMaybe<Project_CreatedAt_Operator>;
  description?: InputMaybe<Project_Description_Operator>;
  id?: InputMaybe<Project_Id_Operator>;
  link?: InputMaybe<Project_Link_Operator>;
  name?: InputMaybe<Project_Name_Operator>;
  position?: InputMaybe<Project_Position_Operator>;
  slug?: InputMaybe<Project_Slug_Operator>;
  thumbnail?: InputMaybe<Project_Thumbnail_Operator>;
  time__endingTime?: InputMaybe<Project_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Project_Time__StartingTime_Operator>;
  tools?: InputMaybe<Project_Tools_Operator>;
  updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Project_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Project_Where_Or>>>;
  _status?: InputMaybe<Project__Status_Operator>;
  createdAt?: InputMaybe<Project_CreatedAt_Operator>;
  description?: InputMaybe<Project_Description_Operator>;
  id?: InputMaybe<Project_Id_Operator>;
  link?: InputMaybe<Project_Link_Operator>;
  name?: InputMaybe<Project_Name_Operator>;
  position?: InputMaybe<Project_Position_Operator>;
  slug?: InputMaybe<Project_Slug_Operator>;
  thumbnail?: InputMaybe<Project_Thumbnail_Operator>;
  time__endingTime?: InputMaybe<Project_Time__EndingTime_Operator>;
  time__startingTime?: InputMaybe<Project_Time__StartingTime_Operator>;
  tools?: InputMaybe<Project_Tools_Operator>;
  updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Projects = {
  __typename?: 'Projects';
  docs?: Maybe<Array<Maybe<Project>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProjectsCreateAccess = {
  __typename?: 'ProjectsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsCreateDocAccess = {
  __typename?: 'ProjectsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDeleteAccess = {
  __typename?: 'ProjectsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDeleteDocAccess = {
  __typename?: 'ProjectsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDocAccessFields = {
  __typename?: 'ProjectsDocAccessFields';
  _status?: Maybe<ProjectsDocAccessFields__Status>;
  createdAt?: Maybe<ProjectsDocAccessFields_CreatedAt>;
  description?: Maybe<ProjectsDocAccessFields_Description>;
  link?: Maybe<ProjectsDocAccessFields_Link>;
  name?: Maybe<ProjectsDocAccessFields_Name>;
  position?: Maybe<ProjectsDocAccessFields_Position>;
  slug?: Maybe<ProjectsDocAccessFields_Slug>;
  thumbnail?: Maybe<ProjectsDocAccessFields_Thumbnail>;
  time?: Maybe<ProjectsDocAccessFields_Time>;
  tools?: Maybe<ProjectsDocAccessFields_Tools>;
  updatedAt?: Maybe<ProjectsDocAccessFields_UpdatedAt>;
};

export type ProjectsDocAccessFields__Status = {
  __typename?: 'ProjectsDocAccessFields__status';
  create?: Maybe<ProjectsDocAccessFields__Status_Create>;
  delete?: Maybe<ProjectsDocAccessFields__Status_Delete>;
  read?: Maybe<ProjectsDocAccessFields__Status_Read>;
  update?: Maybe<ProjectsDocAccessFields__Status_Update>;
};

export type ProjectsDocAccessFields__Status_Create = {
  __typename?: 'ProjectsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields__Status_Delete = {
  __typename?: 'ProjectsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields__Status_Read = {
  __typename?: 'ProjectsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields__Status_Update = {
  __typename?: 'ProjectsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt = {
  __typename?: 'ProjectsDocAccessFields_createdAt';
  create?: Maybe<ProjectsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProjectsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProjectsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProjectsDocAccessFields_CreatedAt_Update>;
};

export type ProjectsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProjectsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProjectsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProjectsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProjectsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Description = {
  __typename?: 'ProjectsDocAccessFields_description';
  create?: Maybe<ProjectsDocAccessFields_Description_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Description_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Description_Read>;
  update?: Maybe<ProjectsDocAccessFields_Description_Update>;
};

export type ProjectsDocAccessFields_Description_Create = {
  __typename?: 'ProjectsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Description_Delete = {
  __typename?: 'ProjectsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Description_Read = {
  __typename?: 'ProjectsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Description_Update = {
  __typename?: 'ProjectsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Link = {
  __typename?: 'ProjectsDocAccessFields_link';
  create?: Maybe<ProjectsDocAccessFields_Link_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Link_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Link_Read>;
  update?: Maybe<ProjectsDocAccessFields_Link_Update>;
};

export type ProjectsDocAccessFields_Link_Create = {
  __typename?: 'ProjectsDocAccessFields_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Link_Delete = {
  __typename?: 'ProjectsDocAccessFields_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Link_Read = {
  __typename?: 'ProjectsDocAccessFields_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Link_Update = {
  __typename?: 'ProjectsDocAccessFields_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Name = {
  __typename?: 'ProjectsDocAccessFields_name';
  create?: Maybe<ProjectsDocAccessFields_Name_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Name_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Name_Read>;
  update?: Maybe<ProjectsDocAccessFields_Name_Update>;
};

export type ProjectsDocAccessFields_Name_Create = {
  __typename?: 'ProjectsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Name_Delete = {
  __typename?: 'ProjectsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Name_Read = {
  __typename?: 'ProjectsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Name_Update = {
  __typename?: 'ProjectsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Position = {
  __typename?: 'ProjectsDocAccessFields_position';
  create?: Maybe<ProjectsDocAccessFields_Position_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Position_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Position_Read>;
  update?: Maybe<ProjectsDocAccessFields_Position_Update>;
};

export type ProjectsDocAccessFields_Position_Create = {
  __typename?: 'ProjectsDocAccessFields_position_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Position_Delete = {
  __typename?: 'ProjectsDocAccessFields_position_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Position_Read = {
  __typename?: 'ProjectsDocAccessFields_position_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Position_Update = {
  __typename?: 'ProjectsDocAccessFields_position_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug = {
  __typename?: 'ProjectsDocAccessFields_slug';
  create?: Maybe<ProjectsDocAccessFields_Slug_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Slug_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Slug_Read>;
  update?: Maybe<ProjectsDocAccessFields_Slug_Update>;
};

export type ProjectsDocAccessFields_Slug_Create = {
  __typename?: 'ProjectsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Delete = {
  __typename?: 'ProjectsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Read = {
  __typename?: 'ProjectsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Update = {
  __typename?: 'ProjectsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Thumbnail = {
  __typename?: 'ProjectsDocAccessFields_thumbnail';
  create?: Maybe<ProjectsDocAccessFields_Thumbnail_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Thumbnail_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Thumbnail_Read>;
  update?: Maybe<ProjectsDocAccessFields_Thumbnail_Update>;
};

export type ProjectsDocAccessFields_Thumbnail_Create = {
  __typename?: 'ProjectsDocAccessFields_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Thumbnail_Delete = {
  __typename?: 'ProjectsDocAccessFields_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Thumbnail_Read = {
  __typename?: 'ProjectsDocAccessFields_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Thumbnail_Update = {
  __typename?: 'ProjectsDocAccessFields_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time = {
  __typename?: 'ProjectsDocAccessFields_time';
  create?: Maybe<ProjectsDocAccessFields_Time_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Time_Delete>;
  fields?: Maybe<ProjectsDocAccessFields_Time_Fields>;
  read?: Maybe<ProjectsDocAccessFields_Time_Read>;
  update?: Maybe<ProjectsDocAccessFields_Time_Update>;
};

export type ProjectsDocAccessFields_Time_Create = {
  __typename?: 'ProjectsDocAccessFields_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_Delete = {
  __typename?: 'ProjectsDocAccessFields_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_Fields = {
  __typename?: 'ProjectsDocAccessFields_time_Fields';
  endingTime?: Maybe<ProjectsDocAccessFields_Time_EndingTime>;
  startingTime?: Maybe<ProjectsDocAccessFields_Time_StartingTime>;
};

export type ProjectsDocAccessFields_Time_Read = {
  __typename?: 'ProjectsDocAccessFields_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_Update = {
  __typename?: 'ProjectsDocAccessFields_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_EndingTime = {
  __typename?: 'ProjectsDocAccessFields_time_endingTime';
  create?: Maybe<ProjectsDocAccessFields_Time_EndingTime_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Time_EndingTime_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Time_EndingTime_Read>;
  update?: Maybe<ProjectsDocAccessFields_Time_EndingTime_Update>;
};

export type ProjectsDocAccessFields_Time_EndingTime_Create = {
  __typename?: 'ProjectsDocAccessFields_time_endingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_EndingTime_Delete = {
  __typename?: 'ProjectsDocAccessFields_time_endingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_EndingTime_Read = {
  __typename?: 'ProjectsDocAccessFields_time_endingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_EndingTime_Update = {
  __typename?: 'ProjectsDocAccessFields_time_endingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_StartingTime = {
  __typename?: 'ProjectsDocAccessFields_time_startingTime';
  create?: Maybe<ProjectsDocAccessFields_Time_StartingTime_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Time_StartingTime_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Time_StartingTime_Read>;
  update?: Maybe<ProjectsDocAccessFields_Time_StartingTime_Update>;
};

export type ProjectsDocAccessFields_Time_StartingTime_Create = {
  __typename?: 'ProjectsDocAccessFields_time_startingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_StartingTime_Delete = {
  __typename?: 'ProjectsDocAccessFields_time_startingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_StartingTime_Read = {
  __typename?: 'ProjectsDocAccessFields_time_startingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Time_StartingTime_Update = {
  __typename?: 'ProjectsDocAccessFields_time_startingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Tools = {
  __typename?: 'ProjectsDocAccessFields_tools';
  create?: Maybe<ProjectsDocAccessFields_Tools_Create>;
  delete?: Maybe<ProjectsDocAccessFields_Tools_Delete>;
  read?: Maybe<ProjectsDocAccessFields_Tools_Read>;
  update?: Maybe<ProjectsDocAccessFields_Tools_Update>;
};

export type ProjectsDocAccessFields_Tools_Create = {
  __typename?: 'ProjectsDocAccessFields_tools_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Tools_Delete = {
  __typename?: 'ProjectsDocAccessFields_tools_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Tools_Read = {
  __typename?: 'ProjectsDocAccessFields_tools_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Tools_Update = {
  __typename?: 'ProjectsDocAccessFields_tools_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt = {
  __typename?: 'ProjectsDocAccessFields_updatedAt';
  create?: Maybe<ProjectsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProjectsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProjectsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProjectsDocAccessFields_UpdatedAt_Update>;
};

export type ProjectsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProjectsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProjectsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProjectsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProjectsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields = {
  __typename?: 'ProjectsFields';
  _status?: Maybe<ProjectsFields__Status>;
  createdAt?: Maybe<ProjectsFields_CreatedAt>;
  description?: Maybe<ProjectsFields_Description>;
  link?: Maybe<ProjectsFields_Link>;
  name?: Maybe<ProjectsFields_Name>;
  position?: Maybe<ProjectsFields_Position>;
  slug?: Maybe<ProjectsFields_Slug>;
  thumbnail?: Maybe<ProjectsFields_Thumbnail>;
  time?: Maybe<ProjectsFields_Time>;
  tools?: Maybe<ProjectsFields_Tools>;
  updatedAt?: Maybe<ProjectsFields_UpdatedAt>;
};

export type ProjectsFields__Status = {
  __typename?: 'ProjectsFields__status';
  create?: Maybe<ProjectsFields__Status_Create>;
  delete?: Maybe<ProjectsFields__Status_Delete>;
  read?: Maybe<ProjectsFields__Status_Read>;
  update?: Maybe<ProjectsFields__Status_Update>;
};

export type ProjectsFields__Status_Create = {
  __typename?: 'ProjectsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields__Status_Delete = {
  __typename?: 'ProjectsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields__Status_Read = {
  __typename?: 'ProjectsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields__Status_Update = {
  __typename?: 'ProjectsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt = {
  __typename?: 'ProjectsFields_createdAt';
  create?: Maybe<ProjectsFields_CreatedAt_Create>;
  delete?: Maybe<ProjectsFields_CreatedAt_Delete>;
  read?: Maybe<ProjectsFields_CreatedAt_Read>;
  update?: Maybe<ProjectsFields_CreatedAt_Update>;
};

export type ProjectsFields_CreatedAt_Create = {
  __typename?: 'ProjectsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Delete = {
  __typename?: 'ProjectsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Read = {
  __typename?: 'ProjectsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Update = {
  __typename?: 'ProjectsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Description = {
  __typename?: 'ProjectsFields_description';
  create?: Maybe<ProjectsFields_Description_Create>;
  delete?: Maybe<ProjectsFields_Description_Delete>;
  read?: Maybe<ProjectsFields_Description_Read>;
  update?: Maybe<ProjectsFields_Description_Update>;
};

export type ProjectsFields_Description_Create = {
  __typename?: 'ProjectsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Description_Delete = {
  __typename?: 'ProjectsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Description_Read = {
  __typename?: 'ProjectsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Description_Update = {
  __typename?: 'ProjectsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Link = {
  __typename?: 'ProjectsFields_link';
  create?: Maybe<ProjectsFields_Link_Create>;
  delete?: Maybe<ProjectsFields_Link_Delete>;
  read?: Maybe<ProjectsFields_Link_Read>;
  update?: Maybe<ProjectsFields_Link_Update>;
};

export type ProjectsFields_Link_Create = {
  __typename?: 'ProjectsFields_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Link_Delete = {
  __typename?: 'ProjectsFields_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Link_Read = {
  __typename?: 'ProjectsFields_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Link_Update = {
  __typename?: 'ProjectsFields_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Name = {
  __typename?: 'ProjectsFields_name';
  create?: Maybe<ProjectsFields_Name_Create>;
  delete?: Maybe<ProjectsFields_Name_Delete>;
  read?: Maybe<ProjectsFields_Name_Read>;
  update?: Maybe<ProjectsFields_Name_Update>;
};

export type ProjectsFields_Name_Create = {
  __typename?: 'ProjectsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Name_Delete = {
  __typename?: 'ProjectsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Name_Read = {
  __typename?: 'ProjectsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Name_Update = {
  __typename?: 'ProjectsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Position = {
  __typename?: 'ProjectsFields_position';
  create?: Maybe<ProjectsFields_Position_Create>;
  delete?: Maybe<ProjectsFields_Position_Delete>;
  read?: Maybe<ProjectsFields_Position_Read>;
  update?: Maybe<ProjectsFields_Position_Update>;
};

export type ProjectsFields_Position_Create = {
  __typename?: 'ProjectsFields_position_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Position_Delete = {
  __typename?: 'ProjectsFields_position_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Position_Read = {
  __typename?: 'ProjectsFields_position_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Position_Update = {
  __typename?: 'ProjectsFields_position_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug = {
  __typename?: 'ProjectsFields_slug';
  create?: Maybe<ProjectsFields_Slug_Create>;
  delete?: Maybe<ProjectsFields_Slug_Delete>;
  read?: Maybe<ProjectsFields_Slug_Read>;
  update?: Maybe<ProjectsFields_Slug_Update>;
};

export type ProjectsFields_Slug_Create = {
  __typename?: 'ProjectsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Delete = {
  __typename?: 'ProjectsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Read = {
  __typename?: 'ProjectsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Update = {
  __typename?: 'ProjectsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Thumbnail = {
  __typename?: 'ProjectsFields_thumbnail';
  create?: Maybe<ProjectsFields_Thumbnail_Create>;
  delete?: Maybe<ProjectsFields_Thumbnail_Delete>;
  read?: Maybe<ProjectsFields_Thumbnail_Read>;
  update?: Maybe<ProjectsFields_Thumbnail_Update>;
};

export type ProjectsFields_Thumbnail_Create = {
  __typename?: 'ProjectsFields_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Thumbnail_Delete = {
  __typename?: 'ProjectsFields_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Thumbnail_Read = {
  __typename?: 'ProjectsFields_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Thumbnail_Update = {
  __typename?: 'ProjectsFields_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time = {
  __typename?: 'ProjectsFields_time';
  create?: Maybe<ProjectsFields_Time_Create>;
  delete?: Maybe<ProjectsFields_Time_Delete>;
  fields?: Maybe<ProjectsFields_Time_Fields>;
  read?: Maybe<ProjectsFields_Time_Read>;
  update?: Maybe<ProjectsFields_Time_Update>;
};

export type ProjectsFields_Time_Create = {
  __typename?: 'ProjectsFields_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_Delete = {
  __typename?: 'ProjectsFields_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_Fields = {
  __typename?: 'ProjectsFields_time_Fields';
  endingTime?: Maybe<ProjectsFields_Time_EndingTime>;
  startingTime?: Maybe<ProjectsFields_Time_StartingTime>;
};

export type ProjectsFields_Time_Read = {
  __typename?: 'ProjectsFields_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_Update = {
  __typename?: 'ProjectsFields_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_EndingTime = {
  __typename?: 'ProjectsFields_time_endingTime';
  create?: Maybe<ProjectsFields_Time_EndingTime_Create>;
  delete?: Maybe<ProjectsFields_Time_EndingTime_Delete>;
  read?: Maybe<ProjectsFields_Time_EndingTime_Read>;
  update?: Maybe<ProjectsFields_Time_EndingTime_Update>;
};

export type ProjectsFields_Time_EndingTime_Create = {
  __typename?: 'ProjectsFields_time_endingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_EndingTime_Delete = {
  __typename?: 'ProjectsFields_time_endingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_EndingTime_Read = {
  __typename?: 'ProjectsFields_time_endingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_EndingTime_Update = {
  __typename?: 'ProjectsFields_time_endingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_StartingTime = {
  __typename?: 'ProjectsFields_time_startingTime';
  create?: Maybe<ProjectsFields_Time_StartingTime_Create>;
  delete?: Maybe<ProjectsFields_Time_StartingTime_Delete>;
  read?: Maybe<ProjectsFields_Time_StartingTime_Read>;
  update?: Maybe<ProjectsFields_Time_StartingTime_Update>;
};

export type ProjectsFields_Time_StartingTime_Create = {
  __typename?: 'ProjectsFields_time_startingTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_StartingTime_Delete = {
  __typename?: 'ProjectsFields_time_startingTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_StartingTime_Read = {
  __typename?: 'ProjectsFields_time_startingTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Time_StartingTime_Update = {
  __typename?: 'ProjectsFields_time_startingTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Tools = {
  __typename?: 'ProjectsFields_tools';
  create?: Maybe<ProjectsFields_Tools_Create>;
  delete?: Maybe<ProjectsFields_Tools_Delete>;
  read?: Maybe<ProjectsFields_Tools_Read>;
  update?: Maybe<ProjectsFields_Tools_Update>;
};

export type ProjectsFields_Tools_Create = {
  __typename?: 'ProjectsFields_tools_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Tools_Delete = {
  __typename?: 'ProjectsFields_tools_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Tools_Read = {
  __typename?: 'ProjectsFields_tools_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Tools_Update = {
  __typename?: 'ProjectsFields_tools_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt = {
  __typename?: 'ProjectsFields_updatedAt';
  create?: Maybe<ProjectsFields_UpdatedAt_Create>;
  delete?: Maybe<ProjectsFields_UpdatedAt_Delete>;
  read?: Maybe<ProjectsFields_UpdatedAt_Read>;
  update?: Maybe<ProjectsFields_UpdatedAt_Update>;
};

export type ProjectsFields_UpdatedAt_Create = {
  __typename?: 'ProjectsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Delete = {
  __typename?: 'ProjectsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Read = {
  __typename?: 'ProjectsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Update = {
  __typename?: 'ProjectsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProjectsReadAccess = {
  __typename?: 'ProjectsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsReadDocAccess = {
  __typename?: 'ProjectsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsReadVersionsAccess = {
  __typename?: 'ProjectsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsReadVersionsDocAccess = {
  __typename?: 'ProjectsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsUpdateAccess = {
  __typename?: 'ProjectsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsUpdateDocAccess = {
  __typename?: 'ProjectsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Experience?: Maybe<Experience>;
  Experiences?: Maybe<Experiences>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Project?: Maybe<Project>;
  Projects?: Maybe<Projects>;
  SocialMedia?: Maybe<SocialMedia>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countExperiences?: Maybe<CountExperiences>;
  countPages?: Maybe<CountPages>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countProjects?: Maybe<CountProjects>;
  countTags?: Maybe<CountTags>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessExperience?: Maybe<ExperienceDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PagesDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessProject?: Maybe<ProjectsDocAccess>;
  docAccessSocialMedia?: Maybe<Social_MediaDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
  versionExperience?: Maybe<ExperienceVersion>;
  versionPage?: Maybe<PageVersion>;
  versionProject?: Maybe<ProjectVersion>;
  versionsExperiences?: Maybe<VersionsExperiences>;
  versionsPages?: Maybe<VersionsPages>;
  versionsProjects?: Maybe<VersionsProjects>;
};


export type QueryExperienceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryExperiencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Experience_Where>;
};


export type QueryMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryProjectArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryProjectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Project_Where>;
};


export type QuerySocialMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountExperiencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Experience_Where>;
};


export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountProjectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Project_Where>;
};


export type QueryCountTagsArgs = {
  where?: InputMaybe<Tag_Where>;
};


export type QueryCountUsersArgs = {
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVersionExperienceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVersionPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVersionProjectArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVersionsExperiencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsExperience_Where>;
};


export type QueryVersionsPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsPage_Where>;
};


export type QueryVersionsProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsProject_Where>;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icons?: Maybe<Array<SocialMedia_Icons>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SocialMediaDocAccessFields = {
  __typename?: 'SocialMediaDocAccessFields';
  createdAt?: Maybe<SocialMediaDocAccessFields_CreatedAt>;
  icons?: Maybe<SocialMediaDocAccessFields_Icons>;
  updatedAt?: Maybe<SocialMediaDocAccessFields_UpdatedAt>;
};

export type SocialMediaDocAccessFields_CreatedAt = {
  __typename?: 'SocialMediaDocAccessFields_createdAt';
  create?: Maybe<SocialMediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SocialMediaDocAccessFields_CreatedAt_Update>;
};

export type SocialMediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'SocialMediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SocialMediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'SocialMediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'SocialMediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons = {
  __typename?: 'SocialMediaDocAccessFields_icons';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Delete>;
  fields?: Maybe<SocialMediaDocAccessFields_Icons_Fields>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Update>;
};

export type SocialMediaDocAccessFields_Icons_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Fields = {
  __typename?: 'SocialMediaDocAccessFields_icons_Fields';
  icon?: Maybe<SocialMediaDocAccessFields_Icons_Icon>;
  id?: Maybe<SocialMediaDocAccessFields_Icons_Id>;
};

export type SocialMediaDocAccessFields_Icons_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Delete>;
  fields?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Fields>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Update>;
};

export type SocialMediaDocAccessFields_Icons_Icon_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Fields = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_Fields';
  image?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Image>;
  link?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Link>;
  title?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Title>;
};

export type SocialMediaDocAccessFields_Icons_Icon_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Image = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_image';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Image_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Image_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Image_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Image_Update>;
};

export type SocialMediaDocAccessFields_Icons_Icon_Image_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Image_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Image_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Image_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Link = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_link';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Link_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Link_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Link_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Link_Update>;
};

export type SocialMediaDocAccessFields_Icons_Icon_Link_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Link_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Link_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Link_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Title = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_title';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Title_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Title_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Title_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Icon_Title_Update>;
};

export type SocialMediaDocAccessFields_Icons_Icon_Title_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Title_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Title_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Icon_Title_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_icon_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Id = {
  __typename?: 'SocialMediaDocAccessFields_icons_id';
  create?: Maybe<SocialMediaDocAccessFields_Icons_Id_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_Icons_Id_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_Icons_Id_Read>;
  update?: Maybe<SocialMediaDocAccessFields_Icons_Id_Update>;
};

export type SocialMediaDocAccessFields_Icons_Id_Create = {
  __typename?: 'SocialMediaDocAccessFields_icons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Id_Delete = {
  __typename?: 'SocialMediaDocAccessFields_icons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Id_Read = {
  __typename?: 'SocialMediaDocAccessFields_icons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_Icons_Id_Update = {
  __typename?: 'SocialMediaDocAccessFields_icons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_UpdatedAt = {
  __typename?: 'SocialMediaDocAccessFields_updatedAt';
  create?: Maybe<SocialMediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SocialMediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SocialMediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SocialMediaDocAccessFields_UpdatedAt_Update>;
};

export type SocialMediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SocialMediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SocialMediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SocialMediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SocialMediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields = {
  __typename?: 'SocialMediaFields';
  createdAt?: Maybe<SocialMediaFields_CreatedAt>;
  icons?: Maybe<SocialMediaFields_Icons>;
  updatedAt?: Maybe<SocialMediaFields_UpdatedAt>;
};

export type SocialMediaFields_CreatedAt = {
  __typename?: 'SocialMediaFields_createdAt';
  create?: Maybe<SocialMediaFields_CreatedAt_Create>;
  delete?: Maybe<SocialMediaFields_CreatedAt_Delete>;
  read?: Maybe<SocialMediaFields_CreatedAt_Read>;
  update?: Maybe<SocialMediaFields_CreatedAt_Update>;
};

export type SocialMediaFields_CreatedAt_Create = {
  __typename?: 'SocialMediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_CreatedAt_Delete = {
  __typename?: 'SocialMediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_CreatedAt_Read = {
  __typename?: 'SocialMediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_CreatedAt_Update = {
  __typename?: 'SocialMediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons = {
  __typename?: 'SocialMediaFields_icons';
  create?: Maybe<SocialMediaFields_Icons_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Delete>;
  fields?: Maybe<SocialMediaFields_Icons_Fields>;
  read?: Maybe<SocialMediaFields_Icons_Read>;
  update?: Maybe<SocialMediaFields_Icons_Update>;
};

export type SocialMediaFields_Icons_Create = {
  __typename?: 'SocialMediaFields_icons_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Delete = {
  __typename?: 'SocialMediaFields_icons_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Fields = {
  __typename?: 'SocialMediaFields_icons_Fields';
  icon?: Maybe<SocialMediaFields_Icons_Icon>;
  id?: Maybe<SocialMediaFields_Icons_Id>;
};

export type SocialMediaFields_Icons_Read = {
  __typename?: 'SocialMediaFields_icons_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Update = {
  __typename?: 'SocialMediaFields_icons_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon = {
  __typename?: 'SocialMediaFields_icons_icon';
  create?: Maybe<SocialMediaFields_Icons_Icon_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Icon_Delete>;
  fields?: Maybe<SocialMediaFields_Icons_Icon_Fields>;
  read?: Maybe<SocialMediaFields_Icons_Icon_Read>;
  update?: Maybe<SocialMediaFields_Icons_Icon_Update>;
};

export type SocialMediaFields_Icons_Icon_Create = {
  __typename?: 'SocialMediaFields_icons_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Delete = {
  __typename?: 'SocialMediaFields_icons_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Fields = {
  __typename?: 'SocialMediaFields_icons_icon_Fields';
  image?: Maybe<SocialMediaFields_Icons_Icon_Image>;
  link?: Maybe<SocialMediaFields_Icons_Icon_Link>;
  title?: Maybe<SocialMediaFields_Icons_Icon_Title>;
};

export type SocialMediaFields_Icons_Icon_Read = {
  __typename?: 'SocialMediaFields_icons_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Update = {
  __typename?: 'SocialMediaFields_icons_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Image = {
  __typename?: 'SocialMediaFields_icons_icon_image';
  create?: Maybe<SocialMediaFields_Icons_Icon_Image_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Icon_Image_Delete>;
  read?: Maybe<SocialMediaFields_Icons_Icon_Image_Read>;
  update?: Maybe<SocialMediaFields_Icons_Icon_Image_Update>;
};

export type SocialMediaFields_Icons_Icon_Image_Create = {
  __typename?: 'SocialMediaFields_icons_icon_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Image_Delete = {
  __typename?: 'SocialMediaFields_icons_icon_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Image_Read = {
  __typename?: 'SocialMediaFields_icons_icon_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Image_Update = {
  __typename?: 'SocialMediaFields_icons_icon_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Link = {
  __typename?: 'SocialMediaFields_icons_icon_link';
  create?: Maybe<SocialMediaFields_Icons_Icon_Link_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Icon_Link_Delete>;
  read?: Maybe<SocialMediaFields_Icons_Icon_Link_Read>;
  update?: Maybe<SocialMediaFields_Icons_Icon_Link_Update>;
};

export type SocialMediaFields_Icons_Icon_Link_Create = {
  __typename?: 'SocialMediaFields_icons_icon_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Link_Delete = {
  __typename?: 'SocialMediaFields_icons_icon_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Link_Read = {
  __typename?: 'SocialMediaFields_icons_icon_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Link_Update = {
  __typename?: 'SocialMediaFields_icons_icon_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Title = {
  __typename?: 'SocialMediaFields_icons_icon_title';
  create?: Maybe<SocialMediaFields_Icons_Icon_Title_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Icon_Title_Delete>;
  read?: Maybe<SocialMediaFields_Icons_Icon_Title_Read>;
  update?: Maybe<SocialMediaFields_Icons_Icon_Title_Update>;
};

export type SocialMediaFields_Icons_Icon_Title_Create = {
  __typename?: 'SocialMediaFields_icons_icon_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Title_Delete = {
  __typename?: 'SocialMediaFields_icons_icon_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Title_Read = {
  __typename?: 'SocialMediaFields_icons_icon_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Icon_Title_Update = {
  __typename?: 'SocialMediaFields_icons_icon_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Id = {
  __typename?: 'SocialMediaFields_icons_id';
  create?: Maybe<SocialMediaFields_Icons_Id_Create>;
  delete?: Maybe<SocialMediaFields_Icons_Id_Delete>;
  read?: Maybe<SocialMediaFields_Icons_Id_Read>;
  update?: Maybe<SocialMediaFields_Icons_Id_Update>;
};

export type SocialMediaFields_Icons_Id_Create = {
  __typename?: 'SocialMediaFields_icons_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Id_Delete = {
  __typename?: 'SocialMediaFields_icons_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Id_Read = {
  __typename?: 'SocialMediaFields_icons_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_Icons_Id_Update = {
  __typename?: 'SocialMediaFields_icons_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_UpdatedAt = {
  __typename?: 'SocialMediaFields_updatedAt';
  create?: Maybe<SocialMediaFields_UpdatedAt_Create>;
  delete?: Maybe<SocialMediaFields_UpdatedAt_Delete>;
  read?: Maybe<SocialMediaFields_UpdatedAt_Read>;
  update?: Maybe<SocialMediaFields_UpdatedAt_Update>;
};

export type SocialMediaFields_UpdatedAt_Create = {
  __typename?: 'SocialMediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_UpdatedAt_Delete = {
  __typename?: 'SocialMediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_UpdatedAt_Read = {
  __typename?: 'SocialMediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaFields_UpdatedAt_Update = {
  __typename?: 'SocialMediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SocialMediaReadAccess = {
  __typename?: 'SocialMediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialMediaReadDocAccess = {
  __typename?: 'SocialMediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialMediaUpdateAccess = {
  __typename?: 'SocialMediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialMediaUpdateDocAccess = {
  __typename?: 'SocialMediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialMedia_Icons = {
  __typename?: 'SocialMedia_Icons';
  icon?: Maybe<SocialMedia_Icons_Icon>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SocialMedia_Icons_Icon = {
  __typename?: 'SocialMedia_Icons_Icon';
  image?: Maybe<Media>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SocialMedia_Icons_IconImageArgs = {
  where?: InputMaybe<SocialMedia_Icons_Icon_Image_Where>;
};

export type SocialMedia_Icons_Icon_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMedia_Icons_Icon_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SocialMedia_Icons_Icon_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMedia_Icons_Icon_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SocialMedia_Icons_Icon_Image_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SocialMedia_Icons_Icon_Image_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SocialMedia_Icons_Icon_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type SocialMedia_Icons_Icon_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMedia_Icons_Icon_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMedia_Icons_Icon_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SocialMedia_Icons_Icon_Image_Type_Input {
  Image = 'image',
  Pdf = 'pdf'
}

export type SocialMedia_Icons_Icon_Image_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Type_Input>>>;
  equals?: InputMaybe<SocialMedia_Icons_Icon_Image_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Type_Input>>>;
  not_equals?: InputMaybe<SocialMedia_Icons_Icon_Image_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Type_Input>>>;
};

export type SocialMedia_Icons_Icon_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SocialMedia_Icons_Icon_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMedia_Icons_Icon_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_Or>>>;
  alt?: InputMaybe<SocialMedia_Icons_Icon_Image_Alt_Operator>;
  createdAt?: InputMaybe<SocialMedia_Icons_Icon_Image_CreatedAt_Operator>;
  filename?: InputMaybe<SocialMedia_Icons_Icon_Image_Filename_Operator>;
  filesize?: InputMaybe<SocialMedia_Icons_Icon_Image_Filesize_Operator>;
  focalX?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalX_Operator>;
  focalY?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalY_Operator>;
  height?: InputMaybe<SocialMedia_Icons_Icon_Image_Height_Operator>;
  id?: InputMaybe<SocialMedia_Icons_Icon_Image_Id_Operator>;
  mimeType?: InputMaybe<SocialMedia_Icons_Icon_Image_MimeType_Operator>;
  title?: InputMaybe<SocialMedia_Icons_Icon_Image_Title_Operator>;
  type?: InputMaybe<SocialMedia_Icons_Icon_Image_Type_Operator>;
  updatedAt?: InputMaybe<SocialMedia_Icons_Icon_Image_UpdatedAt_Operator>;
  url?: InputMaybe<SocialMedia_Icons_Icon_Image_Url_Operator>;
  width?: InputMaybe<SocialMedia_Icons_Icon_Image_Width_Operator>;
};

export type SocialMedia_Icons_Icon_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_Or>>>;
  alt?: InputMaybe<SocialMedia_Icons_Icon_Image_Alt_Operator>;
  createdAt?: InputMaybe<SocialMedia_Icons_Icon_Image_CreatedAt_Operator>;
  filename?: InputMaybe<SocialMedia_Icons_Icon_Image_Filename_Operator>;
  filesize?: InputMaybe<SocialMedia_Icons_Icon_Image_Filesize_Operator>;
  focalX?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalX_Operator>;
  focalY?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalY_Operator>;
  height?: InputMaybe<SocialMedia_Icons_Icon_Image_Height_Operator>;
  id?: InputMaybe<SocialMedia_Icons_Icon_Image_Id_Operator>;
  mimeType?: InputMaybe<SocialMedia_Icons_Icon_Image_MimeType_Operator>;
  title?: InputMaybe<SocialMedia_Icons_Icon_Image_Title_Operator>;
  type?: InputMaybe<SocialMedia_Icons_Icon_Image_Type_Operator>;
  updatedAt?: InputMaybe<SocialMedia_Icons_Icon_Image_UpdatedAt_Operator>;
  url?: InputMaybe<SocialMedia_Icons_Icon_Image_Url_Operator>;
  width?: InputMaybe<SocialMedia_Icons_Icon_Image_Width_Operator>;
};

export type SocialMedia_Icons_Icon_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMedia_Icons_Icon_Image_Where_Or>>>;
  alt?: InputMaybe<SocialMedia_Icons_Icon_Image_Alt_Operator>;
  createdAt?: InputMaybe<SocialMedia_Icons_Icon_Image_CreatedAt_Operator>;
  filename?: InputMaybe<SocialMedia_Icons_Icon_Image_Filename_Operator>;
  filesize?: InputMaybe<SocialMedia_Icons_Icon_Image_Filesize_Operator>;
  focalX?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalX_Operator>;
  focalY?: InputMaybe<SocialMedia_Icons_Icon_Image_FocalY_Operator>;
  height?: InputMaybe<SocialMedia_Icons_Icon_Image_Height_Operator>;
  id?: InputMaybe<SocialMedia_Icons_Icon_Image_Id_Operator>;
  mimeType?: InputMaybe<SocialMedia_Icons_Icon_Image_MimeType_Operator>;
  title?: InputMaybe<SocialMedia_Icons_Icon_Image_Title_Operator>;
  type?: InputMaybe<SocialMedia_Icons_Icon_Image_Type_Operator>;
  updatedAt?: InputMaybe<SocialMedia_Icons_Icon_Image_UpdatedAt_Operator>;
  url?: InputMaybe<SocialMedia_Icons_Icon_Image_Url_Operator>;
  width?: InputMaybe<SocialMedia_Icons_Icon_Image_Width_Operator>;
};

export type SocialMedia_Icons_Icon_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Tag_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  title?: InputMaybe<Tag_Title_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  title?: InputMaybe<Tag_Title_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  title?: InputMaybe<Tag_Title_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs?: Maybe<Array<Maybe<Tag>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  title?: Maybe<TagsDocAccessFields_Title>;
  updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Title = {
  __typename?: 'TagsDocAccessFields_title';
  create?: Maybe<TagsDocAccessFields_Title_Create>;
  delete?: Maybe<TagsDocAccessFields_Title_Delete>;
  read?: Maybe<TagsDocAccessFields_Title_Read>;
  update?: Maybe<TagsDocAccessFields_Title_Update>;
};

export type TagsDocAccessFields_Title_Create = {
  __typename?: 'TagsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Title_Delete = {
  __typename?: 'TagsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Title_Read = {
  __typename?: 'TagsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Title_Update = {
  __typename?: 'TagsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_CreatedAt>;
  title?: Maybe<TagsFields_Title>;
  updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_CreatedAt_Create>;
  delete?: Maybe<TagsFields_CreatedAt_Delete>;
  read?: Maybe<TagsFields_CreatedAt_Read>;
  update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Title = {
  __typename?: 'TagsFields_title';
  create?: Maybe<TagsFields_Title_Create>;
  delete?: Maybe<TagsFields_Title_Delete>;
  read?: Maybe<TagsFields_Title_Read>;
  update?: Maybe<TagsFields_Title_Update>;
};

export type TagsFields_Title_Create = {
  __typename?: 'TagsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Title_Delete = {
  __typename?: 'TagsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Title_Read = {
  __typename?: 'TagsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Title_Update = {
  __typename?: 'TagsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_UpdatedAt_Create>;
  delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  read?: Maybe<TagsFields_UpdatedAt_Read>;
  update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  _verificationToken?: Maybe<Scalars['String']['output']>;
  _verified?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserAvatarArgs = {
  where?: InputMaybe<User_Avatar_Where>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_Avatar_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Avatar_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Avatar_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Avatar_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Avatar_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Avatar_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Avatar_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Avatar_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Avatar_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Avatar_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Avatar_Type_Input {
  Image = 'image',
  Pdf = 'pdf'
}

export type User_Avatar_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Avatar_Type_Input>>>;
  equals?: InputMaybe<User_Avatar_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Avatar_Type_Input>>>;
  not_equals?: InputMaybe<User_Avatar_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Avatar_Type_Input>>>;
};

export type User_Avatar_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Avatar_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Avatar_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Avatar_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Avatar_Where_Or>>>;
  alt?: InputMaybe<User_Avatar_Alt_Operator>;
  createdAt?: InputMaybe<User_Avatar_CreatedAt_Operator>;
  filename?: InputMaybe<User_Avatar_Filename_Operator>;
  filesize?: InputMaybe<User_Avatar_Filesize_Operator>;
  focalX?: InputMaybe<User_Avatar_FocalX_Operator>;
  focalY?: InputMaybe<User_Avatar_FocalY_Operator>;
  height?: InputMaybe<User_Avatar_Height_Operator>;
  id?: InputMaybe<User_Avatar_Id_Operator>;
  mimeType?: InputMaybe<User_Avatar_MimeType_Operator>;
  title?: InputMaybe<User_Avatar_Title_Operator>;
  type?: InputMaybe<User_Avatar_Type_Operator>;
  updatedAt?: InputMaybe<User_Avatar_UpdatedAt_Operator>;
  url?: InputMaybe<User_Avatar_Url_Operator>;
  width?: InputMaybe<User_Avatar_Width_Operator>;
};

export type User_Avatar_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Avatar_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Avatar_Where_Or>>>;
  alt?: InputMaybe<User_Avatar_Alt_Operator>;
  createdAt?: InputMaybe<User_Avatar_CreatedAt_Operator>;
  filename?: InputMaybe<User_Avatar_Filename_Operator>;
  filesize?: InputMaybe<User_Avatar_Filesize_Operator>;
  focalX?: InputMaybe<User_Avatar_FocalX_Operator>;
  focalY?: InputMaybe<User_Avatar_FocalY_Operator>;
  height?: InputMaybe<User_Avatar_Height_Operator>;
  id?: InputMaybe<User_Avatar_Id_Operator>;
  mimeType?: InputMaybe<User_Avatar_MimeType_Operator>;
  title?: InputMaybe<User_Avatar_Title_Operator>;
  type?: InputMaybe<User_Avatar_Type_Operator>;
  updatedAt?: InputMaybe<User_Avatar_UpdatedAt_Operator>;
  url?: InputMaybe<User_Avatar_Url_Operator>;
  width?: InputMaybe<User_Avatar_Width_Operator>;
};

export type User_Avatar_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Avatar_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Avatar_Where_Or>>>;
  alt?: InputMaybe<User_Avatar_Alt_Operator>;
  createdAt?: InputMaybe<User_Avatar_CreatedAt_Operator>;
  filename?: InputMaybe<User_Avatar_Filename_Operator>;
  filesize?: InputMaybe<User_Avatar_Filesize_Operator>;
  focalX?: InputMaybe<User_Avatar_FocalX_Operator>;
  focalY?: InputMaybe<User_Avatar_FocalY_Operator>;
  height?: InputMaybe<User_Avatar_Height_Operator>;
  id?: InputMaybe<User_Avatar_Id_Operator>;
  mimeType?: InputMaybe<User_Avatar_MimeType_Operator>;
  title?: InputMaybe<User_Avatar_Title_Operator>;
  type?: InputMaybe<User_Avatar_Type_Operator>;
  updatedAt?: InputMaybe<User_Avatar_UpdatedAt_Operator>;
  url?: InputMaybe<User_Avatar_Url_Operator>;
  width?: InputMaybe<User_Avatar_Width_Operator>;
};

export type User_Avatar_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User__Verified_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Avatar_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  User = 'user'
}

export enum User_Roles_Input {
  Admin = 'admin',
  User = 'user'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  _verified?: Maybe<UsersDocAccessFields__Verified>;
  avatar?: Maybe<UsersDocAccessFields_Avatar>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  firstName?: Maybe<UsersDocAccessFields_FirstName>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  password?: Maybe<UsersDocAccessFields_Password>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields__Verified = {
  __typename?: 'UsersDocAccessFields__verified';
  create?: Maybe<UsersDocAccessFields__Verified_Create>;
  delete?: Maybe<UsersDocAccessFields__Verified_Delete>;
  read?: Maybe<UsersDocAccessFields__Verified_Read>;
  update?: Maybe<UsersDocAccessFields__Verified_Update>;
};

export type UsersDocAccessFields__Verified_Create = {
  __typename?: 'UsersDocAccessFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Delete = {
  __typename?: 'UsersDocAccessFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Read = {
  __typename?: 'UsersDocAccessFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Update = {
  __typename?: 'UsersDocAccessFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar = {
  __typename?: 'UsersDocAccessFields_avatar';
  create?: Maybe<UsersDocAccessFields_Avatar_Create>;
  delete?: Maybe<UsersDocAccessFields_Avatar_Delete>;
  read?: Maybe<UsersDocAccessFields_Avatar_Read>;
  update?: Maybe<UsersDocAccessFields_Avatar_Update>;
};

export type UsersDocAccessFields_Avatar_Create = {
  __typename?: 'UsersDocAccessFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Delete = {
  __typename?: 'UsersDocAccessFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Read = {
  __typename?: 'UsersDocAccessFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Update = {
  __typename?: 'UsersDocAccessFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName = {
  __typename?: 'UsersDocAccessFields_firstName';
  create?: Maybe<UsersDocAccessFields_FirstName_Create>;
  delete?: Maybe<UsersDocAccessFields_FirstName_Delete>;
  read?: Maybe<UsersDocAccessFields_FirstName_Read>;
  update?: Maybe<UsersDocAccessFields_FirstName_Update>;
};

export type UsersDocAccessFields_FirstName_Create = {
  __typename?: 'UsersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Delete = {
  __typename?: 'UsersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Read = {
  __typename?: 'UsersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Update = {
  __typename?: 'UsersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  _verified?: Maybe<UsersFields__Verified>;
  avatar?: Maybe<UsersFields_Avatar>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  firstName?: Maybe<UsersFields_FirstName>;
  lastName?: Maybe<UsersFields_LastName>;
  password?: Maybe<UsersFields_Password>;
  roles?: Maybe<UsersFields_Roles>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields__Verified = {
  __typename?: 'UsersFields__verified';
  create?: Maybe<UsersFields__Verified_Create>;
  delete?: Maybe<UsersFields__Verified_Delete>;
  read?: Maybe<UsersFields__Verified_Read>;
  update?: Maybe<UsersFields__Verified_Update>;
};

export type UsersFields__Verified_Create = {
  __typename?: 'UsersFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Delete = {
  __typename?: 'UsersFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Read = {
  __typename?: 'UsersFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Update = {
  __typename?: 'UsersFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar = {
  __typename?: 'UsersFields_avatar';
  create?: Maybe<UsersFields_Avatar_Create>;
  delete?: Maybe<UsersFields_Avatar_Delete>;
  read?: Maybe<UsersFields_Avatar_Read>;
  update?: Maybe<UsersFields_Avatar_Update>;
};

export type UsersFields_Avatar_Create = {
  __typename?: 'UsersFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Delete = {
  __typename?: 'UsersFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Read = {
  __typename?: 'UsersFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Update = {
  __typename?: 'UsersFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName = {
  __typename?: 'UsersFields_firstName';
  create?: Maybe<UsersFields_FirstName_Create>;
  delete?: Maybe<UsersFields_FirstName_Delete>;
  read?: Maybe<UsersFields_FirstName_Read>;
  update?: Maybe<UsersFields_FirstName_Update>;
};

export type UsersFields_FirstName_Create = {
  __typename?: 'UsersFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Delete = {
  __typename?: 'UsersFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Read = {
  __typename?: 'UsersFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Update = {
  __typename?: 'UsersFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CountExperiences = {
  __typename?: 'countExperiences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountProjects = {
  __typename?: 'countProjects';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTags = {
  __typename?: 'countTags';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ExperienceAccess = {
  __typename?: 'experienceAccess';
  create?: Maybe<ExperienceCreateAccess>;
  delete?: Maybe<ExperienceDeleteAccess>;
  fields?: Maybe<ExperienceFields>;
  read?: Maybe<ExperienceReadAccess>;
  readVersions?: Maybe<ExperienceReadVersionsAccess>;
  update?: Maybe<ExperienceUpdateAccess>;
};

export type ExperienceDocAccess = {
  __typename?: 'experienceDocAccess';
  create?: Maybe<ExperienceCreateDocAccess>;
  delete?: Maybe<ExperienceDeleteDocAccess>;
  fields?: Maybe<ExperienceDocAccessFields>;
  read?: Maybe<ExperienceReadDocAccess>;
  readVersions?: Maybe<ExperienceReadVersionsDocAccess>;
  update?: Maybe<ExperienceUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationExperienceInput = {
  _status?: InputMaybe<Experience__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Array<InputMaybe<Experience_Position_MutationInput>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug: Scalars['String']['input'];
  time?: InputMaybe<MutationExperience_TimeInput>;
  title: Scalars['String']['input'];
  tools?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdateInput = {
  _status?: InputMaybe<ExperienceUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Array<InputMaybe<ExperienceUpdate_Position_MutationInput>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<MutationExperienceUpdate_TimeInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  tools?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperienceUpdate_TimeInput = {
  endingTime?: InputMaybe<Scalars['String']['input']>;
  startingTime?: InputMaybe<Scalars['String']['input']>;
};

export type MutationExperience_TimeInput = {
  endingTime?: InputMaybe<Scalars['String']['input']>;
  startingTime?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type: Media_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  hero: MutationPage_HeroInput;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  hero: MutationPageUpdate_HeroInput;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_HeroInput = {
  description: Scalars['String']['input'];
  subDescription?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationPage_HeroInput = {
  description: Scalars['String']['input'];
  subDescription?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProjectInput = {
  _status?: InputMaybe<Project__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Array<InputMaybe<Project_Position_MutationInput>>>;
  slug: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<MutationProject_TimeInput>;
  tools?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdateInput = {
  _status?: InputMaybe<ProjectUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Array<InputMaybe<ProjectUpdate_Position_MutationInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<MutationProjectUpdate_TimeInput>;
  tools?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdate_TimeInput = {
  endingTime?: InputMaybe<Scalars['String']['input']>;
  startingTime?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProject_TimeInput = {
  endingTime?: InputMaybe<Scalars['String']['input']>;
  startingTime?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialMediaInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  icons?: InputMaybe<Array<InputMaybe<MutationSocialMedia_IconsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialMedia_IconsInput = {
  icon: MutationSocialMedia_Icons_IconInput;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialMedia_Icons_IconInput = {
  image: Scalars['String']['input'];
  link: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<User_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  readVersions?: Maybe<PagesReadVersionsAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  readVersions?: Maybe<PagesReadVersionsDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type ProjectsAccess = {
  __typename?: 'projectsAccess';
  create?: Maybe<ProjectsCreateAccess>;
  delete?: Maybe<ProjectsDeleteAccess>;
  fields?: Maybe<ProjectsFields>;
  read?: Maybe<ProjectsReadAccess>;
  readVersions?: Maybe<ProjectsReadVersionsAccess>;
  update?: Maybe<ProjectsUpdateAccess>;
};

export type ProjectsDocAccess = {
  __typename?: 'projectsDocAccess';
  create?: Maybe<ProjectsCreateDocAccess>;
  delete?: Maybe<ProjectsDeleteDocAccess>;
  fields?: Maybe<ProjectsDocAccessFields>;
  read?: Maybe<ProjectsReadDocAccess>;
  readVersions?: Maybe<ProjectsReadVersionsDocAccess>;
  update?: Maybe<ProjectsUpdateDocAccess>;
};

export type Social_MediaAccess = {
  __typename?: 'social_mediaAccess';
  fields?: Maybe<SocialMediaFields>;
  read?: Maybe<SocialMediaReadAccess>;
  update?: Maybe<SocialMediaUpdateAccess>;
};

export type Social_MediaDocAccess = {
  __typename?: 'social_mediaDocAccess';
  fields?: Maybe<SocialMediaDocAccessFields>;
  read?: Maybe<SocialMediaReadDocAccess>;
  update?: Maybe<SocialMediaUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VersionsExperience_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsExperience_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsExperience_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsExperience_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsExperience_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsExperience_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsExperience_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsExperience_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsExperience_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsExperience_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsExperience_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsExperience_Version___Status_Input>>>;
};

export type VersionsExperience_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsExperience_Version__Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum VersionsExperience_Version__Position_Input {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type VersionsExperience_Version__Position_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsExperience_Version__Position_Input>>>;
  equals?: InputMaybe<VersionsExperience_Version__Position_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsExperience_Version__Position_Input>>>;
  not_equals?: InputMaybe<VersionsExperience_Version__Position_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsExperience_Version__Position_Input>>>;
};

export type VersionsExperience_Version__Projects_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsExperience_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsExperience_Version__Time__EndingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsExperience_Version__Time__StartingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsExperience_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsExperience_Version__Tools_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsExperience_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsExperience_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_Or>>>;
  createdAt?: InputMaybe<VersionsExperience_CreatedAt_Operator>;
  id?: InputMaybe<VersionsExperience_Id_Operator>;
  latest?: InputMaybe<VersionsExperience_Latest_Operator>;
  parent?: InputMaybe<VersionsExperience_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsExperience_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsExperience_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsExperience_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsExperience_Version__Description_Operator>;
  version__position?: InputMaybe<VersionsExperience_Version__Position_Operator>;
  version__projects?: InputMaybe<VersionsExperience_Version__Projects_Operator>;
  version__slug?: InputMaybe<VersionsExperience_Version__Slug_Operator>;
  version__time__endingTime?: InputMaybe<VersionsExperience_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsExperience_Version__Time__StartingTime_Operator>;
  version__title?: InputMaybe<VersionsExperience_Version__Title_Operator>;
  version__tools?: InputMaybe<VersionsExperience_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsExperience_Version__UpdatedAt_Operator>;
};

export type VersionsExperience_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_Or>>>;
  createdAt?: InputMaybe<VersionsExperience_CreatedAt_Operator>;
  id?: InputMaybe<VersionsExperience_Id_Operator>;
  latest?: InputMaybe<VersionsExperience_Latest_Operator>;
  parent?: InputMaybe<VersionsExperience_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsExperience_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsExperience_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsExperience_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsExperience_Version__Description_Operator>;
  version__position?: InputMaybe<VersionsExperience_Version__Position_Operator>;
  version__projects?: InputMaybe<VersionsExperience_Version__Projects_Operator>;
  version__slug?: InputMaybe<VersionsExperience_Version__Slug_Operator>;
  version__time__endingTime?: InputMaybe<VersionsExperience_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsExperience_Version__Time__StartingTime_Operator>;
  version__title?: InputMaybe<VersionsExperience_Version__Title_Operator>;
  version__tools?: InputMaybe<VersionsExperience_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsExperience_Version__UpdatedAt_Operator>;
};

export type VersionsExperience_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsExperience_Where_Or>>>;
  createdAt?: InputMaybe<VersionsExperience_CreatedAt_Operator>;
  id?: InputMaybe<VersionsExperience_Id_Operator>;
  latest?: InputMaybe<VersionsExperience_Latest_Operator>;
  parent?: InputMaybe<VersionsExperience_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsExperience_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsExperience_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsExperience_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsExperience_Version__Description_Operator>;
  version__position?: InputMaybe<VersionsExperience_Version__Position_Operator>;
  version__projects?: InputMaybe<VersionsExperience_Version__Projects_Operator>;
  version__slug?: InputMaybe<VersionsExperience_Version__Slug_Operator>;
  version__time__endingTime?: InputMaybe<VersionsExperience_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsExperience_Version__Time__StartingTime_Operator>;
  version__title?: InputMaybe<VersionsExperience_Version__Title_Operator>;
  version__tools?: InputMaybe<VersionsExperience_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsExperience_Version__UpdatedAt_Operator>;
};

export type VersionsExperiences = {
  __typename?: 'versionsExperiences';
  docs?: Maybe<Array<Maybe<ExperienceVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Hero__Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Hero__SubDescription_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Hero__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__hero__description?: InputMaybe<VersionsPage_Version__Hero__Description_Operator>;
  version__hero__subDescription?: InputMaybe<VersionsPage_Version__Hero__SubDescription_Operator>;
  version__hero__title?: InputMaybe<VersionsPage_Version__Hero__Title_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__hero__description?: InputMaybe<VersionsPage_Version__Hero__Description_Operator>;
  version__hero__subDescription?: InputMaybe<VersionsPage_Version__Hero__SubDescription_Operator>;
  version__hero__title?: InputMaybe<VersionsPage_Version__Hero__Title_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__hero__description?: InputMaybe<VersionsPage_Version__Hero__Description_Operator>;
  version__hero__subDescription?: InputMaybe<VersionsPage_Version__Hero__SubDescription_Operator>;
  version__hero__title?: InputMaybe<VersionsPage_Version__Hero__Title_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
  __typename?: 'versionsPages';
  docs?: Maybe<Array<Maybe<PageVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VersionsProject_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProject_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type VersionsProject_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsProject_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProject_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsProject_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsProject_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsProject_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsProject_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsProject_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsProject_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsProject_Version___Status_Input>>>;
};

export type VersionsProject_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProject_Version__Description_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProject_Version__Link_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProject_Version__Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum VersionsProject_Version__Position_Input {
  FrontEndDeveloper = 'Front_endDeveloper',
  FullStackDeveloper = 'Full_stackDeveloper',
  UiUxDesigner = 'UI_UXDesigner',
  WordpressDeveloper = 'WordpressDeveloper'
}

export type VersionsProject_Version__Position_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsProject_Version__Position_Input>>>;
  equals?: InputMaybe<VersionsProject_Version__Position_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsProject_Version__Position_Input>>>;
  not_equals?: InputMaybe<VersionsProject_Version__Position_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsProject_Version__Position_Input>>>;
};

export type VersionsProject_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsProject_Version__Thumbnail_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProject_Version__Time__EndingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProject_Version__Time__StartingTime_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProject_Version__Tools_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsProject_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsProject_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProject_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProject_Where_Or>>>;
  createdAt?: InputMaybe<VersionsProject_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProject_Id_Operator>;
  latest?: InputMaybe<VersionsProject_Latest_Operator>;
  parent?: InputMaybe<VersionsProject_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsProject_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProject_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsProject_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsProject_Version__Description_Operator>;
  version__link?: InputMaybe<VersionsProject_Version__Link_Operator>;
  version__name?: InputMaybe<VersionsProject_Version__Name_Operator>;
  version__position?: InputMaybe<VersionsProject_Version__Position_Operator>;
  version__slug?: InputMaybe<VersionsProject_Version__Slug_Operator>;
  version__thumbnail?: InputMaybe<VersionsProject_Version__Thumbnail_Operator>;
  version__time__endingTime?: InputMaybe<VersionsProject_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsProject_Version__Time__StartingTime_Operator>;
  version__tools?: InputMaybe<VersionsProject_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsProject_Version__UpdatedAt_Operator>;
};

export type VersionsProject_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProject_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProject_Where_Or>>>;
  createdAt?: InputMaybe<VersionsProject_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProject_Id_Operator>;
  latest?: InputMaybe<VersionsProject_Latest_Operator>;
  parent?: InputMaybe<VersionsProject_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsProject_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProject_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsProject_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsProject_Version__Description_Operator>;
  version__link?: InputMaybe<VersionsProject_Version__Link_Operator>;
  version__name?: InputMaybe<VersionsProject_Version__Name_Operator>;
  version__position?: InputMaybe<VersionsProject_Version__Position_Operator>;
  version__slug?: InputMaybe<VersionsProject_Version__Slug_Operator>;
  version__thumbnail?: InputMaybe<VersionsProject_Version__Thumbnail_Operator>;
  version__time__endingTime?: InputMaybe<VersionsProject_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsProject_Version__Time__StartingTime_Operator>;
  version__tools?: InputMaybe<VersionsProject_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsProject_Version__UpdatedAt_Operator>;
};

export type VersionsProject_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsProject_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsProject_Where_Or>>>;
  createdAt?: InputMaybe<VersionsProject_CreatedAt_Operator>;
  id?: InputMaybe<VersionsProject_Id_Operator>;
  latest?: InputMaybe<VersionsProject_Latest_Operator>;
  parent?: InputMaybe<VersionsProject_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsProject_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsProject_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsProject_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsProject_Version__Description_Operator>;
  version__link?: InputMaybe<VersionsProject_Version__Link_Operator>;
  version__name?: InputMaybe<VersionsProject_Version__Name_Operator>;
  version__position?: InputMaybe<VersionsProject_Version__Position_Operator>;
  version__slug?: InputMaybe<VersionsProject_Version__Slug_Operator>;
  version__thumbnail?: InputMaybe<VersionsProject_Version__Thumbnail_Operator>;
  version__time__endingTime?: InputMaybe<VersionsProject_Version__Time__EndingTime_Operator>;
  version__time__startingTime?: InputMaybe<VersionsProject_Version__Time__StartingTime_Operator>;
  version__tools?: InputMaybe<VersionsProject_Version__Tools_Operator>;
  version__updatedAt?: InputMaybe<VersionsProject_Version__UpdatedAt_Operator>;
};

export type VersionsProjects = {
  __typename?: 'versionsProjects';
  docs?: Maybe<Array<Maybe<ProjectVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', hero?: { __typename?: 'Page_Hero', title?: string | null, description?: string | null, subDescription?: string | null } | null, layout: Array<{ __typename?: 'ArchiveBlock', blockName?: string | null, seeMore?: { __typename?: 'ArchiveBlock_SeeMore', label?: string | null, url?: string | null } | null, populatedDocs?: Array<{ __typename?: 'ArchiveBlock_PopulatedDocs_Relationship', relationTo?: ArchiveBlock_PopulatedDocs_RelationTo | null, value?: { __typename?: 'Experience', id?: number | null, title?: string | null, description?: string | null, experiencePosition?: Array<Experience_Position> | null, time?: { __typename?: 'Experience_Time', startingTime?: any | null, endingTime?: any | null } | null, tools?: Array<{ __typename?: 'Tag', title: string }> | null, projects?: Array<{ __typename?: 'Project', name?: string | null, link?: string | null }> | null } | { __typename?: 'Project', id?: number | null, name?: string | null, description?: string | null, link?: string | null, projectPositions?: Array<Project_Position> | null, thumbnail?: { __typename?: 'Media', url?: string | null } | null, time?: { __typename?: 'Project_Time', startingTime?: any | null, endingTime?: any | null } | null, tools?: Array<{ __typename?: 'Tag', title: string }> | null } | null }> | null } | { __typename?: 'CallToActionBlock' } | { __typename?: 'ContentBlock', blockName?: string | null, richText?: any | null } | { __typename?: 'MediaBlock' } | { __typename?: 'MenusBlock' }> } | null };

export type GetSocialMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialMediaQuery = { __typename?: 'Query', SocialMedia?: { __typename?: 'SocialMedia', icons?: Array<{ __typename?: 'SocialMedia_Icons', id?: string | null, icon?: { __typename?: 'SocialMedia_Icons_Icon', link?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } | null };


export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"subDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"richText"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArchiveBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"seeMore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"populatedDocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relationTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startingTime"}},{"kind":"Field","name":{"kind":"Name","value":"endingTime"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"experiencePosition"},"name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"tools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArchiveBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"seeMore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"populatedDocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relationTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startingTime"}},{"kind":"Field","name":{"kind":"Name","value":"endingTime"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"projectPositions"},"name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"tools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetSocialMediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSocialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SocialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSocialMediaQuery, GetSocialMediaQueryVariables>;