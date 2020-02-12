import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    padding: theme.spacing(1, 0)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  label: {
    fontSize: "18px",
    color: "orange"
  },
  select: {
    fontSize: "12px",
    color: "orange"
  },
  inputSelect: {
    fontSize: "12px",
    color: "orange",
    borderBottom: "1px solid orange"
  }
}));

function DropDown() {
  const classes = useStyles();
  const [coinType, setCoinType] = useState("");
  const [chooseCoin, setChooseCoin] = useState([]);
  // useEffect(() => {

  // })

  const handleChange = (e) => {
    e.preventDefault();
    setCoinType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label} id="demo-simple-select-label">
          Coin
        </InputLabel>
        <Select
          className={classes.inputSelect}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coinType}
          onChange={handleChange}
        >
          <MenuItem className={classes.select} value="bitcoin">
            Bitcoin
          </MenuItem>
          <MenuItem className={classes.select} value="ethereum">
            Ethereum
          </MenuItem>
          <MenuItem className={classes.select} value="xrp">
            XRP
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default DropDown;
