export interface WarrantyRegistrationFormData {
    title?: string | null;
    fName: string;
    lName: string;
    dob: string;
    email: string;
    mobile: string;
    serial: string;
}

export interface WarrantyRegistrationCreateResponse {
    status: number;
}

export interface WarrantyRegistrationState {
    created?: boolean;
    failed?: string;
}
