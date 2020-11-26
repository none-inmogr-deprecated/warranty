import { app } from "./app";
import { winstonLogger } from "./lib";

export const main = async () => {
    try {
        app.listen(process.env.PORT);
        winstonLogger.info(`API is live on: http://localhost:${process.env.PORT}`);
    } catch (e) {
        winstonLogger.error(e);
    }
};
