import { SettingsState } from "./settings";
import { WarrantyRegistrationState } from "./warranty-registration";

export type ReduxState<T> = T | undefined;

export interface ReduxAction<T> {
    type: string;
    payload: T;
}

export interface ReduxStore {
    settings: SettingsState;
    warrantyRegistration: WarrantyRegistrationState;
}
