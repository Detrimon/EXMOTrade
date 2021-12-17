# EXMO Trade Tiles in a real time.

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
