/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Conference } from "../models";
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
export declare type ConferenceUpdateFormInputValues = {
    name?: string;
    seasonOfYear?: string;
};
export declare type ConferenceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    seasonOfYear?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConferenceUpdateFormOverridesProps = {
    ConferenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    seasonOfYear?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConferenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConferenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    conference?: Conference;
    onSubmit?: (fields: ConferenceUpdateFormInputValues) => ConferenceUpdateFormInputValues;
    onSuccess?: (fields: ConferenceUpdateFormInputValues) => void;
    onError?: (fields: ConferenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConferenceUpdateFormInputValues) => ConferenceUpdateFormInputValues;
    onValidate?: ConferenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConferenceUpdateForm(props: ConferenceUpdateFormProps): React.ReactElement;
