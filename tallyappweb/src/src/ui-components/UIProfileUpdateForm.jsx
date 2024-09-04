/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { UIProfile } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UIProfileUpdateForm(props) {
  const {
    id: idProp,
    uIProfile: uIProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    baseColor: "",
    secondaryColor: "",
    tertiaryColor: "",
    primaryImage: "",
    secondaryImage: "",
    shopifyStatus: "",
    shopifyURL: "",
    shopifyToken: "",
  };
  const [baseColor, setBaseColor] = React.useState(initialValues.baseColor);
  const [secondaryColor, setSecondaryColor] = React.useState(
    initialValues.secondaryColor
  );
  const [tertiaryColor, setTertiaryColor] = React.useState(
    initialValues.tertiaryColor
  );
  const [primaryImage, setPrimaryImage] = React.useState(
    initialValues.primaryImage
  );
  const [secondaryImage, setSecondaryImage] = React.useState(
    initialValues.secondaryImage
  );
  const [shopifyStatus, setShopifyStatus] = React.useState(
    initialValues.shopifyStatus
  );
  const [shopifyURL, setShopifyURL] = React.useState(initialValues.shopifyURL);
  const [shopifyToken, setShopifyToken] = React.useState(
    initialValues.shopifyToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uIProfileRecord
      ? { ...initialValues, ...uIProfileRecord }
      : initialValues;
    setBaseColor(cleanValues.baseColor);
    setSecondaryColor(cleanValues.secondaryColor);
    setTertiaryColor(cleanValues.tertiaryColor);
    setPrimaryImage(cleanValues.primaryImage);
    setSecondaryImage(cleanValues.secondaryImage);
    setShopifyStatus(cleanValues.shopifyStatus);
    setShopifyURL(cleanValues.shopifyURL);
    setShopifyToken(cleanValues.shopifyToken);
    setErrors({});
  };
  const [uIProfileRecord, setUIProfileRecord] =
    React.useState(uIProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UIProfile, idProp)
        : uIProfileModelProp;
      setUIProfileRecord(record);
    };
    queryData();
  }, [idProp, uIProfileModelProp]);
  React.useEffect(resetStateValues, [uIProfileRecord]);
  const validations = {
    baseColor: [{ type: "Required" }],
    secondaryColor: [{ type: "Required" }],
    tertiaryColor: [],
    primaryImage: [],
    secondaryImage: [],
    shopifyStatus: [],
    shopifyURL: [],
    shopifyToken: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          baseColor,
          secondaryColor,
          tertiaryColor,
          primaryImage,
          secondaryImage,
          shopifyStatus,
          shopifyURL,
          shopifyToken,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            UIProfile.copyOf(uIProfileRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UIProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Base color"
        isRequired={true}
        isReadOnly={false}
        value={baseColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor: value,
              secondaryColor,
              tertiaryColor,
              primaryImage,
              secondaryImage,
              shopifyStatus,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.baseColor ?? value;
          }
          if (errors.baseColor?.hasError) {
            runValidationTasks("baseColor", value);
          }
          setBaseColor(value);
        }}
        onBlur={() => runValidationTasks("baseColor", baseColor)}
        errorMessage={errors.baseColor?.errorMessage}
        hasError={errors.baseColor?.hasError}
        {...getOverrideProps(overrides, "baseColor")}
      ></TextField>
      <TextField
        label="Secondary color"
        isRequired={true}
        isReadOnly={false}
        value={secondaryColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor: value,
              tertiaryColor,
              primaryImage,
              secondaryImage,
              shopifyStatus,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.secondaryColor ?? value;
          }
          if (errors.secondaryColor?.hasError) {
            runValidationTasks("secondaryColor", value);
          }
          setSecondaryColor(value);
        }}
        onBlur={() => runValidationTasks("secondaryColor", secondaryColor)}
        errorMessage={errors.secondaryColor?.errorMessage}
        hasError={errors.secondaryColor?.hasError}
        {...getOverrideProps(overrides, "secondaryColor")}
      ></TextField>
      <TextField
        label="Tertiary color"
        isRequired={false}
        isReadOnly={false}
        value={tertiaryColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor: value,
              primaryImage,
              secondaryImage,
              shopifyStatus,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.tertiaryColor ?? value;
          }
          if (errors.tertiaryColor?.hasError) {
            runValidationTasks("tertiaryColor", value);
          }
          setTertiaryColor(value);
        }}
        onBlur={() => runValidationTasks("tertiaryColor", tertiaryColor)}
        errorMessage={errors.tertiaryColor?.errorMessage}
        hasError={errors.tertiaryColor?.hasError}
        {...getOverrideProps(overrides, "tertiaryColor")}
      ></TextField>
      <TextField
        label="Primary image"
        isRequired={false}
        isReadOnly={false}
        value={primaryImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor,
              primaryImage: value,
              secondaryImage,
              shopifyStatus,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.primaryImage ?? value;
          }
          if (errors.primaryImage?.hasError) {
            runValidationTasks("primaryImage", value);
          }
          setPrimaryImage(value);
        }}
        onBlur={() => runValidationTasks("primaryImage", primaryImage)}
        errorMessage={errors.primaryImage?.errorMessage}
        hasError={errors.primaryImage?.hasError}
        {...getOverrideProps(overrides, "primaryImage")}
      ></TextField>
      <TextField
        label="Secondary image"
        isRequired={false}
        isReadOnly={false}
        value={secondaryImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor,
              primaryImage,
              secondaryImage: value,
              shopifyStatus,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.secondaryImage ?? value;
          }
          if (errors.secondaryImage?.hasError) {
            runValidationTasks("secondaryImage", value);
          }
          setSecondaryImage(value);
        }}
        onBlur={() => runValidationTasks("secondaryImage", secondaryImage)}
        errorMessage={errors.secondaryImage?.errorMessage}
        hasError={errors.secondaryImage?.hasError}
        {...getOverrideProps(overrides, "secondaryImage")}
      ></TextField>
      <TextField
        label="Shopify status"
        isRequired={false}
        isReadOnly={false}
        value={shopifyStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor,
              primaryImage,
              secondaryImage,
              shopifyStatus: value,
              shopifyURL,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.shopifyStatus ?? value;
          }
          if (errors.shopifyStatus?.hasError) {
            runValidationTasks("shopifyStatus", value);
          }
          setShopifyStatus(value);
        }}
        onBlur={() => runValidationTasks("shopifyStatus", shopifyStatus)}
        errorMessage={errors.shopifyStatus?.errorMessage}
        hasError={errors.shopifyStatus?.hasError}
        {...getOverrideProps(overrides, "shopifyStatus")}
      ></TextField>
      <TextField
        label="Shopify url"
        isRequired={false}
        isReadOnly={false}
        value={shopifyURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor,
              primaryImage,
              secondaryImage,
              shopifyStatus,
              shopifyURL: value,
              shopifyToken,
            };
            const result = onChange(modelFields);
            value = result?.shopifyURL ?? value;
          }
          if (errors.shopifyURL?.hasError) {
            runValidationTasks("shopifyURL", value);
          }
          setShopifyURL(value);
        }}
        onBlur={() => runValidationTasks("shopifyURL", shopifyURL)}
        errorMessage={errors.shopifyURL?.errorMessage}
        hasError={errors.shopifyURL?.hasError}
        {...getOverrideProps(overrides, "shopifyURL")}
      ></TextField>
      <TextField
        label="Shopify token"
        isRequired={false}
        isReadOnly={false}
        value={shopifyToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              baseColor,
              secondaryColor,
              tertiaryColor,
              primaryImage,
              secondaryImage,
              shopifyStatus,
              shopifyURL,
              shopifyToken: value,
            };
            const result = onChange(modelFields);
            value = result?.shopifyToken ?? value;
          }
          if (errors.shopifyToken?.hasError) {
            runValidationTasks("shopifyToken", value);
          }
          setShopifyToken(value);
        }}
        onBlur={() => runValidationTasks("shopifyToken", shopifyToken)}
        errorMessage={errors.shopifyToken?.errorMessage}
        hasError={errors.shopifyToken?.hasError}
        {...getOverrideProps(overrides, "shopifyToken")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uIProfileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uIProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
