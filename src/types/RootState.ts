import { country } from "./country";
import { SignUpState } from "./sign_up";

export type RootState = {
    countrySelect: country;
    signUp: SignUpState;
};