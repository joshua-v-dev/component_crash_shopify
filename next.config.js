const { parsed: localEnv } = require("dotenv").config();

import { DefinePlugin } from "webpack";
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

export function webpack(config) {
  const env = { API_KEY: apiKey };
  config.plugins.push(new DefinePlugin(env));

  // Add ESM support for .mjs files in webpack 4
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  return config;
}
