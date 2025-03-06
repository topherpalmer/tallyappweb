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
export declare type ConferenceCreateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
};
export declare type ConferenceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConferenceCreateFormOverridesProps = {
    ConferenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConferenceCreateFormProps = React.PropsWithChildren<{
    overrides?: ConferenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConferenceCreateFormInputValues) => ConferenceCreateFormInputValues;
    onSuccess?: (fields: ConferenceCreateFormInputValues) => void;
    onError?: (fields: ConferenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConferenceCreateFormInputValues) => ConferenceCreateFormInputValues;
    onValidate?: ConferenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConferenceCreateForm(props: ConferenceCreateFormProps): React.ReactElement;
