import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Showcase from '../Showcase';
import { useWindowSize } from 'react-use';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid>
            {children}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
    
  root: {
    flexGrow: 1,
    overflowX: "hidden",
  },

  big: {
      marginLeft: '5rem',
  },

  small: {
      marginLeft: 0,
  }
}));

export default function Events() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(value);
    const windowSize = useWindowSize();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={windowSize.width < 769? classes.small : classes.big}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="simple tabs example"
            variant="scrollable"
            scrollButtons="auto"
        >
          <Tab label="Ongoing Events" {...a11yProps(0)} />
          <Tab label="Upcoming Events" {...a11yProps(1)} />
          <Tab label="Past Events" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Showcase/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Showcase/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Showcase/>
      </TabPanel>
    </div>
  );
}
