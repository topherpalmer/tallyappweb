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
export declare type SportCreateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
    displayName?: string;
    status?: string;
    sortOrder?: number;
    year?: string;
};
export declare type SportCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
    year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SportCreateFormOverridesProps = {
    SportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    sortOrder?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SportCreateFormProps = React.PropsWithChildren<{
    overrides?: SportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SportCreateFormInputValues) => SportCreateFormInputValues;
    onSuccess?: (fields: SportCreateFormInputValues) => void;
    onError?: (fields: SportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SportCreateFormInputValues) => SportCreateFormInputValues;
    onValidate?: SportCreateFormValidationValues;
} & React.CSSProperties>;
export default function SportCreateForm(props: SportCreateFormProps): React.ReactElement;
