export type CountryKey = "UK" | "Italy";

export type country = {
    key: CountryKey;
    name: string;
    cities: string[];
};