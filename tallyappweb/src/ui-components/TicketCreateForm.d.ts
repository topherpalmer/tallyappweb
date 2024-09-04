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
export declare type TicketCreateFormInputValues = {
    type?: string;
    displayName?: string;
    date?: string;
    status?: string;
    year?: string;
    cost?: string;
};
export declare type TicketCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketCreateFormOverridesProps = {
    TicketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketCreateFormProps = React.PropsWithChildren<{
    overrides?: TicketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TicketCreateFormInputValues) => TicketCreateFormInputValues;
    onSuccess?: (fields: TicketCreateFormInputValues) => void;
    onError?: (fields: TicketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketCreateFormInputValues) => TicketCreateFormInputValues;
    onValidate?: TicketCreateFormValidationValues;
} & React.CSSProperties>;
export default function TicketCreateForm(props: TicketCreateFormProps): React.ReactElement;
