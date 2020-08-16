import React from "react";
import {
  Grid,
  Box,
  Typography,
  ListItem,
  ListItemIcon,
  Checkbox,
  useTheme,
  ListItemText,
  List,
  makeStyles,
  Divider,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import CloseBtn from "../components/CloseBtn";
import { Card, Image } from "../layouts/Cards";
import { CheckBox } from "@material-ui/icons";

const demoFood = {
  title: "Roasted chicken",
  description:
    "For nutritional and allergen information for our food please visit http://mcdonalds.co.uk/nutrition.",
};

const Extra = () => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </ListItemIcon>
      <ListItemText primary={`Sauce mayonaise`} />
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    "& > li": {
      padding: "0",
      paddingLeft: "4px",
    },

    "& .MuiTypography-body1": {
      fontSize: "14px",
    },

    "& .PrivateSwitchBase-root-16": {
      padding: "12px",
    },
  },
}));

const Food = ({ item = demoFood }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <CloseBtn />
        <Box height="48px" />
      </Grid>

      <Grid item>
        <Image aspectRatio={240 / 315} isFoodPage />
      </Grid>

      <Grid item>
        <Box pl={3} pr={3} pt={2} pb={2}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4">{item.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{item.description}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item container direction="column">
        <Grid item>
          <Box bgcolor={theme.palette.grey[100]} p={2}>
            <Typography variant="h6">Add Extra</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box pt={1} pb={3}>
            <List disablePadding className={classes.list}>
              {[1, 2, 3].map((n) => (
                <Extra />
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item>
        <Box pt={3} pl={2} pr={2} display="flex" justifyContent="center">
          <ButtonGroup size="large" aria-label="small outlined button group">
            <Button>-</Button>
            <Button>2</Button>
            <Button>+</Button>
          </ButtonGroup>
        </Box>
      </Grid>

      <Grid item>
        <Box pl={2} pr={2} pt={3} pb={4}>
          <Button variant="contained" color="primary" fullWidth>
            Add 1 to order ( £5.99 )
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Food;
