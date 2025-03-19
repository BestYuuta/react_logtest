import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

  const AccountSelect = ({ onAccoutTypeChange }) => {
  const [accountType, setAccountType] = React.useState("");

  const handleRoleChange = (event) => {
    setAccountType(event.target.value);
    onAccoutTypeChange(event.target.value);
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
          onChange={handleRoleChange}
        >
          <MenuItem value="candidate">Candidate</MenuItem>
          <MenuItem value="employer">Employer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default AccountSelect;
