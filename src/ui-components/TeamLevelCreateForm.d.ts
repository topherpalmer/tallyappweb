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
export declare type TeamLevelCreateFormInputValues = {
    levelName?: string;
    levelDisplayName?: string;
    sortOrder?: number;
    year?: string;
};
export declare type TeamLevelCreateFormValidationValues = {
    levelName?: ValidationFunction<string>;
    levelDisplayName?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
    year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamLevelCreateFormOverridesProps = {
    TeamLevelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    levelName?: PrimitiveOverrideProps<TextFieldProps>;
    levelDisplayName?: PrimitiveOverrideProps<TextFieldProps>;
    sortOrder?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamLevelCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamLevelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamLevelCreateFormInputValues) => TeamLevelCreateFormInputValues;
    onSuccess?: (fields: TeamLevelCreateFormInputValues) => void;
    onError?: (fields: TeamLevelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamLevelCreateFormInputValues) => TeamLevelCreateFormInputValues;
    onValidate?: TeamLevelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamLevelCreateForm(props: TeamLevelCreateFormProps): React.ReactElement;
