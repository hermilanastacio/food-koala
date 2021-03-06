import React, { useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Search as SearchIcon, Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchField = ({ setIsSearch }) => {
  const classes = useStyles();

  useEffect(() => {
    document.getElementById("searchInputField").focus();
  },[])

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
        <InputBase
          placeholder="Search…"
          id="searchInputField"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          style={{flexGrow: 1}}
          inputProps={{ 'aria-label': 'search' }}
        />
        <CloseIcon style={{marginRight: 10}} onClick={() => setIsSearch(false)}/>
      </div>
    </div>
  );
}
 
export default SearchField;