# Campfire SDK Sample App

This app allows you to test the Campfire SDK against a running instance of the CMS.

## Setup

0.  Ensure you have `nvm` installed
1.  Clone the repo
2.  In the repo root directory, run

        nvm install
        corepack enable
        yarn install

## Configuration

Create a file called `apps/sample-app/.env` with the following contents:

```
VITE_EXAMSPARK_SDK_CONSUMER_KEY=...
VITE_EXAMSPARK_SDK_SECRET=...
VITE_EXAMSPARK_SDK_DOMAIN=...

#
# These settings control what user you will connect as;
# If the email address matches an existing user you will
# authenticate as that user
#
VITE_EXAMSPARK_SDK_USER_EMAIL=you@examspark.com
VITE_EXAMSPARK_SDK_USER_FIRST_NAME=You
VITE_EXAMSPARK_SDK_USER_LAST_NAME=Person
```

To determine the values for the variables:

- `_CONSUMER_KEY` / `_SECRET` are an LTI key and secret from an app license for the workspace you want to connect to. You can retrieve these values from the CMS workspace admin screen.

  > NOTE: The behavior of the SDK will vary somewhat depending on which app you are connecting to; a good app to start with is Campfire.

- `_SDK_DOMAIN` is the base URL for the Rest API in the environment you're connecting to. For the develop environment, this is
  `https://api.develop.examspark.com`.

## Launching

Once configured, you can launch the app from the terminal by navigating into the `apps/sample-app` directory and running `yarn start`.
