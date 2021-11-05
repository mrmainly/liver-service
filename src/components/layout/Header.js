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

const useStyles = makeStyles(() => ({
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
        color: '#1B1642'
    },
    toolbar: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerContainer: {
        padding: "20px 30px",
        color: '#1B1642',
        height: '100%'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export default function Header() {
    const { header, menuButton, toolbar, drawerContainer, linkStyle } = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(false)
    const [openStatus, setOpenStatus] = React.useState(false)
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
            return window.innerWidth < 1180
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
                {headersData.map((item, index) => {
                    return (
                        <Button
                            className={menuButton}
                            onClick={() => item.type ? navigate(item.href) : setAnchorEl(true)}
                            key={index}
                        >
                            {item.label}
                        </Button>
                    );
                })}
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
            <div style={{ display: 'flex' }}>
                {headersData.map((item, index) => {
                    return (
                        <Button
                            className={menuButton}
                            onClick={() => item.href ? navigate(item.href) : item.state(true)}
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
                    open={anchorEl}
                    onClose={() => setAnchorEl(false)}
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
                    open={openStatus}
                    onClose={() => setOpenStatus(false)}
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