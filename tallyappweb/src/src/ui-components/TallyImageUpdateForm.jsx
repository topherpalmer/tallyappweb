/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { TallyImage } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TallyImageUpdateForm(props) {
  const {
    id: idProp,
    tallyImage: tallyImageModelProp,
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
    type: "",
    token: "",
    path: "",
    resolution: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [token, setToken] = React.useState(initialValues.token);
  const [path, setPath] = React.useState(initialValues.path);
  const [resolution, setResolution] = React.useState(initialValues.resolution);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tallyImageRecord
      ? { ...initialValues, ...tallyImageRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setToken(cleanValues.token);
    setPath(cleanValues.path);
    setResolution(cleanValues.resolution);
    setErrors({});
  };
  const [tallyImageRecord, setTallyImageRecord] =
    React.useState(tallyImageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TallyImage, idProp)
        : tallyImageModelProp;
      setTallyImageRecord(record);
    };
    queryData();
  }, [idProp, tallyImageModelProp]);
  React.useEffect(resetStateValues, [tallyImageRecord]);
  const validations = {
    name: [],
    type: [],
    token: [],
    path: [],
    resolution: [],
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
          type,
          token,
          path,
          resolution,
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
            TallyImage.copyOf(tallyImageRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TallyImageUpdateForm")}
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
              type,
              token,
              path,
              resolution,
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
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              token,
              path,
              resolution,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Token"
        isRequired={false}
        isReadOnly={false}
        value={token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              token: value,
              path,
              resolution,
            };
            const result = onChange(modelFields);
            value = result?.token ?? value;
          }
          if (errors.token?.hasError) {
            runValidationTasks("token", value);
          }
          setToken(value);
        }}
        onBlur={() => runValidationTasks("token", token)}
        errorMessage={errors.token?.errorMessage}
        hasError={errors.token?.hasError}
        {...getOverrideProps(overrides, "token")}
      ></TextField>
      <TextField
        label="Path"
        isRequired={false}
        isReadOnly={false}
        value={path}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              token,
              path: value,
              resolution,
            };
            const result = onChange(modelFields);
            value = result?.path ?? value;
          }
          if (errors.path?.hasError) {
            runValidationTasks("path", value);
          }
          setPath(value);
        }}
        onBlur={() => runValidationTasks("path", path)}
        errorMessage={errors.path?.errorMessage}
        hasError={errors.path?.hasError}
        {...getOverrideProps(overrides, "path")}
      ></TextField>
      <TextField
        label="Resolution"
        isRequired={false}
        isReadOnly={false}
        value={resolution}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              token,
              path,
              resolution: value,
            };
            const result = onChange(modelFields);
            value = result?.resolution ?? value;
          }
          if (errors.resolution?.hasError) {
            runValidationTasks("resolution", value);
          }
          setResolution(value);
        }}
        onBlur={() => runValidationTasks("resolution", resolution)}
        errorMessage={errors.resolution?.errorMessage}
        hasError={errors.resolution?.hasError}
        {...getOverrideProps(overrides, "resolution")}
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
          isDisabled={!(idProp || tallyImageModelProp)}
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
              !(idProp || tallyImageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
