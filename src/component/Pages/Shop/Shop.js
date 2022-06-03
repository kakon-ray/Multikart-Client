import React, { useEffect, useState } from "react";
import useProducts from "../../../Hook/useProducts";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Shop.css";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState();
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/product?page=${pageNumber}&size=${usersPerPage}`
        );
        const json = await response.json();

        setProducts(json);
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
    fetchFunction();
  }, [pageNumber]);
  //   get all product count
  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/productcount`
        );
        const json = await response.json();
        const data = json.count;
        setCount(data);
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
    fetchFunction();
  }, []);

  const pageCount = Math.ceil(count / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="py-12 dark:bg-black">
      <PageBanner page="Shop" />
      <div className="container mx-auto px-4 md:px-20 py-30 dark:bg-black">
        <h1 className="text-3xl text-stone-900 font-bold uppercase text-center mx-auto mb-12 dark:text-slate-200 pt-8">
          All Products
        </h1>
        {products?.length === 0 ? (
          <div className="flex justify-center items-center space-x-2">
            <div
              className="
                spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
                  text-orange-500
                "
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-5">
            {products?.map((item) => {
              return (
                <React.Fragment key={item._id}>
                  <Product />
                </React.Fragment>
              );
            })}
          </div>
        )}

        <div className="pt-12 flex justify-center overflow-auto">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
