/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TeamStats } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamStatsUpdateFormInputValues = {
    gameId?: string;
    points?: number;
    rebounds?: number;
    assists?: number;
    fouls?: number;
    shotsTaken?: number;
    threePointersTaken?: number;
    threePointersMade?: number;
    type?: string;
    teamId?: string;
    timeouts?: number;
    status?: string;
};
export declare type TeamStatsUpdateFormValidationValues = {
    gameId?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    rebounds?: ValidationFunction<number>;
    assists?: ValidationFunction<number>;
    fouls?: ValidationFunction<number>;
    shotsTaken?: ValidationFunction<number>;
    threePointersTaken?: ValidationFunction<number>;
    threePointersMade?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    teamId?: ValidationFunction<string>;
    timeouts?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamStatsUpdateFormOverridesProps = {
    TeamStatsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    rebounds?: PrimitiveOverrideProps<TextFieldProps>;
    assists?: PrimitiveOverrideProps<TextFieldProps>;
    fouls?: PrimitiveOverrideProps<TextFieldProps>;
    shotsTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersMade?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
    timeouts?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamStatsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamStatsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamStats?: TeamStats;
    onSubmit?: (fields: TeamStatsUpdateFormInputValues) => TeamStatsUpdateFormInputValues;
    onSuccess?: (fields: TeamStatsUpdateFormInputValues) => void;
    onError?: (fields: TeamStatsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamStatsUpdateFormInputValues) => TeamStatsUpdateFormInputValues;
    onValidate?: TeamStatsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamStatsUpdateForm(props: TeamStatsUpdateFormProps): React.ReactElement;
