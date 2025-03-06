/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TeamLevel } from "../models";
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
export declare type TeamLevelUpdateFormInputValues = {
    levelName?: string;
    levelDisplayName?: string;
    sortOrder?: number;
    year?: string;
};
export declare type TeamLevelUpdateFormValidationValues = {
    levelName?: ValidationFunction<string>;
    levelDisplayName?: ValidationFunction<string>;
    sortOrder?: ValidationFunction<number>;
    year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamLevelUpdateFormOverridesProps = {
    TeamLevelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    levelName?: PrimitiveOverrideProps<TextFieldProps>;
    levelDisplayName?: PrimitiveOverrideProps<TextFieldProps>;
    sortOrder?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamLevelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamLevelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamLevel?: TeamLevel;
    onSubmit?: (fields: TeamLevelUpdateFormInputValues) => TeamLevelUpdateFormInputValues;
    onSuccess?: (fields: TeamLevelUpdateFormInputValues) => void;
    onError?: (fields: TeamLevelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamLevelUpdateFormInputValues) => TeamLevelUpdateFormInputValues;
    onValidate?: TeamLevelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamLevelUpdateForm(props: TeamLevelUpdateFormProps): React.ReactElement;
