import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import style from './display.module.css';
import Api from './api';
import Ylogo from '../assets/y18.gif';
import Submit from '../components/submit';
import Login from './login';
import New from './new';
import Past from './past';
import Comment from './comments';
import Ask from './ask';
import Show from './show';
import Job from './job';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function ScrollableTabsButtonAuto() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				color="transparent"
				style={{
					marginTop: 10,
					lineHeighteight: '10pt',
					height: '0px',
					backgroundColor: 'none'
				}}
			>
				<Tabs
					style={{ marginLeft: 40 }}
					value={value}
					onChange={handleChange}
					textColor="primary"
					scrollButtons="auto"
					variant="scrollable"
					aria-label="scrollable auto tabs example"
				>
					<Tab label="Hacker News" className={style.tabClassFirst} {...a11yProps(0)} />
					<Tab label="new" className={style.tabClass} {...a11yProps(1)} />
					<Tab label="past" className={style.tabClass} {...a11yProps(2)} />
					<Tab label="comments" className={style.tabClass} {...a11yProps(3)} />
					<Tab label="ask" className={style.tabClass} {...a11yProps(4)} />
					<Tab label="show" className={style.tabClass} {...a11yProps(5)} />
					<Tab label="job" className={style.tabClass} {...a11yProps(6)} />
					<Tab label="submit" className={style.tabClass} {...a11yProps(7)} />
					<Tab label="login" className={style.tabClass} {...a11yProps(8)} />
				</Tabs>
			</AppBar>
			<img alt="image" src={Ylogo} style={{ width: 22, height: 20, border: '2px solid white' }} />
			<TabPanel value={value} index={0}>
				<Api />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<New />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Past />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Comment />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Ask />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Show />
			</TabPanel>
			<TabPanel value={value} index={6}>
				<Job />
			</TabPanel>
			<TabPanel value={value} index={7}>
				<Submit />
			</TabPanel>
			<TabPanel value={value} index={8}>
				<Login />
			</TabPanel>
		</div>
	);
}

// import React, { Component } from 'react';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';

// import Api from '../components/apis/api';
// export default class display extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<div>
// 					<BrowserRouter>
// 						<Routes>
// 							<Route path="/" component={Api}></Route>
// 						</Routes>
// 					</BrowserRouter>
// 					{/* <Api/> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }
