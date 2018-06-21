import client from "axios";
const BASE_URL = "http://thrivemarket.com/api/v1";
const regex = new RegExp("<b>UPC:<\/b>(.*)</li>");
const PROXY_URL = "https://cors-proxy.htmldriven.com/";
const instance = client.create({
  headers: {
    Accept: "application/json"
  }
});

instance.getProductBySku = sku =>
  instance.get(`${PROXY_URL}?url=${BASE_URL}/product/sku/${sku}`);
instance.getSkusByProductUrl = url => {
  return instance.get(`${PROXY_URL}?url=${url}`).then(res => {
    const skus = res.data.body
      .match(regex)[1]
      .split(" ")
      .filter(string => string !== "");
    return skus;
  });
};

export default instance;
