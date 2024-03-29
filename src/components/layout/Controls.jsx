import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { fetchTopItems, searchItems } from "../api/API";
import Results from "./Results";
import Spinner from "./Spinner";
import SearchDialog from "./SearchDialog";

function Controls() {
  const [topItems, setTopItems] = useState([]);
  const [category, setCategory] = useState("anime");
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("anime");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchOnInit = async () => {
      try {
        const response = await fetchTopItems(category);
        setTopItems(response);
      } catch (err) {
        console.error(`Something went wrong with fetching data. Error: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchOnInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (searchCategory !== "" && searchQuery !== "") {
        setIsSearching(true);
        setOpenSearch(true);
        const res = await searchItems(searchCategory, searchQuery);
        setSearchResults(res);
      }
    } catch (err) {
      console.log("Something went wrong while fetching data.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
    setSearchResults([]);
  };

  const handleResultSwitch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setCategory(e.target.value);

    if (e.target.value === "anime" || e.target.value === "manga") {
      const response = await fetchTopItems(e.target.value);
      setTopItems(response);
      setCategory(e.target.value);
    }

    setLoading(false);
  };

  const handleSearchCategorySwitch = (e) => {
    setSearchCategory(e.target.value);
  };

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box>
      <Box sx={{ mt: 7, mb: 3 }}>
        <FormGroup row sx={boxStyle}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <FormControl>
              <InputLabel id="categorySelectLabel">Category</InputLabel>
              <Select
                labelId="categorySelectLabel"
                id="categorySelect"
                label="Category"
                value={searchCategory}
                onChange={handleSearchCategorySwitch}
              >
                <MenuItem value="anime">Anime</MenuItem>
                <MenuItem value="manga">Manga</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Find your title.."
              variant="outlined"
              onBlur={(e) => setSearchQuery(e.target.value)}
            ></TextField>

            <Button onClick={handleSearch} variant="contained">
              Search
            </Button>
          </Box>
        </FormGroup>

        <Box sx={{ mb: 3, mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{ fontWeight: "bolder", color: "primary.main" }}
              >
                Top Rated {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
            </Box>

            <FormControl sx={{ minWidth: 120, minHeight: 60 }}>
              <InputLabel id="categorySelectLabel">Type</InputLabel>
              <Select
                labelId="categorySelectLabel"
                id="categorySelect"
                value={category}
                label="Type"
                onChange={handleResultSwitch}
              >
                <MenuItem value="anime">Top Anime</MenuItem>
                <MenuItem value="manga">Top Manga</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Divider />
        </Box>
      </Box>

      {loading ? (
        <Spinner />
      ) : (
        topItems && (
          <>
            <Results entries={topItems} category={category} />
          </>
        )
      )}

      {openSearch === true && (
        <SearchDialog
          isSearching={isSearching}
          openSearch={openSearch}
          handleCloseSearch={handleCloseSearch}
          searchResults={searchResults}
          searchCategory={searchCategory}
        />
      )}
    </Box>
  );
}

export default Controls;
