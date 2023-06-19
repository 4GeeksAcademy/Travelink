import React, { useState, useEffect, useContext } from "react";
import { Context } from "./store/appContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import '../styles/home.css';
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { NewPackage } from "./pages/newPackage";
import { PackageDetails } from "./pages/packageDetails";
import { PackageList } from "./pages/packageList";
import { ProfileAgency } from "./pages/profileAgency";
import { ProfileViajero } from "./pages/profileViajero";
import { RegistroViajero } from "./pages/registroViajero";
import { RegistroAgencia } from "./pages/registroAgencia";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { NavMenuAgency } from "./component/navMenuAgency";
import { NavMenuViajero } from "./component/navMenuViajero";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('body-styles');
    }, []);

    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    {
                        (store.token && store.token != "" && store.token != undefined) ?
                            (store.rol == 1) ? <NavMenuAgency /> : <NavMenuViajero />
                            :
                            <></>
                    }
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<PackageDetails />} path="/packageDetails/:idPackage" />
                        <Route element={<PackageList />} path="/packageList" />
                        <Route element={<NewPackage />} path="/newPackage" />
                        <Route element={<RegistroAgencia />} path="/registroAgencia" />
                        <Route element={<RegistroViajero />} path="/registroViajero" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<ProfileAgency />} path="/profileAgency" />
                        <Route element={<ProfileViajero />} path="/profileViajero" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
