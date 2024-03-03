import PetsIcon from '@mui/icons-material/Pets';
import { Container, IconButton, List, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ListItem from './list-item';

// type WeatherQueryParam = {
//   API_KEY: string;
//   lat: string;
//   lon: string;
//   units: string;
// };

// const queryParams: WeatherQueryParam = {
//   API_KEY: "39612356bfcb87e2061a89eb187b5f9c",
//   lat: "40.8141",
//   lon: "14.3391",
//   units: "metric",
// };

// type Person = {
//   name: string;
//   surname: string;
//   age: number;
// };

// const ivan = {
//   name: "Ivan",
//   surname: "Garbuz",
//   age: 32,
// };

// const ivanFavoriteNumbers = [7, 3, 12, 666, 1488];

// const greetingWithFavoriteNumbers = (person: Person, numbers: number[]) =>
//   `Hello my name is ${person.name} ${person.surname}, I am ${person.age} years old. My favorite numbers is ${numbers}`;


const App = () => {
  const [input, setInput] = useState('');

  const [items, setItems] = useState<string[]>([]);

  console.log('items', items);

  return (
    <Container maxWidth={'sm'} disableGutters>
      <Stack direction={'row'} sx={{ paddingTop: '150px' }} justifyContent={'center'}>
        <TextField
          label={'Enter some items to buy'}
          fullWidth
          onChange={({ target: { value } }) => setInput(value)
          }
          value={input}
        />
        <IconButton sx={{ color: 'purple', width: "150px" }} onClick={() =>
          input.trim().length && setItems([...items, input.trim()])}>
          <PetsIcon fontSize='large' />
        </IconButton>
      </Stack>
      <List>
        {items.map((value, index) => (<ListItem item={value} key={index} />))}
      </List>
    </Container>
  );
};
export default App;
