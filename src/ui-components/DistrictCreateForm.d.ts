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
export declare type DistrictCreateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
};
export declare type DistrictCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistrictCreateFormOverridesProps = {
    DistrictCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DistrictCreateFormProps = React.PropsWithChildren<{
    overrides?: DistrictCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DistrictCreateFormInputValues) => DistrictCreateFormInputValues;
    onSuccess?: (fields: DistrictCreateFormInputValues) => void;
    onError?: (fields: DistrictCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistrictCreateFormInputValues) => DistrictCreateFormInputValues;
    onValidate?: DistrictCreateFormValidationValues;
} & React.CSSProperties>;
export default function DistrictCreateForm(props: DistrictCreateFormProps): React.ReactElement;
