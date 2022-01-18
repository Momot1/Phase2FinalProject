# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Assuming you have json-server installed on your system, you can run 

### `json-server --watch db.json`

This will give the website access to the information stored in the database. 

This web application gives users the ability to not have to keep track of everything they want to buy from every website they want to buy it from. Users have the ability to add items to their wishlist, and be able to view all those items on one single homepage. They will have access to the links as to where they want to purchase it, and even be able to delete them whenever they want to. 

The index.js file just loads the webpage.

The App.js file creates the NavBar and all the routes for the URL of the webpage.

The Home.js file grabs all the data from the db.json file and puts them on the screen using WishlistItem.js file. This file just puts the image of the item on the homepage if that item is not clicked, but if the user clicks the item, it displays more information about that item. 

The Login.js file handles the login functionality. It checks the database to see if the user inputted credentials matches any of the credentials in the database. 

The Logout.js file just logs the user out, and sends them to the homepage. 

The Signup.js file allows the user to create an account using a form, and then they'll be able to sign in with that information later on.

The NavBar.js file creates a navbar with the links for the home page, a page to be able to add a new item to their wishlist, and a login/logout button.

Finally, the NewItem.js file creates a form and allows the user to add a new item to their wishlist. When submitted, the user will be brought back to the home page with their new item added. Also, the user will only be allowed to add a new item if they are logged in. 
