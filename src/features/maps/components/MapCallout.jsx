import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/CompactRestaurantInfo";


export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo  isMap restaurant={restaurant} />
);