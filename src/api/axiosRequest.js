import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetProducts = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/product", "GET", headers, {});
};

const GetProductById = (id) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/product" + id, "GET", headers, {});
};

const PostPrductById = (data) => {
  const headers = {
    "content-type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/product", "POST", headers, data);
};

const UpdateApiById = (data, id) => {
  const headers = {
    "content-type": "application/json",
  };
  return AxiosRequest(
    "http://localhost:3000/product" + id,
    "PUT",
    headers,
    data
  );
};

const DeleteProductById = (id) => {
  const headers = {
    "content-type": "application/json",
  };
  return AxiosRequest(
    "http://localhost:3000/product" + id,
    "DELETE",
    headers,
    {}
  );
};

export {
  GetProducts,
  GetProductById,
  PostPrductById,
  UpdateApiById,
  DeleteProductById,
};
