export type bullet = {
    icon: string;
    description: string;
    link: {
        label: string;
        disabled: boolean;
        to?: string;
    },
};