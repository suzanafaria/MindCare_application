import './App.css';
import { Container } from '@mui/material';
import Login from './components/LoginPage';

function App() {
  return (
    <Container sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 2,
        maxWidth: "1200 px",
        margin: "0 auto",
      }}>
      <Login />
    </Container>
  );
}

export default App;
