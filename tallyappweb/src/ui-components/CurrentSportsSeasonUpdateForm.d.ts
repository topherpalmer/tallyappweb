/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CurrentSportsSeason } from "../models";
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
export declare type CurrentSportsSeasonUpdateFormInputValues = {
    year?: string;
    seasonName?: string;
};
export declare type CurrentSportsSeasonUpdateFormValidationValues = {
    year?: ValidationFunction<string>;
    seasonName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentSportsSeasonUpdateFormOverridesProps = {
    CurrentSportsSeasonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    seasonName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentSportsSeasonUpdateFormProps = React.PropsWithChildren<{
    overrides?: CurrentSportsSeasonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    currentSportsSeason?: CurrentSportsSeason;
    onSubmit?: (fields: CurrentSportsSeasonUpdateFormInputValues) => CurrentSportsSeasonUpdateFormInputValues;
    onSuccess?: (fields: CurrentSportsSeasonUpdateFormInputValues) => void;
    onError?: (fields: CurrentSportsSeasonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CurrentSportsSeasonUpdateFormInputValues) => CurrentSportsSeasonUpdateFormInputValues;
    onValidate?: CurrentSportsSeasonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentSportsSeasonUpdateForm(props: CurrentSportsSeasonUpdateFormProps): React.ReactElement;
