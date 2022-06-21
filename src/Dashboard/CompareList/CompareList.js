import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiCompareListAction } from "../../redux/action/Action";
import CompareListTableRow from "./CompareListTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useCompareList from "../../Hook/useCompareList";
import Loading from "../../component/Loading/Loading";
const CompareList = () => {
  const [compareList, setCompareList] = useCompareList();

  return (
    <div>
      <div className="dark:bg-black">
        <div className="container mx-auto px-4 md:px-20 pt-3">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mb-5">
            Compare List
          </h1>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div
                  className="overflow-hidden overflow-y-scroll"
                  style={{ height: "500px" }}
                >
                  <table className="min-w-full border text-center">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Abailable
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4"
                        >
                          Remove Comparelist
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4"
                        >
                          Add Cartsist
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareList?.map((item) => {
                        return (
                          <CompareListTableRow
                            item={item}
                          ></CompareListTableRow>
                        );
                      })}
                    </tbody>
                  </table>
                  <div>{compareList.length <= 0 ? <Loading /> : ""}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareList;
