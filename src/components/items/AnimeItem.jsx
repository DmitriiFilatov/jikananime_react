import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PeopleIcon from "@mui/icons-material/People";

function AnimeItem({ entry, handleOpen }) {
  const { mal_id, title, score, images, popularity, members } = entry;

  const InfoStack = styled(Stack)(({ theme }) => ({
    alignItems: "center",

    color: theme.palette.primary.dark,
  }));

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: 230,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent
            sx={{
              height: "30%",
            }}
          >
            <Typography
              component="h2"
              variant="subtitle2"
              sx={{ lineHeight: 1.1 }}
            >
              {title}
            </Typography>
          </CardContent>
          <Stack
            direction={{
              xs: "column",
            }}
            spacing={{ lg: 1 }}
            sx={{ p: 1 }}
          >
            <InfoStack
              direction={{ xs: "row" }}
              spacing={{ xs: 1.25, lg: 1.5 }}
            >
              <StarOutlineIcon sx={{ fontSize: 16 }} />
              <Typography variant="subtitle2" component="p">
                Score: {score}
              </Typography>
            </InfoStack>

            <InfoStack
              direction={{ xs: "row" }}
              spacing={{ xs: 1.25, lg: 1.5 }}
            >
              <StackedLineChartIcon sx={{ fontSize: 16 }} />
              <Typography variant="subtitle2" component="p">
                Popularity: #{popularity}
              </Typography>
            </InfoStack>

            <InfoStack
              direction={{ xs: "row", lg: "column" }}
              display={{ lg: "none" }}
              spacing={{ xs: 1.25, lg: 1.5 }}
            >
              <PeopleIcon sx={{ fontSize: 16 }} />
              <Typography variant="subtitle2" component="p">
                MAL Members: {members}
              </Typography>
            </InfoStack>
          </Stack>
          <CardActions sx={{ pt: 0 }}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleOpen(mal_id)}
            >
              View More
            </Button>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 130 }}
          image={images.jpg.image_url}
          alt="cover"
        />
      </Card>
    </Grid>
  );
}

export default AnimeItem;
