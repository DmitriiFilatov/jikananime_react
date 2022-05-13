import React, { useEffect, useState } from "react";

import Item from "../layout/Item";

import { fetchTopAnime, fetchTopManga, searchTopItem } from "../api/API";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Items({ entries }) {
  const topItems = entries;

  return (
    <Container>
      <Grid container spacing={2}>
        {topItems && topItems.map((entry) => <Item entry={entry} />)}
      </Grid>
    </Container>
  );
}

export default Items();
