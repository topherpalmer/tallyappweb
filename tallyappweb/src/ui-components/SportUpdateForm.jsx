/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Sport } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SportUpdateForm(props) {
  const {
    id: idProp,
    sport: sportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    seasonOfYear: "",
    status: "",
    displayName: "",
    year: "",
    sortOrder: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [seasonOfYear, setSeasonOfYear] = React.useState(
    initialValues.seasonOfYear
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [displayName, setDisplayName] = React.useState(
    initialValues.displayName
  );
  const [year, setYear] = React.useState(initialValues.year);
  const [sortOrder, setSortOrder] = React.useState(initialValues.sortOrder);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sportRecord
      ? { ...initialValues, ...sportRecord }
      : initialValues;
    setName(cleanValues.name);
    setSeasonOfYear(cleanValues.seasonOfYear);
    setStatus(cleanValues.status);
    setDisplayName(cleanValues.displayName);
    setYear(cleanValues.year);
    setSortOrder(cleanValues.sortOrder);
    setErrors({});
  };
  const [sportRecord, setSportRecord] = React.useState(sportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Sport, idProp)
        : sportModelProp;
      setSportRecord(record);
    };
    queryData();
  }, [idProp, sportModelProp]);
  React.useEffect(resetStateValues, [sportRecord]);
  const validations = {
    name: [],
    seasonOfYear: [],
    status: [],
    displayName: [],
    year: [],
    sortOrder: [],
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
          name,
          seasonOfYear,
          status,
          displayName,
          year,
          sortOrder,
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
            Sport.copyOf(sportRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              seasonOfYear,
              status,
              displayName,
              year,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Season of year"
        isRequired={false}
        isReadOnly={false}
        value={seasonOfYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              seasonOfYear: value,
              status,
              displayName,
              year,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.seasonOfYear ?? value;
          }
          if (errors.seasonOfYear?.hasError) {
            runValidationTasks("seasonOfYear", value);
          }
          setSeasonOfYear(value);
        }}
        onBlur={() => runValidationTasks("seasonOfYear", seasonOfYear)}
        errorMessage={errors.seasonOfYear?.errorMessage}
        hasError={errors.seasonOfYear?.hasError}
        {...getOverrideProps(overrides, "seasonOfYear")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              seasonOfYear,
              status: value,
              displayName,
              year,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Display name"
        isRequired={false}
        isReadOnly={false}
        value={displayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              seasonOfYear,
              status,
              displayName: value,
              year,
              sortOrder,
            };
            const result = onChange(modelFields);
            value = result?.displayName ?? value;
          }
          if (errors.displayName?.hasError) {
            runValidationTasks("displayName", value);
          }
          setDisplayName(value);
        }}
        onBlur={() => runValidationTasks("displayName", displayName)}
        errorMessage={errors.displayName?.errorMessage}
        hasError={errors.displayName?.hasError}
        {...getOverrideProps(overrides, "displayName")}
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
              name,
              seasonOfYear,
              status,
              displayName,
              year: value,
              sortOrder,
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
              name,
              seasonOfYear,
              status,
              displayName,
              year,
              sortOrder: value,
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
          isDisabled={!(idProp || sportModelProp)}
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
              !(idProp || sportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}