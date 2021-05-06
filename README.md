a# Employee Registration using VueJS + GridSome

This project contains the following technology:

1. Vuex Store
2. VueJS
3. GridSome
4. Json-server fake API

## Follow these steps to make the application running:

### 1. Clone the Project

1. `git clone https://github.com/Bomikuu/UserRegistration.git`

### 2. Setting up the Project

1. `cd UserRegistration`
2. `yarn install` to update the node_modules folder with dependency

### 3. Run the Json-server mock API

1. `cd src/api-server` to go to the json-server folder
2. Run this command `npx json-server json-server.json --routes routes.json`
3. Check `http://localhost:3000/` to make sure the server is running

### 4. Running the Employee Registration Web Page

1. `npm run develop` to run Gridsome in Development mode
2. `npm run build` to generate static files found in `/dist` folder
