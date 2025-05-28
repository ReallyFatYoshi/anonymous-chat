declare const env: {
  APP_NAME: string;
  APP_ENV: "development" | "production" | "staging";
  APP_KEY: string;
  APP_ORIGINS: string;
  DATABASE_URL: string;
};

export default env;
