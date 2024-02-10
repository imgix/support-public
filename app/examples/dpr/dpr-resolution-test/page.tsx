'use client'

import { useState } from 'react';
import { Box, Select, MenuItem, Typography, FormControl, } from '@mui/material';

export default function ImageDisplay() {

  // Array of image URLs for the dropdown
  const imageOptions = [
    { label: 'w=250', url: 'https://ontologic.imgix.net/nz2.jpg?mark-w=1&mark-pad=0&mark-align=center%2Cmiddle&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9NTAwJnR4dDY0PVNXMWhaMlVnUTI5dWRHRnBibVZ5SUZkcFpIUm9QVEkxTUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JKYm5SeWFXNXphV01nVjJsa2RHZzlNalV3JnR4dC1hbGlnbj1taWRkbGUlMkNjZW50ZXImdHh0LXNpemU9MzAmdHh0LWNvbG9yPXdoaXRl&auto=compress%2Cformat&fit=crop&ar=1%3A1&w=250', width: '250' },
    { label: 'w=500', url: 'https://ontologic.imgix.net/nz2.jpg?w=500&ar=1%3A1&fit=crop&auto=compress%2Cformat&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9NTAwJnR4dDY0PVNXMWhaMlVnUTI5dWRHRnBibVZ5SUZkcFpIUm9QVFV3TUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JKYm5SeWFXNXphV01nVjJsa2RHZzlOVEF3JnR4dC1hbGlnbj1taWRkbGUlMkNjZW50ZXImdHh0LXNpemU9MzAmdHh0LWNvbG9yPXdoaXRl&mark-align=center%2Cmiddle&mark-pad=0', width: '500' },
    { label: 'w=1000', url: 'https://ontologic.imgix.net/nz2.jpg?mark-w=1&mark-pad=0&mark-align=center%2Cmiddle&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9NTAwJnR4dDY0PVNXMWhaMlVnUTI5dWRHRnBibVZ5SUZkcFpIUm9QVEV3TURBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnU1c1MGNtbHVjMmxqSUZkcFpIUm9QVEV3TURBJnR4dC1hbGlnbj1taWRkbGUlMkNjZW50ZXImdHh0LXNpemU9MzAmdHh0LWNvbG9yPXdoaXRl&auto=compress%2Cformat&fit=crop&ar=1%3A1&w=1000', width: '1000' },
    { label: 'w=2000', url: 'https://ontologic.imgix.net/nz2.jpg?mark-w=1&mark-pad=0&mark-align=center%2Cmiddle&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P3c9NTAwJnR4dDY0PVNXMWhaMlVnUTI5dWRHRnBibVZ5SUZkcFpIUm9QVEl3TURBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnU1c1MGNtbHVjMmxqSUZkcFpIUm9QVEl3TURBJnR4dC1hbGlnbj1taWRkbGUlMkNjZW50ZXImdHh0LXNpemU9MzAmdHh0LWNvbG9yPXdoaXRl&auto=compress%2Cformat&fit=crop&ar=1%3A1&w=2000', width: '2000' },
  ];

  // Initialize imageUrl state with the value of the first URL
  let [currentImage, set_currentImage] = useState(imageOptions[1]);
  let [imageUrl, setImageUrl] = useState(imageOptions[1].url);
  let [width, setWidth] = useState(imageOptions[1].width);

  // Function to handle the selection of a new image URL
  const handleChange = (event) => {
    let data = JSON.parse(event.target.value);
    console.log(data)
    setImageUrl(data.url);
    set_currentImage(data)
    setWidth(data.width)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
      }}
    >
      {/* Dropdown for selecting an image URL */}
      <FormControl sx={{ mb: 2 }}>
        <Select
          labelId="image-picker-label"
          id="image-picker"
          value={JSON.stringify(currentImage)}
          label="Image URL"
          onChange={handleChange}
          sx={{ mb: 2, width: 250 }} // Adjust the width as needed
        >
          {imageOptions.map((option) => (
            <MenuItem key={option.url} value={JSON.stringify(option)}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="body1">
        Rendered Width: 500px
      </Typography>
      <Typography variant="body1">
          Intrinsic Width: {width}px
      </Typography>
      {/* Image container */}
      <Box
        sx={{
          width: 500, // Container width
          height: 500, // Container height
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #ccc', // Optional, for visual boundary
        }}
      >
        {/* Image element, displayed if imageUrl is not empty */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Displayed"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: '100%',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
