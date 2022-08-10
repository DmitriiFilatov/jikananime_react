import React, { useState } from "react";

import MangaItemExpanded from "../items/MangaItemExpanded";
import AnimeItemExpanded from "../items/AnimeItemExpanded";
import Item from "../items/Item";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function SearchResults({ searchResults, searchCategory }) {
  const [openExpandedItem, setOpenExpandedItem] = useState(false);
  const [chosenItem, setChosenItem] = useState([]);

  const handleShowExpanded = (id) => {
    setChosenItem(searchResults.find((item) => item.mal_id === id));
    setOpenExpandedItem(true);
  };

  const handleCloseSearch = () => {
    setOpenExpandedItem(false);
    setChosenItem([]);
  };

  return (
    <>
      <Grid container spacing={{ xs: 3, md: 4, lg: 4 }} sx={{ mb: 3 }}>
        {searchResults &&
          searchResults.map((entry) => (
            <React.Fragment key={entry.mal_id.toString()}>
              <Item entry={entry} handleOpen={handleShowExpanded} />
            </React.Fragment>
          ))}

        {chosenItem.length !== 0 && (
          <Dialog
            open={openExpandedItem}
            maxWidth="lg"
            onClose={handleCloseSearch}
          >
            <DialogContent>
              {searchCategory === "anime" && (
                <AnimeItemExpanded entry={chosenItem} />
              )}

              {searchCategory === "manga" && (
                <MangaItemExpanded entry={chosenItem} />
              )}
            </DialogContent>
          </Dialog>
        )}
      </Grid>
    </>
  );
}

export default SearchResults;
