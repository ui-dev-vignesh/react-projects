import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import './MainLayout.css';

function MainLayout({children}){
    return(
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>);
}

export default MainLayout;