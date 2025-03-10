# 🔥 Campfire Coding Challenge 🔥

Showcase your code-writing and product-building skills. Complete one of the
following [projects](#projects) below to demonstrate:

- an ability to translate high-level requirements into a great software product;
- an ability to make reasonably sound decisions in the absence of specific requirements;
- proficiency in our team's existing technology stack (eg. languages,
  frameworks);
- a pronounced level of care for the quality of the resulting product (UX) delivered.

## Requirements

NOTE: We're a Mac shop. If you intend to develop this project on a PC, you might
have some things to figure out. We haven't tested this out on a PC yet.

We recommend developing this project using VS Code, and installing the [recommended extensions](.vscode/extensions.json).

- Node 20
  - If using nvm, run `nvm install`
- `corepack enable` to respect Yarn 4 package manager dependency
- `yarn` will install all of the project dependencies
- `yarn start` will start the projects showcase app (Vite)

## Usage

This repository uses a few tools for ensuring code quality and consistency.

- `prettier` - maintains formatting consistency
- `eslint` - maintains code quality
- `husky` - manages git precommit hooks, which enforce eslint/prettier rules, and [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) messages

The configuration for all these tools at the root of the repo can mostly be ignored.

## Projects

### Item Authoring and Previewing

One of the most important capabilities in our platform is providing interfaces
for authoring and previewing assessment questions of various types. In this
challenge, you will create your own Multiple-Choice style item authoring
interface, including a way to define the correct answer, and preview the student
experience as an author.

[View Item Authoring Project Specs](./docs/item-authoring.md)

![Sample Item](https://examspark-app-files-master.s3.amazonaws.com/public/campfire-coding-challenge-assets/mc-sample-item-author.gif)
