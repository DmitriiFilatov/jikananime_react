import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ItemImg from "../styled/ItemImg";

import PeopleIcon from "@mui/icons-material/People";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AvTimerIcon from "@mui/icons-material/AvTimer";

function AnimeItem({ entry }) {
  const { title, score, episodes, members, aired, images } = entry;

  const langOptions = { year: "numeric", month: "short", day: "numeric" };
  const airedFrom = new Date(aired.from).toLocaleDateString(
    "en-US",
    langOptions
  );
  const airedTo = new Date(aired.to).toLocaleDateString("en-US", langOptions);

  const styleTextWrap = { display: "flex", alignItems: "center" };
  const styleIcon = { width: "10%", marginRight: 0.5 };
  const accentColor = "#403c97";

  return (
    <Grid item xs={4}>
      <Paper
        elevation={5}
        sx={{
          p: 1,
          margin: "auto",
          height: 240,
          display: "flex",
          borderBottom: `6px solid ${accentColor}`,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            container
            item
            xs="auto"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ItemImg alt="cover image" src={images.jpg.image_url} />
          </Grid>
          <Grid
            item
            xs={8}
            sm
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography
                  variant="body1"
                  component="h2"
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 60,
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={styleTextWrap}>
                  <StarOutlineIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color={accentColor}
                  >
                    Score: {score}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={styleTextWrap}>
                  <ArrowRightIcon sx={styleIcon} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    Episodes: {episodes}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={styleTextWrap}>
                  <AvTimerIcon sx={styleIcon} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    Aired: {airedFrom} - {airedTo}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={styleTextWrap}>
                  <PeopleIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="p"
                  >
                    MAL Members: {members}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default AnimeItem;
