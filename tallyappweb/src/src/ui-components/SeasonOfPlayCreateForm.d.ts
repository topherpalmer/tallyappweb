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
export declare type SeasonOfPlayCreateFormInputValues = {
    year?: number;
};
export declare type SeasonOfPlayCreateFormValidationValues = {
    year?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeasonOfPlayCreateFormOverridesProps = {
    SeasonOfPlayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeasonOfPlayCreateFormProps = React.PropsWithChildren<{
    overrides?: SeasonOfPlayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeasonOfPlayCreateFormInputValues) => SeasonOfPlayCreateFormInputValues;
    onSuccess?: (fields: SeasonOfPlayCreateFormInputValues) => void;
    onError?: (fields: SeasonOfPlayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeasonOfPlayCreateFormInputValues) => SeasonOfPlayCreateFormInputValues;
    onValidate?: SeasonOfPlayCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeasonOfPlayCreateForm(props: SeasonOfPlayCreateFormProps): React.ReactElement;
