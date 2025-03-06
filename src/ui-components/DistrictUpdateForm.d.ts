/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { District } from "../models";
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
export declare type DistrictUpdateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
};
export declare type DistrictUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistrictUpdateFormOverridesProps = {
    DistrictUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DistrictUpdateFormProps = React.PropsWithChildren<{
    overrides?: DistrictUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    district?: District;
    onSubmit?: (fields: DistrictUpdateFormInputValues) => DistrictUpdateFormInputValues;
    onSuccess?: (fields: DistrictUpdateFormInputValues) => void;
    onError?: (fields: DistrictUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistrictUpdateFormInputValues) => DistrictUpdateFormInputValues;
    onValidate?: DistrictUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DistrictUpdateForm(props: DistrictUpdateFormProps): React.ReactElement;
