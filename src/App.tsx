import PetsIcon from '@mui/icons-material/Pets';
import { Container, Dialog, DialogTitle, IconButton, Stack } from '@mui/material';
import { useState } from 'react';


type WeatherQueryParam = {
  API_KEY: string;
  lat: string;
  lon: string;
  units: string;
};

const queryParams: WeatherQueryParam = {
  API_KEY: "39612356bfcb87e2061a89eb187b5f9c",
  lat: "40.8141",
  lon: "14.3391",
  units: "metric",
};

type Person = {
  name: string;
  surname: string;
  age: number;
};

const ivan = {
  name: "Ivan",
  surname: "Garbuz",
  age: 32,
};

const ivanFavoriteNumbers = [7, 3, 12, 666, 1488];

const greetingWithFavoriteNumbers = (person: Person, numbers: number[]) =>
  `Hello my name is ${person.name} ${person.surname}, I am ${person.age} years old. My favorite numbers is ${numbers}`;


const App = () => {

  const [open, setOpen] = useState(false);


  return (
    <Container maxWidth={'xl'}>
      <Stack spacing={1}>
        <IconButton sx={{ color: 'purple' }} onClick={() => setOpen(true)}>
          <PetsIcon fontSize='large' />
        </IconButton>
      </Stack>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Hello</DialogTitle>
      </Dialog>
    </Container>
  );
};

export default App;
