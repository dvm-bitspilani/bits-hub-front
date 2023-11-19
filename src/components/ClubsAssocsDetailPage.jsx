import React from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import '../styles/clubsassocsdetail.css'

function ClubsAssocsPage (){
    const { id } = useParams(); //this id will be used to fetch club and assoc data from backend



    return (
        <React.Fragment>
            <Header />
            <p style={{color:"white" , marginTop: '10vh' , textAlign:'center'}}>{id}</p>
        </React.Fragment>
    )
}

export default ClubsAssocsPage