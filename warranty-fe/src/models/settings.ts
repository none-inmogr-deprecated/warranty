export type ThemeId = "blue" | "default" | "green";

export interface SettingsState {
    loading: boolean;
    themeId: ThemeId;
}
