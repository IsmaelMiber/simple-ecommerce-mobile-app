## Built With

This project task required to built with major tools listed below:

- **TypeScript**
- **Expo**
- **@reduxjs/toolkit**
- **@react-navigation**
- **FakeStoreApi.com**

## Getting Started

### Prerequisites

- Download nodejs from [here](https://nodejs.org/en/download/)
- Use npm or yarn package manager, you don't need to install npm it come built-in with nodejs as the official package manager for javascript dependencies.
- If you need to use yarn follow instruction from [here](https://classic.yarnpkg.com/en/docs/install)

### Installation

- Clone the repo
  `git clone #REPO`

- Open project folder
- Open cmd for it.
- Run `npm install` or `yarn install`
  It will ask you for installing `expo` globally response with `y` or `n` as you like.(this will happen if expo not installed globally before)
- After installing finished run `yarn start`
- The project server will start and open web page, the dashboard to choose to run project on `IOS` or `ANDROID`, there also option to open it as a web project but in our case it is not.
- The project uploaded on Expo, you can install Expo Client App and scan barcode of the project and it will run on the device, [here](https://expo.io/@ismaelmiber/projects/simple-ecommerce-app).

### Features

1. Home
   - Listing Categories.
   - Listing selected category's products.
   - Add Cart Button for product card with increase/decrease feature of product quantity.
   - Pull for refresh.
   - Infinity scroll for getting products
     _Note:_ the api that I got data from have small amount of data so I fetch data of category again and again and so on, you will also notice that if add product to card and fetch more data the new data coming will have the same amount of data because they are same id, I could do it by adding uuid package and put unique id but I don't do it to make the task sensable as can possible.
2. Cart
   - Fetching cart products to ensure data updated.
   - Delete button for deleting unwanted product
3. Product
   - Fetching product details to ensure data updated.
   - Add Cart Button inside also with same features.
   - Pull to refresh.
4. Profile
   - Toggle RTL Switcher.
   - Open App Permissions settings Button
   - Addresses Button, that navigate to Addresses Page.
5. Addresses
   - Listing all user addresses.
   - Add Address Button, that navigate to Map Screen to choose the address from the map.
6. Map
   - Google Maps.
   - Add Selected Address Button.
7. Network Listener
   There is a network listner to inform user that he offline or back online to network.
8. Responsive
   This app is full responsive mobile and tablet screens with supporting RTL without restarting app, I write algoritm to make the styles and RTL very dynamic.
