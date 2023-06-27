# DevGeekWeek 2023 - Node.js & React

## Overview

1. Node.js Async programming
2. Building Api
3. Creating Simple Integration test
4. Error handling
5. Common libs: Cors,Zod,dotEnv
6. React client using vite
7. Making Ajax ( http request - using axios ) to out Api

- Cors - Allow users from other domains to access our API
- Zod - Input validation
- dotEnv - control environment variables

# Node

#### Recommended Project Structure

1. Create A folder devGeekWeek2023 ( `mkdir devGeekWeek2023` )
2. Navigate into the folder ( `cd devGeekWeek2023` )
3. Create A folder inside devGeekWeek2023 with name: lecture ( `mkdir lecture` )
4. Create another folder inside devGeekWeek2023 with name: myLab ( `mkdir myLab` )
5. Structure
   `---- devGeekWeek2023`
   `-------- lecture`
   `-------- myLab`
6. Navigate into `lecture folder` & clone our repo
7. Run `git clone  https://github.com/galamo/devGeekWeek2023_Node_React`
8. each time you want to update your code Run `git pull origin head`

#### Git ( openning new branch - only if needed)

- `git checkout -b <YOUR_BRANCH_NAME>`
- `git checkout master`
- `git pull`

#### Api:

[products](https://dummyjson.com/docs/products)

### Node.js

#### Testing your environment

1. open `CMD`
2. Run
   ```cmd
    node -v
   ```
3. Run
   ```cmd
    npm -v
   ```
4. Type `node` press `enter`
5. declare Javascript variable and print it
   ```js
   > const userName = 'Gal'
   > userName
   ```

#### Starter files:

1. .gitignore
2.

#### Async programming

1. `Callback`
2. `Promise`
3. `Async` `await`

#### Building our API

- Install Globals
  ```
  npm install -g typescript -g nodemon -g concurrently
  ```
- Navigate to the api folder
- Run
  ```cmd
  npm init
  ```
- Answer the interactive questions
- Paste the following Json in the `package.json` file under `dependencies` key

  ```js

  {

      "concurrently": "^6.2.0",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "zod": "^17.4.0",
      "nodemon": "^2.0.7",
      "ts-node": "^10.0.0",
      "typescript": "^4.3.2",
      "winston": "^3.3.3"
  },

  ```

- Paste the following Json in the `package.json` file under `devDependecies` key

  ```js
  {
      "@types/joi": "^17.2.3",
      "@types/express": "^4.17.12",
      "@types/node": "^15.12.2"
  }
  ```

- Install the dependencies
- Run

  ```cmd
  npm install
  ```

  Or

  ```cmd
  npm i
  ```

- Typescript Setup
  1. Add `tsconfig.json` file to the `api`
  ```js
  {
      "compilerOptions": {
          "module": "commonjs",
          "outDir": "dist",
          "target": "ES2015",
          "esModuleInterop": true,
          "resolveJsonModule": true,
          "baseUrl": "src"
      },
      "include": [
          "./src"
      ],
      "exclude": [
          "node_modules"
      ]
  }
  ```
  - concurrently script
  ```js
  "all": "concurrently -k -p \"[{name}]\" -n \"TypescriptCompiler,application\" -c \"red.bold,yellow.bold,\" \"npm run build_watch\" \"npm run dev\"",
  ```

# Running Setup for API

first run
`npm install -g typescript -g nodemon -g concurrently`

1. navigate `./apps/api/`
2. run `npm i`
3. run `npm run all`

#### Express

1. Initial HTTP Server snippet
2. Create the first entry point

```js
const express = require("express");
const app = express();

app.get("/healthcheck", function (req, res) {
  res.send("Api is working");
});

app.listen(3333);
```

# Ex1

1. Add new entry point /GET username
2. return your user name ( hardcoded ) for example `return res.send("GalA")`

3. Entry points

- GET `/products`
- GET `/products/:id`
- GET `/products/search?q=param`
- POST `/auth/login`

# Ex2

1. Add new entry point /GET products/:id
2. according the following API [products](https://dummyjson.com/docs/products)

3. Create Router

   ```js
   const express = require("express");
   const router = express.Router();
   router.get("/products/search", function (req, res) {
     // implementation
   });
   ```

# React

### Using vite

`npm create vite@latest`

### Subjects:

1. Component
2. Stateless Vs Statefull
3. UseState
4. UseEffect

# EX-1

1. Create Header component
2. function MyHeader
3. the component recieve a string header
4. the component will render a the relevant sting under <h1> element
