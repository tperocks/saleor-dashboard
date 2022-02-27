export const ATTRIBUTES_DETAILS = {
  nameInput: '[name="name"]',
  codeInput: '[name="slug"]',
  inputTypeSelect: '[id="mui-component-select-inputType"]',
  assignValuesButton: '[data-test-id="assign-value-button"]',
  valueRequired: '[name="valueRequired"]',
  valueNameInput: '[data-test-id="value-name"]',
  dashboardProperties: {
    useInFilteringCheckbox: '[name="filterableInDashboard"]'
  },
  attributesInputTypes: {
    DROPDOWN: '[data-test-id="select-field-option-DROPDOWN"]',
    DATE: '[data-test-id="select-field-option-DATE"]',
    DATE_TIME: '[data-test-id="select-field-option-DATE_TIME"]',
    MULTISELECT: '[data-test-id="select-field-option-MULTISELECT"]',
    FILE: '[data-test-id="select-field-option-FILE"]',
    REFERENCE: '[data-test-id="select-field-option-REFERENCE"]',
    RICH_TEXT: '[data-test-id="select-field-option-RICH_TEXT"]',
    NUMERIC: '[data-test-id="select-field-option-NUMERIC"]',
    BOOLEAN: '[data-test-id="select-field-option-BOOLEAN"]',
    SWATCH: '[data-test-id="select-field-option-SWATCH"]'
  },
  entityTypeSelect: '[id="mui-component-select-entityType"]',
  entityTypeOptions: {
    PRODUCT: '[data-test-id*="PRODUCT"]',
    PAGE: '[data-test-id*="PAGE"]'
  },
  selectUnitCheckbox: '[name="selectUnit"]',
  unitSystemSelect: '[data-test-id="unit-system"]',
  unitSystemsOptions: {
    IMPERIAL: '[data-test-id="select-field-option-imperial"]',
    METRIC: '[data-test-id="select-field-option-metric"]'
  },
  unitOfSelect: '[data-test-id="unit-of"]',
  unitsOfOptions: {
    VOLUME: '[data-test-id="select-field-option-volume"]',
    DISTANCE: '[data-test-id="select-field-option-distance"]'
  },
  unitSelect: '[data-test-id="unit"]',
  unitsOptions: {
    CUBIC_CENTIMETER: '[data-test-id="select-field-option-CUBIC_CENTIMETER"]',
    FT: '[data-test-id="select-field-option-FT"]'
  },
  imageCheckbox: '[value= "image"]',
  uploadFileButton: '[data-test-id="button-upload-file"]',
  pageTypeAttributeCheckbox: '[value="PAGE_TYPE"]',
  swatchValueImage: '[data-test-id="swatch-image"]'
};