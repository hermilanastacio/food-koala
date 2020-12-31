import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopNav = () => {
    const classes = useStyles();

    return (
      <div>
        <AppBar position="static" style={{backgroundColor:"#FB9F00"}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              FoodKoala
            </Typography>
            <IconButton>
              <SearchIcon style={{color:"#fff"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
}
 
export default TopNav;
