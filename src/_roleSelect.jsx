import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AccountSelect() {
  const [accountType, setAccountType] = React.useState("");

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="account-select-label">Account Type</InputLabel>
        <Select
          labelId="account-select-label"
          id="account-select"
          value={accountType}
          label="Account Type"
          onChange={handleChange}
        >
          <MenuItem value="candidate">Candidate</MenuItem>
          <MenuItem value="employer">Employer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
