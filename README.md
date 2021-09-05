# Lágr-Vindr

Lágr-Vindr (old Norse for "low-wind) is an opinionated template built atop of the popular Express framework. 

It is aimed at aspiring developers to give a sense of structure when starting Node projects. Coming from a PHP background, this has been heavily inspired by how Laravel handles it's underlying architecture. 

## About

The tempalte is not overly complex. You have a base file structure, as you would expect from a node application, the root app.js is the main entrypoint for the application. This has been simplified to import from a bootstrap file. The bootstrap.js "bootstraps" the application together by overloading Express functions with additional useful functionality, with the intent of keeping the project clean.

It is recommended you require any additionally needed files into this file. Utiltiy functions are provided on the global object to make life easier. This includes an "include" method which allows you to require files using an absolute path. 

## Defining Routes

Routes should be defined in the api/web folders respectively. These should be made in their own route files which should then be required into the main index.js file. This will automatically provide access to the routes as they are included via Express middleware. API routes should always be defined with "/api/" prior to the route, we are currently working on appending this via middleware to make this simpler. 

## Templating

By default the EJS templating engine is used. This is chosen as a simple fan-favourite due to the JS based syntax. You can change this out by editing the bootstrap.js if necessary.

## Config

To add additional config we recommend creating a new js file named after the config you require. We will be adding a database.config based around the Mongoose config for MongoDB, however, this will be able to the switched out. This should be exported as the current app.js config is, and required in within the bootstrap.js in the resources folder. 

We recommend setting a default and having settings read-in from a .env file to allow easy changes for dynamic settings. 

## Overrides

If you wish to override the express "app" object features please use the overrides.js file in utils, you can then add your own properties to the express app. This is seen within our "start" function which creates a new function on the express app, this calls the listen method with default logging settings, and whilst reading the port number from the config file directly, leading to a cleaner syntax in our main app.js. Be wary if you choose to replace any functionality in Express, the safest option is to add new properties without removing or overwriting others. 

## Scripts

We have added various dev scripts to the package.json. This is intended to 
make development easier. We use Yarn as our default package manager (see yarn docs).

You can start the app for development using <code>yarn start-dev</code>, this will 
fire up the app using nodemon with --trace-sync-io for detecting synchronous code.
We also have a watch command <code>yarn watch</code> for compiling SCSS, although
there is also a gruntfile allowing for you to use grunt watch if preferred.

To contrast, <code>yarn start</code> will run the app under pm2 for production use. 
<code>yarn live</code> will run a live nodemon server without addons. You may also manually compile SCSS using <code>yarn sass-compile</code>.