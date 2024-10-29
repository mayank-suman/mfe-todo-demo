# Microfrontend todo app

Steps to run the demo application:

1. There are two directories present in the root. One is `host` and another is `remote`. First, Navigate to `remote` directory.
2. Install the dependencies by running the `yarn install`.
3. Now, run the remote app by `yarn start`. It should run on port `8090`.
4. Now open a new terminal and navigate to `host` directory.
5. Install the dependencies by running the `yarn install` in this directory as well.
6. Run the host app by running the command `yarn start`. It should be running on port `8080`.
7. Check the host app to render the remote TODO app.
