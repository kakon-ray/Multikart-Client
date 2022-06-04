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

const AddToCartList = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/cartlist", "POST", headers, data);
};

const GetProductById = (id) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/product" + id, "GET", headers, {});
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
  AddToCartList,
  UpdateApiById,
  DeleteProductById,
};
