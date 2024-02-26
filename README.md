# P0002-Angular-Recipe-Book

| <img src="https://github.com/Estudos-T0117/Estudos-T0117-P0002-Angular-Recipe-Book/assets/104631043/5a6db2eb-de57-476a-a05a-88cadf95e9ff" alt="Logo" width="250" style="margin-right: 10rem;"> | [P0002-Angular-Recipe-Book](#P0002-Angular-Recipe-Book)<br>[Description](#description)<br>[Getting Started](#getting-started)<br>[Prerequisites](#prerequisites)<br>[Installing P0002-Angular-Recipe-Book](#installing-P0002-Angular-Recipe-Book)<br>[Contributing to P0002-Angular-Recipe-Book](#contributing-to-P0002-Angular-Recipe-Book)<br>[Contact](#contact)<br>[License](#license) 	|
|---|---|

## Description

`P0002-Angular-Recipe-Book` is an Angular-based application designed for a unique comunity: Developer cookers. The specific design for cooking recipes is the main focus of this application, writing and searching your recipes in a stylized enviroment for programmers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `Node.js`, `npm` and `Angular CLI`

### Installing P0002-Angular-Recipe-Book

To install P0002-Angular-Recipe-Book, follow these steps:

1. `Clone` the repository

   ```bash
   git clone https://github.com/Estudos-T0117/P0002-Angular-Recipe-Book
   ```

2. Navigate into the project directory

   ```bash
    cd P0002-Angular-Recipe-Book
   ```

3. Install the dependencies

    ```bash
    npm install -g @angular/cli
    npm install
    ```

4. Run the code

   ```bash
   ng serve
   ```

## Contributing to P0002-Angular-Recipe-Book

To contribute in the project, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b <branch_name>.
   - **Branch pattern:**
     - Use hyphens to separate words in the branch name.
     - Branch name: `(!type)-(!name)`
     - For bug fixes, follow the branch pattern: `hotfix-(bug-name)`.
3. Make your changes and commit them: git commit -m '<commit_message>'
   - **Commit format:** `!type(?scope): !subject <?body> <?footer>`
4. Push to the original branch: git push origin branch-name
5. Create the pull request.

`!` = mandatory
`?` = optional

- **Types of branches and commits:**
  - `test`: Indicates any creation or alteration of test codes. Example: Creation of unit tests.
  - `feat`: Indicates the development of a new feature to the project. Example: Addition of a service, functionality, endpoint, etc.
  - `refactor`: Used when there is a code refactoring that does not have any impact on the system's logic/business rules. Example: Code changes after a code review.
  - `style`: Employed when there are formatting and style changes in the code that do not alter the system in any way. Example: Change the style-guide, change lint convention, fix indentations, remove white spaces, remove comments, etc.
  - `fix`: Used when there is a correction of errors that are generating bugs in the system. Example: Apply treatment for a function that is not having the expected behavior and returning error.
  - `chore`: Indicates changes in the project that do not affect the system or test files. These are development changes. Example: Change eslint rules, add prettier, add more file extensions to .gitignore.
  - `docs`: Used when there are changes in the project documentation. Example: Add information in the API documentation, change the README, etc.
  - `build`: Used to indicate changes that affect the project's build process or external dependencies. Example: Gulp, add/remove npm dependencies, etc.
  - `perf`: Indicates a change that improved the system's performance. Example: Change ForEach by while, improve the query to the database, etc.
  - `ci`: Used for changes in the CI configuration files. Example: Circle, Travis, BrowserStack, etc.
  - `revert`: Indicates the reversal of a previous commit.

- **Example of Branch Name:**
  - `feat-amazing-new-feature`
  *NOTE: lowercase and in English.

- **Example of Commits:**
  - `feat(api): add endpoint for new users`
  - `fix(bug123): fix form validation error`
  - `docs(readme.md): update installation instructions`

## Contact

If you want to contact us, you can reach us at <tales.a.s.furlan@gmail.com> and <joao.oliv.victor@gmail.com>.
Please, if you want to help in a specific project, include the repository name (in this case, `P0002-Angular-Recipe-Book`) at the title of your email and your github username in the message, as well as the assistance you want to provide.

## License

This project uses the following license: `MIT`.
