import React, { useEffect, useContext, useState } from "react";
import { CgSearch } from "react-icons/cg";
import DetailsModal from "../components/DetailsModal";
import { get_block } from "../utils";
import { GlobalContext } from "../App";
import { BsPlusSquare } from "react-icons/bs";
import SubmitBlockForm from "../components/SubmitBlockForm";

function Blocks() {
  const { blockInfo } = useContext(GlobalContext);
  const [blocks, setBlocks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("hash");
  const [hideForm, setHideForm] = useState(true);
  const [modalInfo, setModalInfo] = useState();

  const get_latest_blocks = async () => {
    if (search == "") {
      let height = blockInfo.height;
      let temp_blocks = await Promise.all(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
          get_block(height - i, true)
            .then((res) => res[0])
            .catch((err) => console.log(err))
        )
      );
      setBlocks(temp_blocks);
    } else {
      let search_by_height = true;
      let tsearch = null;
      if (searchType === "hash") {
        search_by_height = false;
        tsearch = search;
      } else {
        tsearch = parseInt(search);
        console.log(tsearch, search_by_height);
      }
      get_block(tsearch, search_by_height)
        .then((res) => {
          console.log(res);
          if (res === undefined || res === null) {
            setBlocks([]);
          } else {
            setBlocks([res[0]]);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    get_latest_blocks();
  }, []);

  const [modalVisibility, setModalVisibility] = useState(false);

  const handleOnClose = () => setModalVisibility(false);

  return (
    <section className="mx-5 lg:mx-40 xl:mx-60 mb-10">
      <div className="fixed w-full h-full top-0 left-0 z-10" hidden={hideForm}>
        <SubmitBlockForm setHideForm={setHideForm} />
      </div>

      <div className="mx-auto flex flex-row justify-center mb-5">
        <input
          className="bg-slate-50 h-12 w-60 lg:w-96 rounded mt-10  pl-5 text-lg"
          placeholder="Block hash or height"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="w-30 ml-2 rounded mt-10">
          <select
            name="node_id"
            onChange={(e) => setSearchType(e.target.value)}
            className="w-full h-full p-2 rounded-md text-lg"
          >
            <option value="hash">Hash</option>
            <option value="height">Height</option>
          </select>
        </div>
        <button
          onClick={get_latest_blocks}
          className="bg-buttons text-white text-xl w-12 ml-2 rounded mt-10 "
        >
          <CgSearch className="m-auto" />
        </button>
        <button
          onClick={() => setHideForm(false)}
          className="text-xl ml-2 rounded mt-10 bg-buttons"
        >
          {/* <BsPlusSquare className="w-[40px] h-[40px] text-blue-600 hover:text-blue-900" /> */}
          <span className="text-white p-2 text-lg font-medium">Add Block</span>
        </button>
      </div>

      {/* mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {blocks.map((info) => (
          <button
            onClick={() => {
              setModalVisibility(true);
              setModalInfo(info);
            }}
          >
            <div
              id={info.height}
              className="flex flex-col shadow-xl bg-secondary hover:bg-tertiary rounded-xl text-white p-5 text-sm gap-2"
            >
              <div className="flex flex-row ">
                <div className="text-gray-400 font-semibold">Height</div>
                <span className="ml-auto">{info.height}</span>
              </div>
              <div className="flex flex-row ">
                <div className="text-gray-400 font-semibold">Work</div>
                <span className="ml-auto"> {parseInt(info.work, 16)}</span>
              </div>
              <div className="flex flex-row ">
                <div className="text-gray-400 font-semibold">Seen By</div>
                <span className="ml-auto"> {info.first_seen_by}</span>
              </div>
              <div className="flex flex-row justify-stretch">
                <span className="text-gray-400 font-semibold">Pool Name</span>
                <span className="ml-auto"> {info.pool_name}</span>
              </div>
              <div className="flex flex-row ">
                <div className="text-gray-400 font-semibold">Fees</div>
                <span className="ml-auto"> {info.total_fee}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* desktop */}
      <div className="md:flex flex-col w-full gap-4 items-center overflow-y-auto hidden">
        <div className="flex w-full justify-evenly shadow-xl bg-secondary rounded-xl h-16  text-white  ">
          <span className="my-auto px-5 text-base font-semibold text-gray-400 text-left lg:w-30 xl:w-40">
            Height
          </span>
          <span className="my-auto px-5 text-base font-semibold text-gray-400 text-left lg:w-30 xl:w-[32rem]">
            Work
          </span>
          <span className="my-auto px-5 text-base font-semibold text-gray-400 text-left lg:w-30 xl:w-44">
            Seen By
          </span>
          <span className="my-auto px-5 text-base font-semibold text-gray-400 text-left lg:w-30 xl:w-40">
            Pool Name
          </span>
          <span className="my-auto px-5 text-base font-semibold text-gray-400 text-left lg:w-30 xl:w-40">
            Fees
          </span>
        </div>
        {blocks.map((info) => (
          <button
            onClick={() => {
              setModalVisibility(true);
              setModalInfo(info);
            }}
            className="w-full"
          >
            <div
              id={info.height}
              className="flex w-full justify-evenly shadow-xl bg-secondary hover:bg-tertiary rounded-xl h-16  text-white "
            >
              <div className="my-auto px-5 text-base  text-left lg:w-30 xl:w-40">
                {info.height}
              </div>
              <div className="my-auto px-5 text-base  text-left lg:w- xl:w-[32rem]">
                {parseInt(info.work, 16)}
              </div>
              <div className="my-auto px-5 text-base  text-left lg:w- xl:w-44">
                {info.first_seen_by}
              </div>
              <div className="my-auto px-5 text-base  text-left lg:w- xl:w-40">
                {info.pool_name}
              </div>
              <div className="my-auto px-5 text-base  text-left lg:w- xl:w-40">
                {info.total_fee}
              </div>
            </div>
          </button>
        ))}
      </div>
      <DetailsModal
        onClose={handleOnClose}
        visible={modalVisibility}
        props={modalInfo}
      />
    </section>
  );
}

export default Blocks;
