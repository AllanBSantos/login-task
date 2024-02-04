# Login-Task

**Login-Task** is a project that simulate a login service. Below, I'll outline how to set up the project, explain its folder structure, and suggest improvements.

## Getting Started

To use **Login-Task**, follow these steps:

1. Clone the project using one of the following methods:
    - Via HTTPS: `git clone https://github.com/AllanBSantos/login-task.git`
    - Using GitHub CLI: `gh repo clone AllanBSantos/login-task`

2. After cloning, create an `.env` file in the root directory of your project. This file will store environment variables. Add the following line to your `.env` file:
    ```
    REACT_APP_API_URL=https://cms.trial-task.k8s.ext.fcse.io/graphql
    ```

3. Install project dependencies:
    ```
    yarn install
    ```

4. Start the development server:
    ```
    yarn start
    ```

4. 1. Unit tests can be run with   
 ```
    yarn test
    ``` 

## Folder Structure

Here's an overview of the project's folder structure:

- **`src`**: The main source directory.
    - **`components`**: Contains reusable React components.
        - Each component has the following files:
            - `index.ts`: Entry point for the component.
            - `Component.tsx`: The actual component implementation.
            - `Component.style.tsx`: Styled component file.
            - `__test__`: Unit tests for the component (e.g., `Component.test.tsx`).
    - **`context`**: Context hooks.
    - **`graphql`**: GraphQL-related files (queries, mutations, etc.).
    - **`lib`**: Utility functions or helper classes.
    - **`locale`**: Files of translations
    - **`pages`**: Top-level pages.
        - Each page may have its own subfolder with a similar structure as components.
    - **`types`**: TypeScript type definitions.
    - **`utils`**: General utility functions.

## Project Improvements

While **Login-Task** 

1. **Error Handling**: Enhance error handling throughout the application. Provide meaningful error messages to users.
2. **Additional Tests**: Besides unit tests, consider adding integration tests and end-to-end tests.
3. **Coverage Reporting**: Configure code coverage reporting to track test coverage.
4. **HTTPOnly Tokens**: Implement token storage on the server using HTTPOnly cookies for better security.
