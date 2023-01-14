import React, { FC } from "react";
import "./styleHeader.scss";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

interface headProps {
  setInput: Function;
}
const Header: FC<headProps> = ({ setInput }) => {
  return (
    <div>
      <p className="headerText">Filter by keywords</p>

      <TextField
        id="input-with-icon-textfield"
        sx={{
          width: "600px",
          fontSize: "16px",
          boxShadow: "0 10px 10px rgba(234,230,230,0.8)",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
};

export default Header;
