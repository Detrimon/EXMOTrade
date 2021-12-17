# Real-time EXMO Trade tiles.

This project was invented by myself and it was created for my own portfolio and you most likely can't be able
to find a use for it in real life. I'm not a cryptocurrency trader :)

But this project is made to show my experience in some of Frontend technologies, such as:

- ReactJS (I didn't use Redux here, but I knew it too.);
- EXMO WebSocket API;
- SVG icons (some of them I drew myself);
- Typescript (Currently I move it from native JS to Typescript);
- Consta (https://consta.gazprom-neft.ru/) with ready-to-use Components.

## How to start the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so there are
standard scripts to start and build Application, for example:

- `yarn start`
- `yarn build`

Thus all you need is install dependencies and start the App.

But one thing you needs to be done is to create .env file in a Project root folder, for example:
.env.development.local
with the following content:

REACT_APP_EXMO_WS_BASE_URL=wss://ws-api.exmo.com:443/v1
REACT_APP_EXMO_WS_PUBLIC_URL=$REACT_APP_EXMO_WS_BASE_URL/public
REACT_APP_EXMO_WS_PRIVATE_URL=$REACT_APP_EXMO_WS_BASE_URL/private

![image](https://user-images.githubusercontent.com/49167999/146498737-09e3f2ea-062b-417a-9865-9085591f9697.png)

![image](https://user-images.githubusercontent.com/49167999/146498816-93ee4f1d-9eb5-4b4d-a556-2dcaeb96a17e.png)
