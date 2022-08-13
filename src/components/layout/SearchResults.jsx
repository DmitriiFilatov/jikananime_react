import React, { useState } from "react";

import Item from "../items/Item";
import ItemExpanded from "../items/ItemExpanded";

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

  const renderExpandedItem = () => {
    switch (searchCategory) {
      case "anime":
        return <ItemExpanded entry={chosenItem} category="anime" />;
      case "manga":
        return <ItemExpanded entry={chosenItem} category="manga" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={{ xs: 3, md: 4, lg: 1 }} sx={{ mb: 3 }}>
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
            <DialogContent>{renderExpandedItem()}</DialogContent>
          </Dialog>
        )}
      </Grid>
    </>
  );
}

export default SearchResults;
