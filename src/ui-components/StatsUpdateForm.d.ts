/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Stats } from "../models";
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
export declare type StatsUpdateFormInputValues = {
    points?: number;
    rebounds?: number;
    assists?: number;
    fouls?: number;
    shotsTaken?: number;
    threePointersTaken?: number;
    threePointersMade?: number;
    gameId?: string;
    type?: string;
    teamId?: string;
    status?: string;
};
export declare type StatsUpdateFormValidationValues = {
    points?: ValidationFunction<number>;
    rebounds?: ValidationFunction<number>;
    assists?: ValidationFunction<number>;
    fouls?: ValidationFunction<number>;
    shotsTaken?: ValidationFunction<number>;
    threePointersTaken?: ValidationFunction<number>;
    threePointersMade?: ValidationFunction<number>;
    gameId?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    teamId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatsUpdateFormOverridesProps = {
    StatsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    rebounds?: PrimitiveOverrideProps<TextFieldProps>;
    assists?: PrimitiveOverrideProps<TextFieldProps>;
    fouls?: PrimitiveOverrideProps<TextFieldProps>;
    shotsTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersTaken?: PrimitiveOverrideProps<TextFieldProps>;
    threePointersMade?: PrimitiveOverrideProps<TextFieldProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stats?: Stats;
    onSubmit?: (fields: StatsUpdateFormInputValues) => StatsUpdateFormInputValues;
    onSuccess?: (fields: StatsUpdateFormInputValues) => void;
    onError?: (fields: StatsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsUpdateFormInputValues) => StatsUpdateFormInputValues;
    onValidate?: StatsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatsUpdateForm(props: StatsUpdateFormProps): React.ReactElement;
