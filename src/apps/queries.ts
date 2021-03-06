import { gql } from "@apollo/client";
import { appFragment } from "@saleor/fragments/apps";
import { webhooksFragment } from "@saleor/fragments/webhooks";
import makeQuery from "@saleor/hooks/makeQuery";

import { App, AppVariables } from "./types/App";
import { AppsInstallations } from "./types/AppsInstallations";
import { AppsList, AppsListVariables } from "./types/AppsList";
import { ExtensionList, ExtensionListVariables } from "./types/ExtensionList";

const appsList = gql`
  query AppsList(
    $before: String
    $after: String
    $first: Int
    $last: Int
    $sort: AppSortingInput
    $filter: AppFilterInput
  ) {
    apps(
      before: $before
      after: $after
      first: $first
      last: $last
      sortBy: $sort
      filter: $filter
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          id
          name
          isActive
          type
        }
      }
    }
  }
`;

const appsInProgressList = gql`
  query AppsInstallations {
    appsInstallations {
      status
      message
      appName
      manifestUrl
      id
    }
  }
`;

const appDetails = gql`
  ${appFragment}
  ${webhooksFragment}
  query App($id: ID!) {
    app(id: $id) {
      ...AppFragment
      aboutApp
      permissions {
        code
        name
      }
      dataPrivacy
      dataPrivacyUrl
    }
  }
`;

export const extensionList = gql`
  query ExtensionList($filter: AppExtensionFilterInput!) {
    appExtensions(filter: $filter, first: 100) {
      edges {
        node {
          id
          label
          url
          mount
          target
          accessToken
          permissions {
            code
          }
          app {
            id
            appUrl
          }
        }
      }
    }
  }
`;

export const useAppsListQuery = makeQuery<AppsList, AppsListVariables>(
  appsList
);

export const useAppsInProgressListQuery = makeQuery<AppsInstallations, {}>(
  appsInProgressList
);

export const useAppDetails = makeQuery<App, AppVariables>(appDetails);

export const useExtensionList = makeQuery<
  ExtensionList,
  ExtensionListVariables
>(extensionList);
