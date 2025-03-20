import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, Box, LinearProgress, 
  TextField, Button 
} from "@mui/material";
import { 
  Work, Person, Public, AccountCircle, AlternateEmail, 
  ArrowForward, ArrowBack 
} from "@mui/icons-material";
import Select from "react-select";

// Danh sách quốc gia mẫu (có cờ)
const countries = [
  { code: "BD", label: "Bangladesh", phone: "+880", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "US", label: "United States", phone: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { code: "VN", label: "Vietnam", phone: "+84", flag: "https://flagcdn.com/w40/vn.png" },
];

const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", p: 3 }}>
      {/* Header + Progress Bar */}
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 0, p: 2 }}>
        <Toolbar>
          <Work sx={{ color: "#1976d2", mr: 1 }} />
          <Typography variant="h6" sx={{ color: "#000", flexGrow: 1 }}>
            MyJob
          </Typography>
          <Typography sx={{ color: "#1976d2", mr: 1 }}>75% Completed</Typography>
        </Toolbar>
        <LinearProgress variant="determinate" value={75} sx={{ height: 5, borderRadius: 2 }} />
      </AppBar>

      {/* Navigation */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", color: "#666" }}>
          <Person sx={{ mr: 1 }} />
          <Typography>Company Info</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#666" }}>
          <AccountCircle sx={{ mr: 1 }} />
          <Typography>Founding Info</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#666" }}>
          <Public sx={{ mr: 1 }} />
          <Typography>Social Media Profile</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#1976d2", borderBottom: "2px solid #1976d2", pb: 0.5 }}>
          <AlternateEmail sx={{ mr: 1 }} />
          <Typography>Contact</Typography>
        </Box>
      </Box>

      {/* Form */}
      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
          Phone
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Select
            value={selectedCountry}
            onChange={setSelectedCountry}
            options={countries}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={e.flag} alt="" style={{ width: 25, height: 15, marginRight: 10 }} />
                {e.phone}
              </div>
            )}
            styles={{
              control: (base) => ({
                ...base,
                width: "40%",
              }),
            }}
          />
          <TextField fullWidth placeholder="Phone number..." variant="outlined" />
        </Box>

        <Typography variant="body1" sx={{ fontWeight: "bold", mt: 3, mb: 1 }}>
          Email
        </Typography>
        <TextField fullWidth placeholder="Email address" variant="outlined" sx={{ mb: 3 }} />

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="outlined" startIcon={<ArrowBack />}>
            Previous
          </Button>
          <Button variant="contained" endIcon={<ArrowForward />} sx={{ backgroundColor: "#1976d2" }}>
            Finish Editing
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
