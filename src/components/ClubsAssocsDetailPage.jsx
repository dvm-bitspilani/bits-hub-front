import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import ClubTextDetailHelper from '../helpers/ClubTextDetailHelper'
import '../styles/clubsassocsdetail.css'
import data from './club_detail_data(temp)'
import clubimageplaceholder from '../assets/clubimageplaceholder.svg'

function ClubsAssocsPage() {
  const { id } = useParams() //this id will be used to fetch club and assoc data from backend
  console.log(id)

  return (
    <React.Fragment>
      <Header />
      <div className="club-detail-container">
        {/* <img src={data[0]["club_image"]} alt="club-Image" /> */}
        <div className="clubimgcontainer">
          <img src={clubimageplaceholder} alt="club Image" />
        </div>
        <ClubTextDetailHelper data={data} />
      </div>
    </React.Fragment>
  )
}

export default ClubsAssocsPage
