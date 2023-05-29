
## Live App Link 
### https://pwachat.netlify.app

## Download the app on your local system

The published site is a PWA and downloadable on your system. Click

The app uses an http source(http://3.111.128.67/assignment/chat?page=0) to fetch the data,
because of which chrome blocks the requests and you can't see the fetched data.

Therefore, to see the fetched data, you must change site settings.
To change site settings click on the 🔒 icon in your search bar and go to Site settings and select Allow for Insecure Content.
Relaod the application and it will now show you the data.

However, on doing this, the app is no longer a PWA because we allowed it to fetch data from insecure content. 
Therefore, it is recommended to run it locally on your system by cloning the repo and check on "lighthouse" whether the app is PWA certified which it is.

## You can run this app on your local system by cloning this repo in your local system.

- Install NodeJs
- Open the terminal and Clone this repository by running: git clone https://github.com/Yash8840/pwa-corider.git
- After cloning go to the project folder and run: npm install
- Now for running the project locally run: npm start
-Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#