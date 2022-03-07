import { useContext } from "react";
import { IdContext } from "../providers/IdProvider";

export const useIdStore = () => useContext(IdContext);
