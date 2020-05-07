import React, {Suspense, lazy, useState} from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useLocalStorage, useEffectOnce} from "react-use";
import "./App.scss";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const Achievements = lazy(() => import("./components/pages/Achievements"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Events = lazy(() => import("./components/pages/Events"));
const About = lazy(() => import("./components/pages/About"));

const schemaMarkup = {
    "@context": "http://schema.org/",
    "@type": "NGO",
    name: "PEC ACM Society",
    alternateName: "Computer Science Society",
    url: "https://www.pec.ac.in/",
    image: "https://www.pec.ac.in/thumbnail.png",
};

function App() {
    const {t} = useTranslation();
    const [theme, setTheme] = useState({
        palette: {
            type: "light"
        }
    });
    const pages = [
        {
            pageLink: "/",
            view: Home,
            displayName: "Home",
            animationDelayForNavbar: 0.2,
            showInNavbar: true,
        },
        {
            pageLink: "/achievements",
            view: Achievements,
            displayName: t("Achievements & Awards"),
            animationDelayForNavbar: 0.3,
            showInNavbar: true,
        },
        {
            pageLink: "/projects",
            view: Projects,
            displayName: t("Projects"),
            animationDelayForNavbar: 0.4,
            showInNavbar: true,
        },
        {
            pageLink: "/events",
            view: Events,
            displayName: t("Events"),
            animationDelayForNavbar: 0.5,
            showInNavbar: true,
        },
        {
            pageLink: "/about",
            view: About,
            displayName: t("About"),
            animationDelayForNavbar: 0.6,
            showInNavbar: true,
        },
    ];

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const [isThemeSet] = useLocalStorage("isThemeSet", false);

    useEffectOnce(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches &&
            !isThemeSet
        ) {
            setDarkMode(true);
        } else if (
            window.matchMedia &&
            !window.matchMedia("(prefers-color-scheme: dark)").matches &&
            !isThemeSet
        ) {
            setDarkMode(false);
        }
    });


    React.useEffect(() => {
        if (darkMode) {
            setTheme({
                palette: {
                    type: 'dark'
                }
            });
            document.querySelector("body").classList.add("dark-mode");
        } else {
            setTheme({
                palette: {
                    type: 'light'
                }
            });
            document.querySelector("body").classList.remove("dark-mode");
        }
    }, [darkMode]);

    const muiTheme = createMuiTheme(theme);

    return (
        <div className="App">
            <MuiThemeProvider theme={muiTheme}>
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify(schemaMarkup)}
                    </script>
                </Helmet>

                <Router>
                    <ScrollToTop/>
                    <Suspense fallback={<div className="lazy"></div>}>
                        <Route
                            render={({location}) => (
                                <div className="Almighty-Router">
                                    <Navbar
                                        pages={pages}
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                    <Switch location={location}>
                                        {pages.map((page, index) => {
                                            return (
                                                <Route
                                                    exact
                                                    path={page.pageLink}
                                                    render={({match}) => (
                                                        <page.view key={match.params.stateCode || index}/>
                                                    )}
                                                    key={index}
                                                />
                                            );
                                        })}
                                        <Redirect to="/"/>
                                    </Switch>
                                </div>
                            )}
                        />
                    </Suspense>
                </Router>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
