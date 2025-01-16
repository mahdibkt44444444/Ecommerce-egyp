/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductDetails = ({ clickedProduct }) => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={320}
          src={clickedProduct.productimg[selectedImg].url}
          alt=""
        />
      </Box>

      <Box
        sx={{
          textAlign: { py: 2, xs: "center", sm: "left" },
        }}
      >
        <Typography variant="h5"> {clickedProduct.productText}</Typography>
        <Typography my={0.4} fontSize={22} color="crimson" variant="h3">
          {clickedProduct.productPrice}
        </Typography>

        <Typography variant="body1">
          {clickedProduct.productDescription}
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.productimg.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: 0,
                    opacity: 0.5,
                  }}
                >
                  <img
                    onClick={() => setSelectedImg(index)}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    src={item.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{
            mb: { xs: 2, sm: 0 },
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
