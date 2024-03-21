import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box, List } from "@mui/material";

function ProductRating({ product }) {
  const newRating = product.averageRating;
  console.log(newRating);
  return (
    <>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        value={newRating}
        readOnly
      />

      <Typography sx={{ fontWeight: "bold" }}>
        Average: {`(${newRating})`}
      </Typography>
      <Typography> {`Total ratings: ${product.ratings?.length}`}</Typography>
    </>
  );
}

export default ProductRating;
