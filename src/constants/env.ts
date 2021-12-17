const {
  REACT_APP_EXMO_WS_BASE_URL,
  REACT_APP_EXMO_WS_PUBLIC_URL,
  REACT_APP_EXMO_WS_PRIVATE_URL,
} = process.env;

export const isEnvConfigIncomplete = [
  REACT_APP_EXMO_WS_BASE_URL,
  REACT_APP_EXMO_WS_PUBLIC_URL,
  REACT_APP_EXMO_WS_PRIVATE_URL,
].some((item) => item === undefined || item === null || item === "");

export const EXMO_WS_PUBLIC_URL = REACT_APP_EXMO_WS_PUBLIC_URL;
export const EXMO_WS_PRIVATE_URL = REACT_APP_EXMO_WS_PRIVATE_URL;
