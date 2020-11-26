// eslint-disable import/no-extraneous-dependencies
import "core-js/stable";
import "regenerator-runtime/runtime";

import { config as dotenv } from "dotenv";

dotenv();

import("./main").then((mod) => {
    mod.main();
});
