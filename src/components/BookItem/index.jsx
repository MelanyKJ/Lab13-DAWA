import { Paper, Grid, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";


const BookItem = ({ book }) => {
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          height: 450,
          marginBottom: '25px',
          backgroundColor: "rgba(55, 195, 181, 0.747)",
        }}>
        <CardMedia
          component="img"
          image={book.volumeInfo?.imageLinks?.thumbnail}
          height={500}
          sx={{
            width: '35%',
            height: '400px',
            padding: '25px',
          }}
        />
        <CardContent>
          <Box
          sx={{
            
          }}>
            <Typography className="titulo">{book.volumeInfo.title}</Typography><br></br>
            <Typography className="autor">{book.volumeInfo.authors}</Typography>
            <Typography className="parrafo">{book.volumeInfo.description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>

  );
};

export default BookItem;
