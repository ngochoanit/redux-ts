import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const Todos = () => {
  return (
    <Box>
      <List>
        <ListItem
          secondaryAction={
            <IconButton color="error" edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox></Checkbox>
            </ListItemIcon>
            <ListItemText>ádasd</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton color="error" edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox></Checkbox>
            </ListItemIcon>
            <ListItemText>ádasdasdas</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton color="error" edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox></Checkbox>
            </ListItemIcon>
            <ListItemText>ádasdas</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Todos;
