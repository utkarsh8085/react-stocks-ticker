# react-stocks-ticker
Working version http://utkarsh8085.github.io/stocks-ticker/#/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Development
```bash
npm install
npm run start
```

### Deployment to github pages
Install the "gh-pages" plugin. This will allow you to publish to the gh-pages branch on GitHub straight from within the terminal:
npm install --save-dev gh-pages

Add a new script to the scripts field inside package.json. Let’s call the script deploy:
"deploy" : "npm run build&&gh-pages -d build"

And finally let’s run it:
```
npm run deploy
```

### Description
- This application fetches data from the websocket URL.

##### The Application structure is as follows:
```
├── public                        # Static public assets (not imported anywhere in source code)
├── src                           # Application source code
│   ├── components                # Components used for the application will be listed in this directory
│   │   └── StockTable.js                # Table component which renders the data from socket.
│   ├── pages                     # Contains all the different pages of the application
│   │   ├── App                   # Components used for the application will be listed in this directory
│   │   │   └── styles            # Components used for the application will be listed in this directory
│   │   │   │  ├── App.css        # css for the application
│   │   │   ├── App.js            # Main page of the application
│   ├── index.css                 # global css
│   ├── index.js                  # root file of the application
│   ├── routes.js                 # Routes for the whole application are defined here
├── .gitignore                    # contains files/folders which are to be ignored by the project in git.
├── package.json                  # package.json file that includes all the dependencies for the project
├── README.md                     # Contains documentation for the project.
```

