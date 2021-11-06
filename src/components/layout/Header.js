import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Menu,
    MenuItem,
    Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from 'react-router-dom'
import { DispatchContext } from "../../store";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#1B1642",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        size: "18px",
        marginLeft: "38px",
        color: '#1B1642',
        [theme.breakpoints.down('md')]: {
            marginTop: 10,
            marginLeft: 0,
            border: '1px solid black',
            fontSize: 12
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerContainer: {
        color: '#1B1642',
        height: '100%',
        width: 250
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black'
    },
    menuStyle: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: 20
        },
    }
}));

export default function Header() {
    const { header, menuButton, toolbar, drawerContainer, linkStyle, menuStyle } = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [openStatus, setOpenStatus] = React.useState(null)
    const dispatch = useContext(DispatchContext)
    const navigate = useNavigate()
    const headersData = [
        {
            label: "О нас",
            href: "/",

        },
        {
            label: "Новости",
            href: "/news",
        },
        {
            label: "Паллиативная медицинская помощь",
            state: setAnchorEl
        },
        {
            label: "Трансплантация органов",
            state: setOpenStatus
        },
    ];
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1279
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuIcon />
                </IconButton>
                <div >{femmecubatorLogo}</div>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };
    const getDrawerChoices = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {getMenuButtons()}
            </div>
        )
    };
    const femmecubatorLogo = (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={'/image/Group/Group3.png'} style={{ width: 40, height: 40, cursor: 'pointer', }} alt={''} onClick={() => {
                navigate('/')
            }} />
            <Typography style={{ color: 'rgba(130, 27, 14, 1)', marginLeft: 5, }}>Паллиативная<br /> Помощь</Typography>

        </div>
    );
    const getMenuButtons = () => {
        return (
            <div className={menuStyle}>
                {headersData.map((item, index) => {
                    return (
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            className={menuButton}
                            onClick={(e) => item.href ? navigate(item.href) : item.state(e.currentTarget)}
                            key={index}
                        >
                            {item.label}
                        </Button>
                    );
                })}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(false)}
                    style={{ marginTop: 20 }}
                >
                    <Link to="/sister-care" className={linkStyle}>
                        <MenuItem >Отделение сестринского ухода</MenuItem>
                    </Link>
                    <Link to="/help-family" className={linkStyle}>
                        <MenuItem>Ресурсы центр помощи семьям</MenuItem>
                    </Link>
                    <Link to="/" className={linkStyle}>
                        <MenuItem>Наши проекты</MenuItem>
                    </Link>
                </Menu>
                <Menu
                    id="simple-menu"
                    anchorEl={openStatus}
                    keepMounted
                    open={Boolean(openStatus)}
                    onClose={() => setOpenStatus(false)}
                    style={{ marginTop: 20 }}
                >
                    <Link to="/bud-page" className={linkStyle}>
                        <MenuItem>Трансплантация почки</MenuItem>
                    </Link>
                    <Link to="/liver-trans" className={linkStyle}>
                        <MenuItem >Трансплантация печени</MenuItem>
                    </Link>
                    <Link to="/" className={linkStyle}>
                        <MenuItem >Наши проекты</MenuItem>
                    </Link>
                </Menu>
            </div>
        )
    };
    return (
        <header>
            <AppBar className={header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}