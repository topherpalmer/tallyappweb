/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Ticket } from "../models";
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
export declare type TicketUpdateFormInputValues = {
    type?: string;
    displayName?: string;
    date?: string;
    status?: string;
    year?: string;
    cost?: string;
};
export declare type TicketUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    displayName?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketUpdateFormOverridesProps = {
    TicketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    displayName?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketUpdateFormProps = React.PropsWithChildren<{
    overrides?: TicketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ticket?: Ticket;
    onSubmit?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onSuccess?: (fields: TicketUpdateFormInputValues) => void;
    onError?: (fields: TicketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onValidate?: TicketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TicketUpdateForm(props: TicketUpdateFormProps): React.ReactElement;
