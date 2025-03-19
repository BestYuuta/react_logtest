// SocialMediaProfile.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Button,
  Divider,
} from "@mui/material";

// Icon mạng xã hội
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Icon trang trí
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Import file CSS để tách riêng style
import "./SocialMediaProfile.css";

function SocialMediaProfile() {
  // Danh sách mạng xã hội
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", link: "" },
    { platform: "Twitter", link: "" },
    { platform: "Instagram", link: "" },
    { platform: "Youtube", link: "" },
  ]);

  // Tab hiện tại (0: Company, 1: Recruiting, 2: Social, 3: Contact)
  const [currentTab, setCurrentTab] = useState(2);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // Đổi platform
  const handlePlatformChange = (index, value) => {
    const updated = [...socialLinks];
    updated[index].platform = value;
    setSocialLinks(updated);
  };

  // Đổi link
  const handleLinkChange = (index, value) => {
    const updated = [...socialLinks];
    updated[index].link = value;
    setSocialLinks(updated);
  };

  // Thêm 1 dòng social link
  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", link: "" }]);
  };

  // Xóa 1 dòng social link
  const handleRemoveSocialLink = (index) => {
    const updated = [...socialLinks];
    updated.splice(index, 1);
    setSocialLinks(updated);
  };

  // Lưu & tiếp theo
  const handleSaveAndNext = () => {
    console.log("Saved Social Links:", socialLinks);
    alert("Save thành công, chuyển bước tiếp theo...");
  };

  return (
    <Box className="rootContainer">
      {/* Header */}
      <AppBar position="static" className="headerAppBar" elevation={0}>
        <Toolbar className="headerToolbar">
          <Box className="logoContainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6386/6386976.png"
              alt="logo"
              className="logoImage"
            />
            <Typography variant="h6" className="logoText">
              MyJob
            </Typography>
          </Box>
          <Typography variant="body1" className="progressText">
            Setup Progress - <strong>60% Completed</strong>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Tabs */}
      <Box className="tabsContainer">
        <Tabs value={currentTab} onChange={handleChangeTab} textColor="primary">
          <Tab icon={<BusinessCenterIcon />} iconPosition="start" label="Company Info" />
          <Tab icon={<WorkOutlineIcon />} iconPosition="start" label="Recruiting Info" />
          <Tab icon={<ShareIcon />} iconPosition="start" label="Social Media Profile" />
          <Tab icon={<CallIcon />} iconPosition="start" label="Contact" />
        </Tabs>
      </Box>

      {/* Nội dung chính */}
      <Container maxWidth="md" className="mainContent">
        <Typography variant="h6" className="title">
          Social Media Profile
        </Typography>

        <Paper className="paperContainer">
          {socialLinks.map((item, index) => (
            <Box key={index} className="socialLinkRow">
              <FormControl variant="outlined" size="small" className="platformSelect">
                <InputLabel>Platform</InputLabel>
                <Select
                  label="Platform"
                  value={item.platform}
                  onChange={(e) => handlePlatformChange(index, e.target.value)}
                >
                  <MenuItem value="">
                    <em>--Chọn--</em>
                  </MenuItem>
                  <MenuItem value="Facebook">
                    <FacebookIcon style={{ color: "#1877F2", marginRight: 5 }} />
                    Facebook
                  </MenuItem>
                  <MenuItem value="Twitter">
                    <TwitterIcon style={{ color: "#1DA1F2", marginRight: 5 }} />
                    Twitter
                  </MenuItem>
                  <MenuItem value="Instagram">
                    <InstagramIcon style={{ color: "#E4405F", marginRight: 5 }} />
                    Instagram
                  </MenuItem>
                  <MenuItem value="Youtube">
                    <YouTubeIcon style={{ color: "#FF0000", marginRight: 5 }} />
                    Youtube
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                variant="outlined"
                size="small"
                placeholder="Profile link..."
                className="linkTextField"
                value={item.link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />

              <IconButton
                size="small"
                color="error"
                onClick={() => handleRemoveSocialLink(index)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAddSocialLink}
          >
            Add More Social Link
          </Button>
        </Paper>

        {/* Nút điều hướng */}
        <Box className="navigationButtons">
          <Button variant="outlined" className="navButton">
            Previous
          </Button>
          <Button variant="contained" className="navButton" onClick={handleSaveAndNext}>
            Save & Next
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Divider />
      <Box className="footer">
        © 2025 MyJob - Beta. All rights reserved.
      </Box>
    </Box>
  );
}

export default SocialMediaProfile;
