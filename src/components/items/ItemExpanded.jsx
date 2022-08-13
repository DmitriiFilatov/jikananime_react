import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import AirplayIcon from "@mui/icons-material/Airplay";
import TheatersIcon from "@mui/icons-material/Theaters";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CategoryIcon from "@mui/icons-material/Category";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AvTimerIcon from "@mui/icons-material/AvTimer";

function ItemExpanded({ entry, category }) {
  const styleIcon = {
    fontSize: 20,
    color: "primary.main",
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "80%",
    boxShadow: "0.5em 0.5em 0.5em rgba(0, 0, 0, 0.25)",
  });

  const DescrBox = styled(Box)({ display: "flex", gap: "0.5em" });

  return (
    <>
      <Paper
        elevation={6}
        sx={{
          p: 2,
          maxWidth: 750,
        }}
      >
        <Grid container spacing={2}>
          <Grid container item xs={12} md={4}>
            <Grid item sm={6} md={12}>
              <Img alt="complex" src={entry.images.jpg.large_image_url} />
            </Grid>

            <Grid container xs md spacing={1} direction="column" sx={{ mt: 1 }}>
              <Grid item>
                <DescrBox>
                  <AirplayIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Type: {entry.type}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <StarOutlineIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Score: {entry.score}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <StackedLineChartIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Popularity: #{entry.popularity}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <TheatersIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    {category === "anime" ? (
                      <>Episodes: {entry.episodes}</>
                    ) : (
                      <>
                        {entry.chapters === null
                          ? "Chapters: Unknown"
                          : `Chapters: ${entry.chapters}`}
                      </>
                    )}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <AvTimerIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    {category === "anime"
                      ? `Aired: ${entry.aired.string}`
                      : `Published: ${entry.published.string}`}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <NotInterestedIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    {category === "anime" ? (
                      <>Rating: {entry.rating}</>
                    ) : (
                      <>
                        Authors:{" "}
                        {entry.authors.map((author) => (
                          <>{author.name} </>
                        ))}
                      </>
                    )}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <CategoryIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    {category === "anime" ? (
                      <>
                        Genres:{" "}
                        {entry.genres.map((genre) => (
                          <>{genre.name} </>
                        ))}
                      </>
                    ) : (
                      <>
                        Audience:{" "}
                        {entry.demographics.map((demographic) => (
                          <>{demographic.name} </>
                        ))}
                      </>
                    )}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>

              <Grid item>
                <DescrBox>
                  <MovieFilterIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    {category === "anime" ? (
                      <>
                        Studios:{" "}
                        {entry.studios.map((studio) => (
                          <>{studio.name} </>
                        ))}
                      </>
                    ) : (
                      <>
                        Genres:{" "}
                        {entry.genres.map((genre) => (
                          <>{genre.name} </>
                        ))}
                      </>
                    )}
                  </Typography>
                </DescrBox>
                <Divider />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container md={8}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h3"
                  fontWeight="bolder"
                  sx={{
                    borderLeft: `4px solid #403c97`,
                    pl: 1,
                  }}
                >
                  {entry.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  sx={{ mt: 2 }}
                >
                  Synopsis
                </Typography>
                <Typography variant="body2">{entry.synopsis}</Typography>
              </Grid>
              <Grid item container sx={{ justifyContent: "center" }}>
                <ButtonBase>
                  <Link href={entry.url} variant="subtitle2" component="a">
                    See more on MyAnimeList
                  </Link>
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ItemExpanded;
