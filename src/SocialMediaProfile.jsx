import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  Button,
  Divider,
  IconButton,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import {
  Person as PersonIcon,           // Company Info
  AccountCircle as AccountCircleIcon, // Founding Info
  Public as PublicIcon,           // Social Media Profile
  AlternateEmail as AlternateEmailIcon, // Contact
  Delete as DeleteIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";

// Import icon mạng xã hội với màu sắc
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialMediaProfile() {
  // Danh sách Social Link
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", link: "" },
    { platform: "Twitter", link: "" },
    { platform: "Instagram", link: "" },
    { platform: "Youtube", link: "" },
  ]);

  // Xử lý đổi platform
  const handlePlatformChange = (index, value) => {
    const newLinks = [...socialLinks];
    newLinks[index].platform = value;
    setSocialLinks(newLinks);
  };

  // Xử lý đổi link
  const handleLinkChange = (index, value) => {
    const newLinks = [...socialLinks];
    newLinks[index].link = value;
    setSocialLinks(newLinks);
  };

  // Thêm 1 dòng social link
  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", link: "" }]);
  };

  // Xóa 1 dòng social link
  const handleRemoveSocialLink = (index) => {
    const newLinks = [...socialLinks];
    newLinks.splice(index, 1);
    setSocialLinks(newLinks);
  };

  // Giả lập nút Save & Next
  const handleSaveAndNext = () => {
    console.log("Saved Social Links:", socialLinks);
    alert("Đã lưu Social Media Profile. Chuyển bước tiếp theo...");
  };

  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #333",
          p: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + Tên MyJob */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PublicIcon sx={{ color: "#1976d2", fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: 20 }}
            >
              MyJob
            </Typography>
          </Box>

          {/* Tiến độ */}
          <Typography sx={{ color: "#ccc", fontSize: 14 }}>
            Setup Progress - <strong>75% Completed</strong>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Thanh bước (Company Info, Founding Info, Social Media Profile, Contact) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mt: 2,
          pb: 2,
          borderBottom: "1px solid #333",
        }}
      >
        {/* Company Info -> Person icon */}
        <Box sx={{ display: "flex", alignItems: "center", color: "#BDBDBD", gap: 0.5 }}>
          <PersonIcon />
          <Typography>Company Info</Typography>
        </Box>

        {/* Founding Info -> AccountCircle icon */}
        <Box sx={{ display: "flex", alignItems: "center", color: "#BDBDBD", gap: 0.5 }}>
          <AccountCircleIcon />
          <Typography>Founding Info</Typography>
        </Box>

        {/* Social Media Profile (active) -> Public icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1976d2",
            gap: 0.5,
            borderBottom: "2px solid #1976d2",
            pb: 0.5,
          }}
        >
          <PublicIcon />
          <Typography>Social Media Profile</Typography>
        </Box>

        {/* Contact -> AlternateEmail icon */}
        <Box sx={{ display: "flex", alignItems: "center", color: "#BDBDBD", gap: 0.5 }}>
          <AlternateEmailIcon />
          <Typography>Contact</Typography>
        </Box>
      </Box>

      {/* Nội dung chính */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, backgroundColor: "#1f1f1f" }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
            Social Media Profile
          </Typography>

          {socialLinks.map((item, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              {/* Tiêu đề "Social Link X" */}
              <Typography sx={{ mb: 1, fontWeight: 500, color: "#ccc" }}>
                Social Link {index + 1}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {/* Dropdown platform */}
                <FormControl sx={{ minWidth: 150 }}>
                  <Select
                    size="small"
                    value={item.platform}
                    onChange={(e) => handlePlatformChange(index, e.target.value)}
                    displayEmpty
                    sx={{
                      color: "#fff",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#666" },
                        "&:hover fieldset": { borderColor: "#aaa" },
                      },
                      "& .MuiSvgIcon-root": { color: "#fff" },
                    }}
                  >
                    <MenuItem value="">
                      <em>--Select--</em>
                    </MenuItem>
                    <MenuItem value="Facebook">
                      <FacebookIcon sx={{ mr: 1, color: "#1877F2" }} />
                      Facebook
                    </MenuItem>
                    <MenuItem value="Twitter">
                      <TwitterIcon sx={{ mr: 1, color: "#1DA1F2" }} />
                      Twitter
                    </MenuItem>
                    <MenuItem value="Instagram">
                      <InstagramIcon sx={{ mr: 1, color: "#E4405F" }} />
                      Instagram
                    </MenuItem>
                    <MenuItem value="Youtube">
                      <YouTubeIcon sx={{ mr: 1, color: "#FF0000" }} />
                      Youtube
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Ô nhập link */}
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Profile link / URL..."
                  value={item.link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": { borderColor: "#666" },
                      "&:hover fieldset": { borderColor: "#aaa" },
                    },
                  }}
                />

                {/* Nút Xoá */}
                <IconButton color="error" onClick={() => handleRemoveSocialLink(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}

          {/* Nút thêm Social Link */}
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAddSocialLink}
            sx={{
              mb: 2,
              color: "#fff",
              borderColor: "#666",
              "&:hover": { borderColor: "#aaa" },
            }}
          >
            Add New Social Link
          </Button>

          {/* Nút điều hướng */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              sx={{
                color: "#fff",
                borderColor: "#666",
                "&:hover": { borderColor: "#aaa" },
              }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={handleSaveAndNext}
              sx={{ backgroundColor: "#1976d2" }}
            >
              Save & Next
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Divider sx={{ mt: 4, borderColor: "#333" }} />
      <Box sx={{ textAlign: "center", py: 2, color: "#777", fontSize: 14 }}>
        © 2025 MyJob - Beta. All rights reserved.
      </Box>
    </Box>
  );
}

export default SocialMediaProfile;
