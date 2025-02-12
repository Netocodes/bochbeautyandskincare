// tsconfig.json (root level)
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@frontend/*": ["frontend/src/*"],
        "@shared/*": ["shared/*"]  // If you have shared code between backend and frontend
      }
    },
    "include": [
      "frontend/**/*.ts",
      "frontend/**/*.tsx",
      "shared/**/*.ts"
    ],
    "exclude": ["node_modules"]
  }
  