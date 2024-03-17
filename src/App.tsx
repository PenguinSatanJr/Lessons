import PetsIcon from '@mui/icons-material/Pets';
import { Container, IconButton, List, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import ListItem, { Item } from './list-item';

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

  const [id, setId] = useState(1);

  const [items, setItems] = useState<Item[]>([]);

  const onAddItem = () => {
    if (input.trim().length) {
      setItems([...items, { id, title: input.trim() }]);
      setId(id + 1);
      setInput('');
    }
  };

  const onItemDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container maxWidth={'sm'} disableGutters>
      <Stack direction={'row'} sx={{ paddingTop: '150px' }} justifyContent={'center'}>
        <TextField
          label={'Enter some items to buy'}
          fullWidth
          onChange={({ target: { value } }) => setInput(value)
          }
          value={input}
          InputProps={{
            endAdornment: (
              <IconButton sx={{ color: 'purple' }} onClick={onAddItem}>
                <PetsIcon fontSize='large' />
              </IconButton>
            )
          }}
        />

      </Stack>
      <List>
        {items.map((value) => (<ListItem item={value} key={value.id} onDelete={() => onItemDelete(value.id)} />))}
      </List>
    </Container>
  );
};
export default App;
