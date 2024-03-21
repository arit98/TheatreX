import { useSelector } from "react-redux";

export const useStateHomeValue = () => useSelector(state => state.home)