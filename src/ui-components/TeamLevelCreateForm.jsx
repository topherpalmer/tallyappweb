/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { TeamLevel } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TeamLevelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    levelName: "",
    levelDisplayName: "",
    sortOrder: "",
    year: "",
  };
  const [levelName, setLevelName] = React.useState(initialValues.levelName);
  const [levelDisplayName, setLevelDisplayName] = React.useState(
    initialValues.levelDisplayName
  );
  const [sortOrder, setSortOrder] = React.useState(initialValues.sortOrder);
  const [year, setYear] = React.useState(initialValues.year);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLevelName(initialValues.levelName);
    setLevelDisplayName(initialValues.levelDisplayName);
    setSortOrder(initialValues.sortOrder);
    setYear(initialValues.year);
    setErrors({});
  };
  const validations = {
    levelName: [],
    levelDisplayName: [],
    sortOrder: [],
    year: [],
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
          levelName,
          levelDisplayName,
          sortOrder,
          year,
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
          await DataStore.save(new TeamLevel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TeamLevelCreateForm")}
      {...rest}
    >
      <TextField
        label="Level name"
        isRequired={false}
        isReadOnly={false}
        value={levelName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              levelName: value,
              levelDisplayName,
              sortOrder,
              year,
            };
            const result = onChange(modelFields);
            value = result?.levelName ?? value;
          }
          if (errors.levelName?.hasError) {
            runValidationTasks("levelName", value);
          }
          setLevelName(value);
        }}
        onBlur={() => runValidationTasks("levelName", levelName)}
        errorMessage={errors.levelName?.errorMessage}
        hasError={errors.levelName?.hasError}
        {...getOverrideProps(overrides, "levelName")}
      ></TextField>
      <TextField
        label="Level display name"
        isRequired={false}
        isReadOnly={false}
        value={levelDisplayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              levelName,
              levelDisplayName: value,
              sortOrder,
              year,
            };
            const result = onChange(modelFields);
            value = result?.levelDisplayName ?? value;
          }
          if (errors.levelDisplayName?.hasError) {
            runValidationTasks("levelDisplayName", value);
          }
          setLevelDisplayName(value);
        }}
        onBlur={() => runValidationTasks("levelDisplayName", levelDisplayName)}
        errorMessage={errors.levelDisplayName?.errorMessage}
        hasError={errors.levelDisplayName?.hasError}
        {...getOverrideProps(overrides, "levelDisplayName")}
      ></TextField>
      <TextField
        label="Sort order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sortOrder}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              levelName,
              levelDisplayName,
              sortOrder: value,
              year,
            };
            const result = onChange(modelFields);
            value = result?.sortOrder ?? value;
          }
          if (errors.sortOrder?.hasError) {
            runValidationTasks("sortOrder", value);
          }
          setSortOrder(value);
        }}
        onBlur={() => runValidationTasks("sortOrder", sortOrder)}
        errorMessage={errors.sortOrder?.errorMessage}
        hasError={errors.sortOrder?.hasError}
        {...getOverrideProps(overrides, "sortOrder")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              levelName,
              levelDisplayName,
              sortOrder,
              year: value,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
