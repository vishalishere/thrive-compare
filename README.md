This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The purpose of this project is to create a Chrome extension that can help shoppers by comparing amazon.com prices with current thrivemarket.com prices. 

Here it is in action, for this product: http://a.co/bVT5hrv
![Primal Kitchen - Avocado Oil Mayo](https://thumbs.gfycat.com/FairOrneryKudu-size_restricted.gif)

To test extension:

```
yarn
yarn build

Load Google Chrome, go to More Tools, then Extensions  (enable Developer Mode if you haven't done so already)
Click "LOAD UNPACKED"
Target the "build" folder within the pull down repo.
Go to a valid Amazon product, then click on the extension icon.
After some time loading, product details, price and link to product on Thrive Market website will appear.
```

## FAQ:
### Why?
- I thought it would be a fun project to work on on my free time?
### Are you going to continue improving/maintaining this project?
- Possibly, when I have available free time. I think this could eventually be a useful tool for many people.
### The extension doesn't work! There are a bunch of bugs!
- That is probably true (and not a question.) I just hack at this along with a few other projects on my free time. This is more of a proof of concept for now.
### Why is it so slow?
- I am using a free proxy service to avoid cross origin issues. Ideally this chrome extension would communicate with a node proxy app that lived on Thrive Market's servers, that would then communicate with the API directly. I haven't found the time or resources do to that yet.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
