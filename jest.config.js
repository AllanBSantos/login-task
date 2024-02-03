const jestConfig = { 
 setupFilesAfterEnv: ['./setupTests.ts'],
 testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
}

export default jestConfig;
