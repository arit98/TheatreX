import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import { fetchData } from "./services/api";
import { useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";
import SearchResult from "./Pages/SearchResult";
import ExplorePage from "./Pages/ExplorePage";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import { useStateHomeValue } from "./Components/useStateValue";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useStateHomeValue();

  useEffect(() => {
    fetchApi();
    genersCall();
  }, []);

  const fetchApi = () => {
    fetchData("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfig(url));
    });
  };

  const genersCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    for (let index = 0; index < endPoints.length; index++) {
      promises.push(fetchData(`/genre/${endPoints[index]}/list`));
    }

    const data = await Promise.all(promises);
    data?.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres))
  };

  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mediaType/:id" element={<DetailsPage />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<ExplorePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
