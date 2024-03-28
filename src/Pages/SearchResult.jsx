import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../services/api";
import SearchCard from "../Components/SearchCard";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchData(`/search/multi?query=${query}&page=${pageCount}`).then((res) => {
      setData(res);
      setPageCount((prev) => prev + 1);
      setLoading(false);
    });
  };

  const nextPageData = () => {
    fetchData(`/search/multi?query=${query}&page=${pageCount}`).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res?.results] });
      } else {
        setData(res);
      }
      setPageCount((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageCount(1);
    fetchInitialData();
  }, [query]);
  return (
    <div className="w-full flex items-center justify-center h-full">
      {loading && <span className="loading loading-dots loading-lg"></span>}
      {!loading && (
        <div className="w-full max-w-[1200px] m-auto mt-16">
          {data?.results?.length > 0 ? (
            <>
              <div className="text-2xl text-red-400 mb-4">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="flex items-center justify-center flex-wrap mb-8 gap-x-4"
                dataLength={data?.results?.length || []}
                next={nextPageData}
                hasMore={pageCount <= data?.total_pages}
                loader={
                  <span className="loading loading-dots loading-lg"></span>
                }
              >
                {data?.results?.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return (
                    <SearchCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <p>Results Not Found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
