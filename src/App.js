import React, { useState, useEffect, useMemo } from "react";

import {
  fetchTopItems,
  searchItems,
  searchItemsold,
} from "./components/api/API";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/layout/SearchBar";
import AnimeItem from "./components/items/AnimeItem";
import MangaItem from "./components/items/MangaItem";
import Spinner from "./components/layout/Spinner";

import Typography from "@mui/material/Typography";
import { Box, Paper, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

function App() {
  const [topItems, setTopItems] = useState([]);
  const [category, setCategory] = useState("anime");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("anime");

  useEffect(() => {
    const fetchOnInit = async () => {
      const response = await fetchTopItems(category);
      setTopItems(response);
      setLoading(false);
    };
    fetchOnInit();
  }, []);

  const handleRadioChange = async (e) => {
    e.preventDefault();
    if (e.target.value === "anime") {
      const response = await fetchTopItems(e.target.value);
      setTopItems(response);
      setCategory(e.target.value);
    } else if (e.target.value === "manga") {
      const response = await fetchTopItems(e.target.value);
      setTopItems(response);
      setCategory(e.target.value);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (category !== "") {
      const res = await searchItems(category, searchQuery);
      setTopItems(res);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      {/* <SearchBar /> */}
      <Container maxWidth="lg">
        <Box>
          <FormGroup
            row
            sx={{ display: "flex", justifyContent: "center", marginTop: 12 }}
          >
            <TextField
              label="Title"
              variant="outlined"
              onChange={(e) => setSearchQuery(e.target.value)}
            ></TextField>
            <Button onClick={handleSearch}>Search</Button>
          </FormGroup>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl>
            <RadioGroup row value={category} onClick={handleRadioChange}>
              <FormControlLabel
                value="anime"
                control={<Radio />}
                label="Anime"
              />
              <FormControlLabel
                value="manga"
                control={<Radio />}
                label="Manga"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {category === "anime" &&
            topItems &&
            topItems.map((entry) => (
              <AnimeItem entry={entry} key={entry.mal_id} />
            ))}

          {category === "manga" &&
            topItems &&
            topItems.map((entry) => (
              <MangaItem entry={entry} key={entry.mal_id} />
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
