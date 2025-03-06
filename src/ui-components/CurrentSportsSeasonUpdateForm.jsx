/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { CurrentSportsSeason } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CurrentSportsSeasonUpdateForm(props) {
  const {
    id: idProp,
    currentSportsSeason: currentSportsSeasonModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    year: "",
    seasonName: "",
  };
  const [year, setYear] = React.useState(initialValues.year);
  const [seasonName, setSeasonName] = React.useState(initialValues.seasonName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = currentSportsSeasonRecord
      ? { ...initialValues, ...currentSportsSeasonRecord }
      : initialValues;
    setYear(cleanValues.year);
    setSeasonName(cleanValues.seasonName);
    setErrors({});
  };
  const [currentSportsSeasonRecord, setCurrentSportsSeasonRecord] =
    React.useState(currentSportsSeasonModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CurrentSportsSeason, idProp)
        : currentSportsSeasonModelProp;
      setCurrentSportsSeasonRecord(record);
    };
    queryData();
  }, [idProp, currentSportsSeasonModelProp]);
  React.useEffect(resetStateValues, [currentSportsSeasonRecord]);
  const validations = {
    year: [],
    seasonName: [],
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
          year,
          seasonName,
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
            CurrentSportsSeason.copyOf(currentSportsSeasonRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CurrentSportsSeasonUpdateForm")}
      {...rest}
    >
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year: value,
              seasonName,
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
      <TextField
        label="Season name"
        isRequired={false}
        isReadOnly={false}
        value={seasonName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year,
              seasonName: value,
            };
            const result = onChange(modelFields);
            value = result?.seasonName ?? value;
          }
          if (errors.seasonName?.hasError) {
            runValidationTasks("seasonName", value);
          }
          setSeasonName(value);
        }}
        onBlur={() => runValidationTasks("seasonName", seasonName)}
        errorMessage={errors.seasonName?.errorMessage}
        hasError={errors.seasonName?.hasError}
        {...getOverrideProps(overrides, "seasonName")}
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
          isDisabled={!(idProp || currentSportsSeasonModelProp)}
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
              !(idProp || currentSportsSeasonModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
