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
export declare type UIProfileCreateFormInputValues = {
    baseColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    primaryImage?: string;
    secondaryImage?: string;
    shopifyStatus?: string;
    shopifyURL?: string;
    shopifyToken?: string;
};
export declare type UIProfileCreateFormValidationValues = {
    baseColor?: ValidationFunction<string>;
    secondaryColor?: ValidationFunction<string>;
    tertiaryColor?: ValidationFunction<string>;
    primaryImage?: ValidationFunction<string>;
    secondaryImage?: ValidationFunction<string>;
    shopifyStatus?: ValidationFunction<string>;
    shopifyURL?: ValidationFunction<string>;
    shopifyToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UIProfileCreateFormOverridesProps = {
    UIProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    baseColor?: PrimitiveOverrideProps<TextFieldProps>;
    secondaryColor?: PrimitiveOverrideProps<TextFieldProps>;
    tertiaryColor?: PrimitiveOverrideProps<TextFieldProps>;
    primaryImage?: PrimitiveOverrideProps<TextFieldProps>;
    secondaryImage?: PrimitiveOverrideProps<TextFieldProps>;
    shopifyStatus?: PrimitiveOverrideProps<TextFieldProps>;
    shopifyURL?: PrimitiveOverrideProps<TextFieldProps>;
    shopifyToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UIProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: UIProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UIProfileCreateFormInputValues) => UIProfileCreateFormInputValues;
    onSuccess?: (fields: UIProfileCreateFormInputValues) => void;
    onError?: (fields: UIProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UIProfileCreateFormInputValues) => UIProfileCreateFormInputValues;
    onValidate?: UIProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function UIProfileCreateForm(props: UIProfileCreateFormProps): React.ReactElement;
