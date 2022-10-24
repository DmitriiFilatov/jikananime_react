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
import Divider from "@mui/material/Divider";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PeopleIcon from "@mui/icons-material/People";

import TitleBoxShadow from "../../assets/img/title_box_shadow.png";

function Item({ entry, handleOpen }) {
  const { mal_id, title, score, images, popularity, members } = entry;

  const InfoStack = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    color: theme.palette.primary.dark,
  }));

  return (
    <Grid item xs="auto" sm="auto" lg={2}>
      <Card sx={{ maxWidth: 160 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="220"
            image={images.jpg.image_url}
            alt="cover img"
            sx={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              color: "white",
              width: "100%",
              backgroundImage: `url(${TitleBoxShadow})`,
              backgroundSize: "100% 100%",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              textAlign="left"
              lineHeight="1.4"
              sx={{ pl: 1 }}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ pb: 0.5 }}>
          <Stack
            direction="row"
            spacing={{ xs: 1, md: 0.5, lg: 0.7 }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <InfoStack direction={{ xs: "column" }} spacing={{ xs: 0 }}>
              <StarOutlineIcon sx={{ fontSize: 15 }} />
              <Typography variant="subtitle2" component="p">
                {score}
              </Typography>
            </InfoStack>

            <InfoStack direction={{ xs: "column" }} spacing={{ xs: 0 }}>
              <StackedLineChartIcon sx={{ fontSize: 15 }} />
              <Typography variant="subtitle2" component="p">
                #{popularity}
              </Typography>
            </InfoStack>

            <InfoStack direction={{ xs: "column" }} spacing={{ xs: 0 }}>
              <PeopleIcon sx={{ fontSize: 15 }} />
              <Typography variant="subtitle2" component="p">
                {members}
              </Typography>
            </InfoStack>
          </Stack>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleOpen(mal_id)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
