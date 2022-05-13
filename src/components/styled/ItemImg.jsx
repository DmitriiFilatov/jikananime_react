import React from "react";
import { styled } from "@mui/system";

const ItemImg = styled("img")({
  display: "block",
  maxWidth: 140,
  height: 180,
  objectFit: "cover",
  boxShadow: "0.5em 0.5em 0.5em rgba(0, 0, 0, 0.25)",
});

export default ItemImg;
