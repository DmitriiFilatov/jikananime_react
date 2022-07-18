import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import AirplayIcon from "@mui/icons-material/Airplay";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import Divider from "@mui/material/Divider";
import CategoryIcon from "@mui/icons-material/Category";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import BookIcon from "@mui/icons-material/Book";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

function MangaItemExpanded({ entry }) {
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

  /* Data conversion variables */
  const langOptions = { year: "numeric", month: "short", day: "numeric" };
  const publishedFrom = new Date(entry.published.from).toLocaleDateString(
    "en-US",
    langOptions
  );
  const publishedTo = new Date(entry.published.to).toLocaleDateString(
    "en-US",
    langOptions
  );

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
                <Box sx={{ display: "flex", gap: 1 }}>
                  <AirplayIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Type: {entry.type}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <StarOutlineIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Score: {entry.score}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <StackedLineChartIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Popularity: #{entry.popularity}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <BookIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Chapters: {entry.chapters}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <AvTimerIcon sx={styleIcon} />
                  <Typography variant="subtitle2" component="p">
                    Published: {publishedFrom} - {publishedTo}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <MovieFilterIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    Authors:{" "}
                    {entry.authors.map((author) => (
                      <>{author.name} </>
                    ))}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <EmojiPeopleIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    Audience:{" "}
                    {entry.demographics.map((demographic) => (
                      <>{demographic.name} </>
                    ))}
                  </Typography>
                </Box>
                <Divider />
              </Grid>

              <Grid item>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <CategoryIcon sx={styleIcon} />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    Genres:{" "}
                    {entry.genres.map((genre) => (
                      <>{genre.name} </>
                    ))}
                  </Typography>
                </Box>
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

export default MangaItemExpanded;
