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
export declare type StatsCreateFormInputValues = {
    points?: number;
    rebounds?: number;
    assists?: number;
    fouls?: number;
    shotsTaken?: number;
    threePointersTaken?: number;
    threePointersMade?: number;
    gameId?: string;
    type?: string;
    teamId?: string;
    status?: string;
};
export declare type StatsCreateFormValidationValues = {
    points?: ValidationFunction<number>;
    rebounds?: ValidationFunction<number>;
    assists?: ValidationFunction<number>;
    fouls?: ValidationFunction<number>;
    shotsTaken?: ValidationFunction<number>;
    threePointersTaken?: ValidationFunction<number>;
    threePointersMade?: ValidationFunction<number>;
    gameId?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    teamId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatsCreateFormOverridesProps = {
    StatsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    rebounds?: PrimitiveOverrideProps<TextFieldProps>;
    assists?: PrimitiveOverrideProps<TextFieldProps>;
    fouls?: PrimitiveOverrideProps<TextFieldProps>;
    shotsTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersMade?: PrimitiveOverrideProps<TextFieldProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsCreateFormProps = React.PropsWithChildren<{
    overrides?: StatsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatsCreateFormInputValues) => StatsCreateFormInputValues;
    onSuccess?: (fields: StatsCreateFormInputValues) => void;
    onError?: (fields: StatsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsCreateFormInputValues) => StatsCreateFormInputValues;
    onValidate?: StatsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatsCreateForm(props: StatsCreateFormProps): React.ReactElement;
