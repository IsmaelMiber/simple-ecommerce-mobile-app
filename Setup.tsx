import React from "react";
import useConnection from "./hooks/connection/useConnection";

export default function Setup() {
  useConnection();
  return null;
}
