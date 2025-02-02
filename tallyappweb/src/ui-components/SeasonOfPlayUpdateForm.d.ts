/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SeasonOfPlay } from "../models";
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
export declare type SeasonOfPlayUpdateFormInputValues = {
    year?: number;
};
export declare type SeasonOfPlayUpdateFormValidationValues = {
    year?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeasonOfPlayUpdateFormOverridesProps = {
    SeasonOfPlayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeasonOfPlayUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeasonOfPlayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seasonOfPlay?: SeasonOfPlay;
    onSubmit?: (fields: SeasonOfPlayUpdateFormInputValues) => SeasonOfPlayUpdateFormInputValues;
    onSuccess?: (fields: SeasonOfPlayUpdateFormInputValues) => void;
    onError?: (fields: SeasonOfPlayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeasonOfPlayUpdateFormInputValues) => SeasonOfPlayUpdateFormInputValues;
    onValidate?: SeasonOfPlayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeasonOfPlayUpdateForm(props: SeasonOfPlayUpdateFormProps): React.ReactElement;
