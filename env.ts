// ENV VALIDATION
//
// allows us to switch between test to real
import { env as loadEnv } from 'custom-env'
//typescript doesnt exist at runtime (only during writing and compilation), zod checks types at runtime
import { z } from 'zod'

// app stage (deployed, development,..) defaut is def (NODE_ENV is meant for production optimization, you almost always want that at "production")
process.env.APP_STAGE = process.env.APP_STAGE || 'dev'

// little bools for conveniance
const isProduction = process.env.APP_STAGE === 'production'
const isDevelopment = process.env.APP_STAGE === 'dev'
const isTest = process.env.APP_STAGE === 'test'

// in production, i don't upload env, so the hosting provider provides full env. for here we need to load our local one
if (isDevelopment) {
  loadEnv()
} else if (isTest) {
  loadEnv('test')
}

// put envs that i expect to have
// enum means "one of these"
// Define validation schema with Zod
const envSchema = z.object({
  //Node environment
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  APP_STAGE: z
    .enum(['dev', 'test', 'production']),

  //serverconfig
  PORT: z.coerce.number().positive().default(3000),
  //database
  DATABASE_URL: z.string().startsWith('postgresql://'),
  //jwt & auth
  JWT_SECRET: z.string().min(32, 'Must be 32 chars long'),
  JWT_EXPRIRES_IN: z.string().default('7d'),
  //security
  BCRYPT_ROUNDS: z.coerce.number().min(10).max(20).default(12),
})

// create a typescript type by inferring the type of a zod schema
//typepof is an argument to a type
export type Env = z.infer<typeof envSchema>

//-- Environment Validation and Error Handling --

// parse and validate env vars
let env: Env

// build the object: (zod will throw an error if any of them fail at runtime)
try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log('Invalid env var')
    // null, 2: formatted with spaces of 2
    console.error(JSON.stringify(error.flatten().fieldErrors, null, 2))

    error.issues.forEach((err) => {
      const path = err.path.join('.')
      console.log('${path}: ${err.message}')
    })
    process.exit(1) // Exit with error code 
  }
  throw error
}

// Helper functions
const isProd = process.env.APP_STAGE === 'production'
const isDev = process.env.APP_STAGE === 'dev'
const isTestEnv = process.env.APP_STAGE === 'test'

export { env }
export default env
