import { gql } from "@apollo/client";
import { metadataFragment } from "@saleor/fragments/metadata";
import { channelListingProductWithoutPricingFragment } from "@saleor/fragments/products";

import { pageInfoFragment } from "./pageInfo";

export const saleFragment = gql`
  ${metadataFragment}
  fragment SaleFragment on Sale {
    ...MetadataFragment
    id
    name
    type
    startDate
    endDate
    channelListings {
      id
      channel {
        id
        name
        currencyCode
      }
      discountValue
      currency
    }
  }
`;

export const saleDetailsFragment = gql`
  ${channelListingProductWithoutPricingFragment}
  ${pageInfoFragment}
  ${saleFragment}
  fragment SaleDetailsFragment on Sale {
    ...SaleFragment
    variants(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          product {
            id
            name
            thumbnail {
              url
            }
            productType {
              id
              name
            }
            channelListings {
              ...ChannelListingProductWithoutPricingFragment
            }
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
    }
    products(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          productType {
            id
            name
          }
          thumbnail {
            url
          }
          channelListings {
            ...ChannelListingProductWithoutPricingFragment
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
    }
    categories(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          products {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
    }
    collections(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          products {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalCount
    }
  }
`;

export const voucherFragment = gql`
  ${metadataFragment}
  fragment VoucherFragment on Voucher {
    ...MetadataFragment
    id
    code
    startDate
    endDate
    usageLimit
    type
    discountValueType
    countries {
      code
      country
    }
    minCheckoutItemsQuantity
    channelListings {
      id
      channel {
        id
        name
        currencyCode
      }
      discountValue
      currency
      minSpent {
        amount
        currency
      }
    }
  }
`;

export const voucherDetailsFragment = gql`
  ${pageInfoFragment}
  ${voucherFragment}
  ${channelListingProductWithoutPricingFragment}
  fragment VoucherDetailsFragment on Voucher {
    ...VoucherFragment
    code
    usageLimit
    used
    applyOncePerOrder
    applyOncePerCustomer
    onlyForStaff
    products(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          productType {
            id
            name
          }
          thumbnail {
            url
          }
          channelListings {
            ...ChannelListingProductWithoutPricingFragment
          }
        }
      }
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
    }
    collections(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          products {
            totalCount
          }
        }
      }
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
    }
    categories(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          products {
            totalCount
          }
        }
      }
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
