import path from 'node:path';
import { env } from 'node:process';

import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load the root .env file
dotenv.config({ path: path.resolve('../../.env') });

const schema = z.object({
    APP_NAME: z.string().min(1),
    APP_ENV: z.enum(['development', 'production', 'staging']).default('development'),
    APP_KEY: z.string().base64().min(16).max(128),
    APP_ORIGINS: z.string().default('http://localhost:3000,http://127.0.1:3000'),
});

export default {
    env: schema.parse(env),
};