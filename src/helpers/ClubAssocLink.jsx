import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ClubAssocLink({club}){

    console.log(club)

    // {
    //     "id": "dvm",
    //     "name": "Department of Visual Media",
    //     "category": "club",
    //     "logo": "../assets/DVM_Logo_white.svg",
    //     "type": "Tech-related",
    //     "description": "The Department of Visual Media plays an important role in building the software that is the backbone of all the three fests of BITS Pilani - BOSM, Oasis and APOGEE  The Department of Visual Media plays an important role in building the software that is the backbone of all the three fests of BITS Pilani - BOSM, Oasis and APOGEE",
    //     "extra_keywords": [
    //       "dvm",
    //       "deptofvm",
    //       "departmentofvisualmedia",
    //       "visualmedia",
    //       "departmentofvm"
    //     ],
    //     "currently_recruiting": true
    //   }

    return (
        <React.Fragment>
            <Link to={club.id} className="clubLink">
                <div className="imgContainer">

                </div>
                <h3>{club["name"]}</h3>
                <div className="club-type">

                </div>
                <p>{club["description"]}</p>
            </Link>

        </React.Fragment>
    )
}

export default ClubAssocLink;

ClubAssocLink.propTypes = {
    club: PropTypes.object,
}