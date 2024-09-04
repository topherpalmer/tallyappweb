/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TeamStatsCreateFormInputValues = {
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
export declare type TeamStatsCreateFormValidationValues = {
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
export declare type TeamStatsCreateFormOverridesProps = {
    TeamStatsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TeamStatsCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamStatsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamStatsCreateFormInputValues) => TeamStatsCreateFormInputValues;
    onSuccess?: (fields: TeamStatsCreateFormInputValues) => void;
    onError?: (fields: TeamStatsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamStatsCreateFormInputValues) => TeamStatsCreateFormInputValues;
    onValidate?: TeamStatsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamStatsCreateForm(props: TeamStatsCreateFormProps): React.ReactElement;
