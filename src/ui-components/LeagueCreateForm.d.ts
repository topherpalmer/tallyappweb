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
export declare type LeagueCreateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
};
export declare type LeagueCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeagueCreateFormOverridesProps = {
    LeagueCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeagueCreateFormProps = React.PropsWithChildren<{
    overrides?: LeagueCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeagueCreateFormInputValues) => LeagueCreateFormInputValues;
    onSuccess?: (fields: LeagueCreateFormInputValues) => void;
    onError?: (fields: LeagueCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeagueCreateFormInputValues) => LeagueCreateFormInputValues;
    onValidate?: LeagueCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeagueCreateForm(props: LeagueCreateFormProps): React.ReactElement;
