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
export declare type TallyImageCreateFormInputValues = {
    name?: string;
    type?: string;
    token?: string;
    path?: string;
    resolution?: string;
};
export declare type TallyImageCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    token?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    resolution?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TallyImageCreateFormOverridesProps = {
    TallyImageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    token?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    resolution?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TallyImageCreateFormProps = React.PropsWithChildren<{
    overrides?: TallyImageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TallyImageCreateFormInputValues) => TallyImageCreateFormInputValues;
    onSuccess?: (fields: TallyImageCreateFormInputValues) => void;
    onError?: (fields: TallyImageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TallyImageCreateFormInputValues) => TallyImageCreateFormInputValues;
    onValidate?: TallyImageCreateFormValidationValues;
} & React.CSSProperties>;
export default function TallyImageCreateForm(props: TallyImageCreateFormProps): React.ReactElement;
