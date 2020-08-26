import React from "react";
import Image from "material-ui-image";
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
  Button as GroupButton,
  ButtonGroup,
} from "@material-ui/core";

import Button from "../components/Button";
import { useState } from "react";

const testData = {
  title: "Roasted chicken",
  description:
    "For nutritional and allergen information for our food please visit http://mcdonalds.co.uk/nutrition.",
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    paddingBottom: "32px",
    marginBottom: "32px",
  },
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
  qtyBtn: {
    fontSize: "16px",
    padding: "9px 18px !important",
  },
}));

const FoodDetails = ({ data }) => {
  return (
    <div>
      <Image
        src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
        onClick={() => console.log("onClick")}
        aspectRatio={414 / 331}
        disableSpinner
      />
      <Box pl={3} pr={3} pt={2} pb={2}>
        <Box pb={2}>
          <Typography variant="h4">{data.title}</Typography>
        </Box>
        <Typography variant="body2">{data.description}</Typography>
      </Box>
    </div>
  );
};
const AddExtras = ({ extras, setExtras }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <Box bgcolor={theme.palette.grey[100]} p={2}>
        <Typography variant="h6">Add Extra</Typography>
      </Box>

      <Box pt={2} pb={3}>
        <List disablePadding className={classes.list}>
          {Object.keys(extras).map((extra, idx) => (
            <ListItem
              key={idx}
              onClick={() => setExtras({ ...extras, [extra]: !extras[extra] })}
            >
              <ListItemIcon>
                <Checkbox
                  checked={extras[extra]}
                  color="default"
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
              </ListItemIcon>
              <ListItemText primary={extra} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

const ChooseQuantity = () => {
  const classes = useStyles();
  return (
    <Box pt={3} pl={2} pr={2} display="flex" justifyContent="center">
      <ButtonGroup size="large" aria-label="small outlined button group">
        <GroupButton className={classes.qtyBtn}>-</GroupButton>
        <GroupButton className={classes.qtyBtn}>2</GroupButton>
        <GroupButton className={classes.qtyBtn}>+</GroupButton>
      </ButtonGroup>
    </Box>
  );
};

const AddToOrder = () => {
  return (
    <Box pl={2} pr={2} pt={3} pb={0}>
      <Button variant="contained" color="primary" fullWidth>
        Add 1 to order ( £5.99 )
      </Button>
    </Box>
  );
};

function createExtrasMap(extrasArray) {
  return extrasArray.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = false;
    return accumulator;
  }, {});
}

const Food = ({ item = testData }) => {
  const extrasMap = item.extras ? createExtrasMap(item.extras) : null;
  const [extras, setExtras] = useState(extrasMap);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FoodDetails data={item} />
      {extras && <AddExtras extras={extras} setExtras={setExtras} />}
      <Divider />
      <ChooseQuantity />
      <AddToOrder />
    </Box>
  );
};

export default Food;
