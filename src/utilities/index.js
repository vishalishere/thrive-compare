/* global chrome */
import instance from "../networking/instance";

export const getCurrentTabUrl = callback => {
  chrome.tabs.query(
    {
      active: true,
      lastFocusedWindow: true
    },
    tabs => {
      const { url } = tabs[0];
      callback(url);
    }
  );
};

export const getSlugFromCurrentUrl = (url, index = 0) =>
  url.split(".com")[index];

export const getPrice = (cb1, cb2) => {
  cb1();
  getCurrentTabUrl(url => instance.getSkusByProductUrl(url).then(skuArray => {
      skuArray.forEach(sku => instance.getProductBySku(sku).then(res => {
          const response = JSON.parse(res.data.body);
          if (!response) {
            return;
          }
          return cb2(response);
        }));
    }));
};
