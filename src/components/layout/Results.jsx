import React, { useState } from "react";

import MangaItemExpanded from "../items/MangaItemExpanded";
import AnimeItemExpanded from "../items/AnimeItemExpanded";
import Item from "../items/Item";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

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
    <>
      <Grid container spacing={{ xs: 3, md: 4, lg: 4 }} sx={{ mb: 3 }}>
        {topItems &&
          topItems.map((entry) => (
            <React.Fragment key={entry.mal_id.toString()}>
              <Item entry={entry} handleOpen={handleOpen} />
            </React.Fragment>
          ))}

        {chosenItem.length !== 0 && (
          <Dialog open={open} maxWidth="lg" onClose={handleClose}>
            <DialogContent>
              {category === "anime" && <AnimeItemExpanded entry={chosenItem} />}

              {category === "manga" && <MangaItemExpanded entry={chosenItem} />}
            </DialogContent>
          </Dialog>
        )}
      </Grid>
    </>
  );
}

export default Results;
