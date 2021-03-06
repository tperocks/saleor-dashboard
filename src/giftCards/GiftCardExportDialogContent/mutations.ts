import { gql } from "@apollo/client";
import { exportErrorFragment } from "@saleor/fragments/errors";
import makeMutation from "@saleor/hooks/makeMutation";

import {
  ExportGiftCards,
  ExportGiftCardsVariables
} from "./types/ExportGiftCards";

const exportGiftCards = gql`
  ${exportErrorFragment}
  mutation ExportGiftCards($input: ExportGiftCardsInput!) {
    exportGiftCards(input: $input) {
      errors {
        ...ExportErrorFragment
      }
      exportFile {
        id
      }
    }
  }
`;

export const useGiftCardExportMutation = makeMutation<
  ExportGiftCards,
  ExportGiftCardsVariables
>(exportGiftCards);
