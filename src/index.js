import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App/App";

import "semantic-ui-css/semantic.min.css";

// add axios interceptors for the entire app

import axios from "axios";

const root = createRoot(document.getElementById("root"));

const updateEndTime = (response) => {
  response.customData = response.customData || {};
  response.customData.time =
    new Date().getTime() - response.config.customData.startTime;
  return response;
};

// request interceptor
axios.interceptors.request.use((request) => {
  request.customData = request.customData || {};
  request.customData.startTime = new Date().getTime();
  return request;
});

// response interceptor
axios.interceptors.response.use(updateEndTime, (e) => {
  return Promise.reject(updateEndTime(e.response));
});

root.render(<App/>)
