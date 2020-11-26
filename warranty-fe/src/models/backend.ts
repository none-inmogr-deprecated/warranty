export interface BackendResponse<T> {
    status: number;
    response: T;
    errors?: string[] | Record<string, string[]>;
}
