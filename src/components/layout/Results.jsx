import React, { useState } from "react";

import Item from "../items/Item";
import ItemExpanded from "../items/ItemExpanded";

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

  const renderExpandedItem = () => {
    switch (category) {
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
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 0.5, vsm: 1, md: 4, lg: 3 }}
        sx={{ mb: 3 }}
      >
        {topItems &&
          topItems.map((entry) => (
            <React.Fragment key={entry.mal_id.toString()}>
              <Item entry={entry} handleOpen={handleOpen} />
            </React.Fragment>
          ))}

        {chosenItem.length !== 0 && (
          <Dialog open={open} maxWidth="lg" onClose={handleClose}>
            <DialogContent>{renderExpandedItem()}</DialogContent>
          </Dialog>
        )}
      </Grid>
    </>
  );
}

export default Results;
