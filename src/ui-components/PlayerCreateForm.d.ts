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
export declare type PlayerCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    height?: string;
    yearInSchool?: string;
    position?: string;
    number?: string;
};
export declare type PlayerCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    yearInSchool?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCreateFormOverridesProps = {
    PlayerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    yearInSchool?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onSuccess?: (fields: PlayerCreateFormInputValues) => void;
    onError?: (fields: PlayerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onValidate?: PlayerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerCreateForm(props: PlayerCreateFormProps): React.ReactElement;
