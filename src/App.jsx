import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import { fetchData } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "./store/homeSlice";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";
import SearchResult from "./Pages/SearchResult";
import ExplorePage from "./Pages/ExplorePage";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const fetchApi = () => {
    fetchData("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original"
      }

      dispatch(getApiConfig(url));
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
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
