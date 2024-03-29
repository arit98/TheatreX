import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { fetchData } from "../services/api";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import ExploreCard from "../Components/ExploreCard";
import SkeletonCard from "../Components/Skeleton/SkeletonCard";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const ExplorePage = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  if (data?.results === null) {
  }

  const fetchInitialData = () => {
    setLoading(true);
    fetchData(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchData(`/discover/${mediaType}?page=${pageNum}`, filters).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#31363f",
      color: "#fff",
      border: "1px solid #555",
      borderRadius: "10px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#31363f",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      color: "#fff",
    }),
    singleValue: (provided) => ({
      ...provided,
      backgroundColor: "#76ABAE",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#76ABAE",
    })
  };

  return (
    <div className="explorePage min-h-screen pt-16 p-4 w-full max-w-[1200px] m-auto">
      <div className="pageHeader flex flex-col md:flex-row justify-between mb-6">
        <div className="pageTitle text-white text-lg mb-4 md:mb-0">
          {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
        </div>
        <div className="filters flex flex-col md:flex-row gap-4">
          <Select
            isMulti
            name="genres"
            value={genre}
            options={genresData?.genres}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={onChange}
            placeholder="Sort genres"
            className="sortbyGen w-full md:max-w-xs"
            classNamePrefix="react-select"
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: "orangered",
                primary25: "#76ABAE",
                primary: "#76ABAE",
              },
            })}
          />
          <Select
            name="sortby"
            value={sortby}
            options={sortbyData}
            onChange={onChange}
            isClearable={true}
            placeholder="Sort by"
            className="sortbyAD w-full md:w-56"
            classNamePrefix="react-select"
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: "orangered",
                primary25: "#76ABAE",
                primary: "#76ABAE",
              },
            })}
          />
        </div>
      </div>
      {loading && SkeletonCard}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <InfiniteScroll
              className="content flex flex-wrap items-center justify-center gap-6 mb-10 md:gap-8 m-auto"
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<span className="loading loading-dots loading-lg"></span>}
            >
              {data?.results?.map((item, index) => {
                if (item.media_type === "person") return null;
                return (
                  <ExploreCard key={index} data={item} mediaType={mediaType} />
                );
              })}
            </InfiniteScroll>
          ) : (
            <span className="resultNotFound text-base text-black-light">
              Sorry, Results not found!
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default ExplorePage;
