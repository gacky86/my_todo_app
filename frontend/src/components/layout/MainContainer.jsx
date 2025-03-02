// style
// import { Container, Grid2 } from '@mui/material';
// import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
  },
}));

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <main>
        <Container maxWidth='lg' className={classes.container}>
          <Grid2 container justifyContent='center'>
            <Grid2 item>{children}</Grid2>
          </Grid2>
        </Container>
      </main>
    </>
  );
};
export default MainContainer;
