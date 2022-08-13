import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import SearchResults from "./SearchResults";
import Spinner from "./Spinner";

function SearchDialog({
  searchResults,
  searchCategory,
  openSearch,
  handleCloseSearch,
  isSearching,
}) {
  return (
    <Dialog open={openSearch} maxWidth="lg" onClose={handleCloseSearch}>
      <DialogTitle>
        <Typography component="h3" variant="h4" sx={{ fontWeight: "bolder" }}>
          {isSearching
            ? "Searching..."
            : `Search results (${searchResults.length})`}
        </Typography>
        <Divider />
      </DialogTitle>
      <DialogContent>
        {isSearching ? (
          <Spinner />
        ) : (
          <SearchResults
            searchResults={searchResults}
            searchCategory={searchCategory}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default SearchDialog;
