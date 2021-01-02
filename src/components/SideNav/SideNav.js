import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const SideNav = ({ toggleDrawer, state }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="All"/>
        </ListItem>
        
        <ListItem button onClick={e => handleClick(e)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} open={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Milktea" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Frappe" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Silog" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Ala carte" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Others" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="Best Sellers"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="Promos"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="New"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideNav;