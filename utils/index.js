const Contentstack = require("contentstack");

import ContentstackLivePreview from "@contentstack/live-preview-utils";

const Stack = Contentstack.Stack({
  api_key: "bltbf189e64bac3487b",
  delivery_token: "cs9ac78758419a8c1c1336b1ff",
  environment: "published",
  region: Contentstack.Region.EU,
  live_preview: {
    host: "eu-api.contentstack.com",
    management_token: "cs9ac78758419a8c1c1336b1ff",
    enable: true,
    clientUrlParams: {
      host: "eu-app.contentstack.com",
    },
      stackDetails: {
        apiKey: 'bltbf189e64bac3487b'
      }
  },
});

Stack.setHost("eu-api.contentstack.com");
ContentstackLivePreview.init(Stack);

export default Stack;
export const onEntryChange = ContentstackLivePreview.onEntryChange;
