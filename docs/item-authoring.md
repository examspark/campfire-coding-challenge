# Project: Item Authoring

The purpose of this project is to provide an item authoring and previewing
interface suitable for assessment content publishers. While Campfire supports
authoring more than 25 item types within Studio, we'll stick with the most basic
type for this project: Multiple Choice.

## Requirements

### Technical Requirements

The necessities of this project are already installed, but are worth mentioning
here as well. Please use the following tools in this project:

- Display the project with [Vite](https://vite.dev/)
- Build components using [Typescript React](https://react.dev/learn/typescript)
- Manage item editor component state with: [Zustand + Immer](https://zustand.docs.pmnd.rs/)
- Style components with [Styled Components](https://styled-components.com/)
- Support option reordering with [dndkit](https://docs.dndkit.com/)
- Test your components with [Cypress](https://docs.cypress.io/app/component-testing/get-started)
- Unit test any additional logic with [Jest](https://jestjs.io/)
- Make reasonable use of the monorepo structure of this project to place
  components in their proper place for use throughout the project.
  - Core UI components should be placed in `./packages/c3-ui-core`
  - Item authoring components should be placed in `./packages/c3-ui-authoring`
  - Note: It should not be necessary to `build` any of these packages to use
    this in this monorepo. Vite will source-import these components.

### Product Requirements

- Provide an interface that allows a user to build a multiple-choice question.
  The authoring interface should allow for the following actions.
  - Inputs for the Prompt and a variable number of Options
  - Ability to reorder option order on-the-fly
  - Ability to set the "key" (correct answer)
  - Abilty to add a variable number of options
- Provide an interface that allows author to preview the item as a student.
- Bonus: Use
  [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/self-hosted/react/react-default-npm.html)
  for input entry vs. standard text input.

## Model Outcome

You are welcome to model your outcome after our existing interface. The general editing experience looks like this:

![Sample Item](https://examspark-app-files-master.s3.amazonaws.com/public/campfire-coding-challenge-assets/mc-sample-item-author.gif)

Authors also need the ability to rearrange question options easily:

![Sample Item](https://examspark-app-files-master.s3.amazonaws.com/public/campfire-coding-challenge-assets/mc-sample-item-author-rearrange.gif)

Finally, the author needs a way to preview the question similar to how a learner will encounter this item in a digital assessment.

![Sample Item](https://examspark-app-files-master.s3.amazonaws.com/public/campfire-coding-challenge-assets/mc-sample-item-author-preview.gif)
