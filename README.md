# GrassJs-ngJs-es6-basic

# Cloning a repository : Can Connect VSCode and Git together.
    1. Command Palette (Ctrl+Shift+P);
    2. Git Clone https://github.com/GrassVan/GrassJs-ngJs-es6-basic.git
    3. Selected a folder, OK
  
# Modern AngularJS(components) + Webpack + ES6 + BootStrip + Sass implementation

# How to setup ?
# step 1 :  AngularJS + Webpack + babel + sass :
- >npm init -y
- >code .

>npm i webpack webpack-cli -D

>npm install angular -D

>npm install babel-loader babel-core babel-preset-es2015 --save-dev 

- create "webpack.config.js" file.
- add HelloWorld folders and files

>npm install webpack-dev-server --save-dev

- install html-webpack-plugin
>npm i html-webpack-plugin -D

- create ".babelrc" file

install css*-loader:
>npm install sass-loader node-sass css-loader style-loader --save-dev

successful!

# change folder name to "client"?
  Now I only use folder "/src"!
# remove ".babelrc" file to package.json?
  We can put "babel" section on package.json. donot use ".babelrc".

- install html-loader and add webpack.config.js "test:/\.html$/,"
  > npm i -D html-loader


[2018-06-07]
- basic "Hello World" 'angular-ui-router' worked.

- install bootstrap
  >npm install bootstrap --save
- bootstrap need bootstrap install it.
- and add css loader on webpack.config.js
			{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
			},  
  Worked!
  
- loading image need  
  > npm install file-loader --save-dev


# step 2: ng-redux redux-logger. 
- install ng-redux
>npm install --save-dev ng-redux

//> redux-logger

- copy folders and files
- install angular-ui-router
> npm install angular-ui-router  -D

- install redux
> npm install redux  -D
    - or install redux-logger
    >npm i --save-dev redux-logger
    >npm i --save redux-logger
