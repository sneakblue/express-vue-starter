# Express / Vue Starter #

## Install Vue CLI ##
1. Install the vue CLI globally using the following command:

    ```bash
        npm install -g @vue/cli
    ```

2. add this line to your **.bashrc**:

    ```bash
        alias vue='winpty vue.cmd'
    ```

- Note - to generate a new Vue app using the Vue CLI (if prompted
for preset by the CLI, choose default): `vue create <app-name>`
    - a folder labeled `<app-name>` will be generated containing the Vue skeleton
    - Beyond the default options, more node modules can be installed that typically complement Vue.js


---------------------------------------------------------------------
## Deployement ##
1. ### login to Heroku in the CLI ###
    ```bash
        heroku login
    ```

2. ### Add Heroku as remote to your repo ###
    ```bash
        heroku git:remote -a <name-of-Heroku-app>
    ```

3. ### Update config Vars on Heroku from .env ###
    - JWT_EXPIRES_IN
    - JWT_SECRET

4. ### push the main branch ###
    ```bash
        git push heroku main
    ```

------------------------------------------------------------------
### Pinia Notes ###
- Each "slice of state" is referred to here as "stores"
- actions === thunks & Reducers & actions - allows for use of async functions as well as params to be passed in. It is also possible to update the state inside of an action
- getters === actions & reducer switch case rolled into one! - since there is no need to declare an action-switch case, getters are more functions to call to make specific updates to the stores. In use if you only want to modify the existing store


# Vue Docs #
- Vue - https://vuejs.org/
- Vue CLI - https://cli.vuejs.org/
- Pinia - https://pinia.vuejs.org/
- Vue Router - https://router.vuejs.org/
