/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Stats } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function StatsCreateForm(props) {
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
    points: "",
    rebounds: "",
    assists: "",
    fouls: "",
    shotsTaken: "",
    threePointersTaken: "",
    threePointersMade: "",
    gameId: "",
    type: "",
    teamId: "",
    status: "",
  };
  const [points, setPoints] = React.useState(initialValues.points);
  const [rebounds, setRebounds] = React.useState(initialValues.rebounds);
  const [assists, setAssists] = React.useState(initialValues.assists);
  const [fouls, setFouls] = React.useState(initialValues.fouls);
  const [shotsTaken, setShotsTaken] = React.useState(initialValues.shotsTaken);
  const [threePointersTaken, setThreePointersTaken] = React.useState(
    initialValues.threePointersTaken
  );
  const [threePointersMade, setThreePointersMade] = React.useState(
    initialValues.threePointersMade
  );
  const [gameId, setGameId] = React.useState(initialValues.gameId);
  const [type, setType] = React.useState(initialValues.type);
  const [teamId, setTeamId] = React.useState(initialValues.teamId);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPoints(initialValues.points);
    setRebounds(initialValues.rebounds);
    setAssists(initialValues.assists);
    setFouls(initialValues.fouls);
    setShotsTaken(initialValues.shotsTaken);
    setThreePointersTaken(initialValues.threePointersTaken);
    setThreePointersMade(initialValues.threePointersMade);
    setGameId(initialValues.gameId);
    setType(initialValues.type);
    setTeamId(initialValues.teamId);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    points: [],
    rebounds: [],
    assists: [],
    fouls: [],
    shotsTaken: [],
    threePointersTaken: [],
    threePointersMade: [],
    gameId: [{ type: "Required" }],
    type: [],
    teamId: [],
    status: [],
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
          points,
          rebounds,
          assists,
          fouls,
          shotsTaken,
          threePointersTaken,
          threePointersMade,
          gameId,
          type,
          teamId,
          status,
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
          await DataStore.save(new Stats(modelFields));
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
      {...getOverrideProps(overrides, "StatsCreateForm")}
      {...rest}
    >
      <TextField
        label="Points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={points}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points: value,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <TextField
        label="Rebounds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rebounds}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds: value,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.rebounds ?? value;
          }
          if (errors.rebounds?.hasError) {
            runValidationTasks("rebounds", value);
          }
          setRebounds(value);
        }}
        onBlur={() => runValidationTasks("rebounds", rebounds)}
        errorMessage={errors.rebounds?.errorMessage}
        hasError={errors.rebounds?.hasError}
        {...getOverrideProps(overrides, "rebounds")}
      ></TextField>
      <TextField
        label="Assists"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={assists}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists: value,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.assists ?? value;
          }
          if (errors.assists?.hasError) {
            runValidationTasks("assists", value);
          }
          setAssists(value);
        }}
        onBlur={() => runValidationTasks("assists", assists)}
        errorMessage={errors.assists?.errorMessage}
        hasError={errors.assists?.hasError}
        {...getOverrideProps(overrides, "assists")}
      ></TextField>
      <TextField
        label="Fouls"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fouls}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls: value,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.fouls ?? value;
          }
          if (errors.fouls?.hasError) {
            runValidationTasks("fouls", value);
          }
          setFouls(value);
        }}
        onBlur={() => runValidationTasks("fouls", fouls)}
        errorMessage={errors.fouls?.errorMessage}
        hasError={errors.fouls?.hasError}
        {...getOverrideProps(overrides, "fouls")}
      ></TextField>
      <TextField
        label="Shots taken"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={shotsTaken}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken: value,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.shotsTaken ?? value;
          }
          if (errors.shotsTaken?.hasError) {
            runValidationTasks("shotsTaken", value);
          }
          setShotsTaken(value);
        }}
        onBlur={() => runValidationTasks("shotsTaken", shotsTaken)}
        errorMessage={errors.shotsTaken?.errorMessage}
        hasError={errors.shotsTaken?.hasError}
        {...getOverrideProps(overrides, "shotsTaken")}
      ></TextField>
      <TextField
        label="Three pointers taken"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={threePointersTaken}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken: value,
              threePointersMade,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.threePointersTaken ?? value;
          }
          if (errors.threePointersTaken?.hasError) {
            runValidationTasks("threePointersTaken", value);
          }
          setThreePointersTaken(value);
        }}
        onBlur={() =>
          runValidationTasks("threePointersTaken", threePointersTaken)
        }
        errorMessage={errors.threePointersTaken?.errorMessage}
        hasError={errors.threePointersTaken?.hasError}
        {...getOverrideProps(overrides, "threePointersTaken")}
      ></TextField>
      <TextField
        label="Three pointers made"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={threePointersMade}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade: value,
              gameId,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.threePointersMade ?? value;
          }
          if (errors.threePointersMade?.hasError) {
            runValidationTasks("threePointersMade", value);
          }
          setThreePointersMade(value);
        }}
        onBlur={() =>
          runValidationTasks("threePointersMade", threePointersMade)
        }
        errorMessage={errors.threePointersMade?.errorMessage}
        hasError={errors.threePointersMade?.hasError}
        {...getOverrideProps(overrides, "threePointersMade")}
      ></TextField>
      <TextField
        label="Game id"
        isRequired={true}
        isReadOnly={false}
        value={gameId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId: value,
              type,
              teamId,
              status,
            };
            const result = onChange(modelFields);
            value = result?.gameId ?? value;
          }
          if (errors.gameId?.hasError) {
            runValidationTasks("gameId", value);
          }
          setGameId(value);
        }}
        onBlur={() => runValidationTasks("gameId", gameId)}
        errorMessage={errors.gameId?.errorMessage}
        hasError={errors.gameId?.hasError}
        {...getOverrideProps(overrides, "gameId")}
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
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type: value,
              teamId,
              status,
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
        label="Team id"
        isRequired={false}
        isReadOnly={false}
        value={teamId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.teamId ?? value;
          }
          if (errors.teamId?.hasError) {
            runValidationTasks("teamId", value);
          }
          setTeamId(value);
        }}
        onBlur={() => runValidationTasks("teamId", teamId)}
        errorMessage={errors.teamId?.errorMessage}
        hasError={errors.teamId?.hasError}
        {...getOverrideProps(overrides, "teamId")}
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
              points,
              rebounds,
              assists,
              fouls,
              shotsTaken,
              threePointersTaken,
              threePointersMade,
              gameId,
              type,
              teamId,
              status: value,
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
