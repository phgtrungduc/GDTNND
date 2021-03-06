import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Practice from "./Components/Practice";
import LearningKey from "./Components/LearningKey";
import LearningRhythm from "./Components/LearningRhythm";
import LearningWord from "./Components/LearningWord";
import LearningSentence from "./Components/LearningSentence";
import Battle from "./Components/Battle";
import History from "./Components/History";
import Evaluate from "./Components/Evaluate";
import HistoryPractice from "./Components/HistoryPractice";
import React, { useState } from "react";
import Test from "./Components/Test";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import Setting from "@material-ui/icons/Settings";
import Competion from "./Components/Competion";
import HomePage from "./Components/HomePage";
import ChartDemo from "./Components/Chart";
import CreateBattle from "./Components/CreateBattle";
import SettingPane from "./Components/SettingPane";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const [display, setDisplay] = useState(false);
  // const [display1, setDisplay1] = useState(false);
  // const [display2, setDisplay2] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openListLearn, setOpenListLearn] = React.useState(false);
  const [openListBattle, setOpenListBattle] = React.useState(false);
  const [openListInfo, setOpenListInfo] = React.useState(false);

  const handleClickListLearn = () => {
    setOpenListLearn(!openListLearn);
    if(open ===false){
      setOpen(true);
    }
  };

  const handleClickListBattle = () => {
    setOpenListBattle(!openListBattle);
    if(open ===false){
      setOpen(true);
    }
  };

  const handleClickListInfo = () => {
    setOpenListInfo(!openListInfo);
    if(open ===false){
      setOpen(true);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    if(openListLearn === true){
      setOpenListLearn(false);
    }
    if(openListBattle === true){
      setOpenListBattle(false);
    }
    if(openListInfo === true){
      setOpenListInfo(false);
    }
  };

  const displayMenu = () => {
    let temp = !display;
    console.log(temp);
    setDisplay(temp);
    handleDrawerOpen();
  };

  // const displayMenuLearning = () => {
  //   let temp1 = !display1;
  //   console.log(temp1);
  //   setDisplay1(temp1);
  //   handleDrawerOpen();
  // };
  // const displayMenuBattle = () => {
  //   let temp = !display2;
  //   console.log(temp);
  //   setDisplay2(temp);
  //   handleDrawerOpen();
  // };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "white" }}>
            Tốc ký trong tầm tay
          </Typography>
          <div className="login-button">
            <i href="#" className="fa fa-facebook"></i>
            <i href="#" className="fa fa-twitter"></i>
            <i href="#" className="fa fa-google"></i>
            <i className="far fa-user"></i>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItem>
          </Link>
          
          <ListItem button onClick={handleClickListLearn}>
            <ListItemIcon>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Học gõ" />
            {openListLearn ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={openListLearn} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <Link to="learningKey" style={{ textDecoration: "none", color: "black" }}>
                  <div className="item-dropdown">
                    Học gõ phím
                  </div>
                </Link>
                <Link to="learningRhythm" style={{ textDecoration: "none", color: "black" }}>
                  <div className="item-dropdown" >
                    Học gõ âm tiết
                  </div>
                </Link>
                <Link to="learningWord" style={{ textDecoration: "none", color: "black" }}>
                  <div className="item-dropdown" >
                    Học gõ từ
                  </div>
                </Link>
                <Link to="learningSentence" style={{ textDecoration: "none", color: "black" }}>
                  <div className="item-dropdown">
                    Học gõ câu
                  </div>
                </Link>
              </List>
            </Collapse>
          
          <Link
            to="/practice"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Luyện tập" />
            </ListItem>
          </Link>
          
          <ListItem button onClick={handleClickListBattle}>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Thi đấu" />
            {openListBattle ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={openListBattle} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="battle" style={{ textDecoration: "none", color: "black" }}>
                <div className="item-dropdown">
                  Tham gia
                </div>
              </Link>
              <Link to="createbattle" style={{ textDecoration: "none", color: "black" }}>
                <div className="item-dropdown">
                  Tạo mới
                </div>
              </Link>
            </List>
          </Collapse>
          
          <Link
            to="/evaluate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText primary="Đánh giá" />
            </ListItem>
          </Link>
          <Link
            to="/history"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Lịch sử" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
        <ListItem button onClick={handleClickListInfo}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Thông tin cá nhân" />
            {openListInfo ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={openListInfo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <div className="menu-dropdown">
                <Link
                  to="chart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="item-dropdown" onClick={displayMenu}>
                    Thống kê
                  </div>
                </Link>
                <Link
                  to="historypractice"
                  style={{ textDecoration: "none", color: "black" }}
                >
                <div className="item-dropdown" onClick={displayMenu}>
                  Lịch sử luyện tập
                </div>
                </Link>
              </div>
            </List>
          </Collapse>
          
          {/* <div>
            <ListItem
              button
              style={{ textDecoration: "none", color: "black" }}
              onClick={displayMenu}
            >
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Thông tin cá nhân" />
            </ListItem>
            {display === true ? (
              <div className="menu-dropdown">
                <Link
                  to="chart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="item-dropdown" onClick={displayMenu}>
                    Thống kê
                  </div>
                </Link>
                <div className="item-dropdown" onClick={displayMenu}>
                  Lịch sử luyện tập
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div> */}
          
          <Link
            to="/setting"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <Setting />
              </ListItemIcon>
              <ListItemText primary="Cài đặt" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/competition">
            <Competion />
          </Route>
          <Route path="/battle">
            <Battle />
          </Route>
          <Route path="/createbattle">
            <CreateBattle />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/learningKey">
            <LearningKey />
          </Route>
          <Route path="/learningRhythm">
            <LearningRhythm />
          </Route>
          <Route path="/learningWord">
            <LearningWord />
          </Route>
          <Route path="/learningSentence">
            <LearningSentence />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/evaluate">
            <Evaluate />
          </Route>
          <Route path="/chart">
            <ChartDemo />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/historypractice">
            <HistoryPractice />
          </Route>
          <Route path="/setting">
            <SettingPane />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
