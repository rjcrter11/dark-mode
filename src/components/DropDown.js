import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import CoinInfo from "./CoinInfo";

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
  const [coinType, setCoinType] = useState([]);
  const [chooseCoin, setChooseCoin] = useState("bitcoin");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${chooseCoin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=true&sparkline=true`
      )
      .then((res) => {
        console.log(res.data);
        setCoinType(res.data);
      })
      .catch((err) => console.log(err));
  }, [chooseCoin]);

  const handleChange = (e) => {
    e.preventDefault();
    setChooseCoin(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("a coin was submitted");
  };

  return (
    <div className="coin-div">
      <FormControl onSubmit={handleSubmit} className={classes.formControl}>
        <InputLabel className={classes.label} id="demo-simple-select-label">
          Coin
        </InputLabel>
        <Select
          className={classes.inputSelect}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chooseCoin}
          onChange={handleChange}
        >
          <MenuItem className={classes.select} value="bitcoin">
            Bitcoin
          </MenuItem>
          <MenuItem className={classes.select} value="ethereum">
            Ethereum
          </MenuItem>
          <MenuItem className={classes.select} value="ripple">
            XRP
          </MenuItem>
          <MenuItem className={classes.select} value="litecoin">
            Litecoin
          </MenuItem>
        </Select>
      </FormControl>

      <CoinInfo coinType={coinType} />
    </div>
  );
}
export default DropDown;
