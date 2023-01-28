import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import Services from "../Services/Services.jsx";
import Galery from "../Galery/Galery";
import { getRooms } from "../../redux/actions";
import { getAllHotels } from "../../redux/actions";
import Commentary from "../Commentary/Commentary";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Hotels from "../Hotels/Hotels";
import { useDispatch } from "react-redux";
import RoomsCards from "../RoomsCards/RoomsCards";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LandingPage = (props) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  const hotels = useSelector((state) => state.allHotels);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);
  return (
    <div>
      <Header location={props.location} />
      {error ? <Error /> : <RoomsCards hotels={hotels}/>}
      <Services />
      <Galery />
      <Commentary />
      <Footer />
    </div>
  );
};
export default LandingPage;
