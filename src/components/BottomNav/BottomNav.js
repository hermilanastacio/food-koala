import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { 
  Home as HomeIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: "100%",
    WebkitBoxShadow: "0px -2px 5px 0px rgba(0,0,0,0.25)",
    MozBoxShadow: "0px -2px 5px 0px rgba(0,0,0,0.25)",
    boxShadow: "0px -2px 5px 0px rgba(0,0,0,0.25)",

    "& .Mui-selected": {
      color:"#FB9F00"
    }
  },
});

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  }
  
  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        onClick={() => handleRedirect("/")}
        icon={<HomeIcon/>} 
      />
      <BottomNavigationAction 
        icon={<FavoriteBorderIcon/>}
        disabled 
      />
      <BottomNavigationAction 
        onClick={() => handleRedirect("/cart")}
        icon={<ShoppingCartIcon/>} 
      />
      <BottomNavigationAction 
        icon={<MenuIcon/>}
        disabled 
      />
    </BottomNavigation>
  );
}
 
export default BottomNav;
