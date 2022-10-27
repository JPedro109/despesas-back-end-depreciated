import { toolkit } from "./utils/toolkit";

export const MONGO_URL = toolkit.environment.getRequiredValue("MONGO_URL");
export const DATABASE_NAME = toolkit.environment.getRequiredValue("DATABASE_NAME");
export const APP_URL = toolkit.environment.getRequiredValue("APP_URL");
export const TOKEN_EXPIRY_TIME = toolkit.environment.getRequiredValue("TOKEN_EXPIRY_TIME");
export const PORT = toolkit.environment.getRequiredValue("PORT");