import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomPagination({ count, onPageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) => onPageChange(page)}
      />
    </Stack>
  );
}
