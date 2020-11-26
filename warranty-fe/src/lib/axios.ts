import axios from "axios";

export const configureAxios = () => {
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            // Here you can perform the following:
            // 1. Refresh Token & Resend Request
            // 2. Kick out the user and clean the storage
            // 3. Any other side operations such as removing device notification or others
            // 4. Retry for 500
            // Unfortunately I did not cover the above comments
            if (error.response.status === 404) {
                throw new Error("An error occurred");
            }
            if (error.response.status !== 200) {
                if (!error.response.data?.errors) {
                    throw new Error("An error occurred");
                }
                if (Array.isArray(error.response.data.errors)) {
                    throw new Error(error.response.data.errors[0]);
                }
                const keys = Object.keys(error.response.data.errors);
                throw new Error(error.response.data.errors[keys[0]][0]);
            }
            return error;
        },
    );
};
