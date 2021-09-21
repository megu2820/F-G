The react application has two sections

Section 1
● Has a feedback form for a restaurant with the following questions and layout details.
● Form name: Aromatic Bar
● Form Description: We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.
● Below are the text fields that are captured in the form.
1. Customer Name:
2. Email:
3. Phone:
● Below are the following questions each with four options as checkbox i.e (Excellent, good, fair, bad).
1. Please rate the quality of the service you received from your host.
2. Please rate the quality of your beverage.
3. Was our restaurant clean?
4. Please rate your overall dining experience.
● On submission of the form, the following validations on the form fields are done and a proper message with validation error should be shown to the user.
1. All fields are mandatory.
2. Email & phone fields should be valid and properly formatted.
● On clicking submit form users  get a message “Thank you for completing the information” and data is be stored locally on thedevice in browser storage. You can use any browser storage like(indexDb, local storage, session storage, etc).

Here is the attached screenshot of section 1

![Screenshot (5)](https://user-images.githubusercontent.com/66476812/134195430-23b227b7-27df-4795-8f6c-819c7f3fac88.png)


Section 2
● App shows a list of submissions from the browser storage (as saved in section 1 ) in Table
● I am using material-table to integrate my table
● Data is not lost on reloading the page.


Here is the attached screenshot of section 2


![Screenshot (6)](https://user-images.githubusercontent.com/66476812/134195842-5db9317f-c02f-4e58-a30c-16f371a37a6b.png)


STEPS TO RUN THE APP

Clone the repo to your desired location in your system
Cd to the repo on your system and run npm i in the terminal to install all the required dependencies and packages.
After that run npm start.
Browse to localhost:3000 and you will see the app running there.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
