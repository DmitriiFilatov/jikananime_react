import React, { useState } from "react";

import AnimeItem from "../items/AnimeItem";
import MangaItem from "../items/MangaItem";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import MangaItemExpanded from "../items/MangaItemExpanded";
import AnimeItemExpanded from "../items/AnimeItemExpanded";

function Results({ entries, category }) {
  const topItems = entries;

  const [open, setOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState([]);

  const handleOpen = (id) => {
    setChosenItem(entries.find((item) => item.mal_id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setChosenItem([]);
  };

  return (
    <Grid container spacing={{ xs: 4, sm: 2, lg: 4 }}>
      {topItems &&
        topItems.map((entry) => (
          <>
            {category === "anime" && (
              <AnimeItem
                entry={entry}
                key={entry.mal_id}
                id={entry.mal_id}
                handleOpen={handleOpen}
              />
            )}

            {category === "manga" && (
              <MangaItem
                entry={entry}
                key={entry.mal_id}
                id={entry.mal_id}
                handleOpen={handleOpen}
              />
            )}
          </>
        ))}
      {chosenItem.length !== 0 && (
        <Dialog open={open} maxWidth="lg" onClose={handleClose}>
          {/* <DialogTitle>
            <Typography variant="h4" component="h2" fontWeight="bolder">
              {chosenItem.title}
            </Typography>
          </DialogTitle> */}
          <DialogContent>
            {category === "anime" && (
              <AnimeItemExpanded entry={chosenItem} key={chosenItem.title} />
            )}

            {category === "manga" && (
              <MangaItemExpanded entry={chosenItem} key={chosenItem.title} />
            )}
          </DialogContent>
        </Dialog>
      )}
    </Grid>
  );
}

export default Results;
