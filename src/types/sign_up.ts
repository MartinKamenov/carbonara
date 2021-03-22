export type SignUpInputTypes = 'text' | 'dropdown' | 'checkbox' | 'phone';
export type ValidatorFunctionResult = {
    isValid: boolean;
    error: string;
};
export type ValidatorFunction = (value: string | boolean) => ValidatorFunctionResult;

export type SignUpInput = {
    key: string;
    value: string | boolean;
    validationFunction?: ValidatorFunction;
    type: SignUpInputTypes;
    label: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
    valid: boolean;
};

export type SignUpState = {
    steps: {
       fields: SignUpInput[];
       description: string;
    }[];
    step: number;
    done: {
        header: string;
        description: string;
    };
}