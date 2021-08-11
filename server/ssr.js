// import { pipeToNodeWritable } from 'react-dom/server';
import React from "react";
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";

import { App } from "/imports/ui/App.jsx";

onPageLoad((sink) => {
  sink.renderIntoElementById(
    "react-target",
    renderToString(<App location={sink.request.url} />)
  );
});
