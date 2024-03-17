import { Typography, IconButton, ListItem as MuiListItem, Stack } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

export type Item = {
    id: number;
    title: string;
};

type ListItemProps = {
    item: Item;
    onDelete: (id: number) => void;
};

const ListItem = ({ item, onDelete }: ListItemProps) => {
    const { id, title } = item;

    return (
        <MuiListItem divider >
            <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
                <Typography variant='h6'>{id}</Typography>
                <Typography>
                    {title}
                </Typography>
                <Stack direction={'row'}>
                    <IconButton >
                        <EditIcon fontSize={'small'} />
                    </IconButton>
                    <IconButton onClick={() => onDelete(id)} >
                        <ClearIcon fontSize={'small'} />
                    </IconButton>
                </Stack>
            </Stack>
        </MuiListItem>
    );
}

export default ListItem;
