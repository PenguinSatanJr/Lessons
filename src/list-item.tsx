import { Checkbox, Typography, IconButton, ListItem as MuiListItem } from "@mui/material"
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

    return <MuiListItem divider >
        <Checkbox />
        <Typography>
            {title}
        </Typography>
        <IconButton >
            <EditIcon fontSize={'small'} />
        </IconButton>
        <IconButton onClick={() => onDelete(id)} >
            <ClearIcon fontSize={'small'} />
        </IconButton>
    </MuiListItem>;
}

export default ListItem;
