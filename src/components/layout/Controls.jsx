import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { fetchTopItems, searchItems } from "../api/API";
import Results from "./Results";
import Spinner from "./Spinner";

function Controls() {
  const [topItems, setTopItems] = useState([]);
  const [category, setCategory] = useState("anime");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchOnInit = async () => {
      const response = await fetchTopItems(category);
      setTopItems(response);
      setLoading(false);
    };
    fetchOnInit();
  }, [category]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (category !== "" && searchQuery !== "") {
      setLoading(true);
      const res = await searchItems(category, searchQuery);
      setTopItems(res);
    } else console.log("Something went wrong.");
    setLoading(false);
  };

  const handleCategoryChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCategory(e.target.value);
    if (e.target.value === "anime") {
      const response = await fetchTopItems(e.target.value);
      setTopItems(response);
      setCategory(e.target.value);
    } else if (e.target.value === "manga") {
      const response = await fetchTopItems(e.target.value);
      setTopItems(response);
      setCategory(e.target.value);
    }
    setLoading(false);
  };

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box>
      <Box sx={{ mt: 7, mb: 7 }}>
        <FormGroup row sx={boxStyle}>
          <Box sx={{ minWidth: 100 }}>
            <FormControl>
              <InputLabel id="categorySelectLabel">Type</InputLabel>
              <Select
                labelId="categorySelectLabel"
                id="categorySelect"
                value={category}
                label="Anime"
                onChange={handleCategoryChange}
              >
                <MenuItem value="anime">Anime</MenuItem>
                <MenuItem value="manga">Manga</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            label="Find your title.."
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)}
          ></TextField>
          <Button onClick={handleSearch} variant="contained">
            Search
          </Button>
        </FormGroup>
      </Box>
      {loading ? (
        <Spinner />
      ) : (
        topItems && <Results entries={topItems} category={category} />
      )}
    </Box>
  );
}

export default Controls;
