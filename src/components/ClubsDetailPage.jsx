import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import ClubAssocLink from '../helpers/ClubAssocLink'
import ClubTextDetailHelper from '../helpers/ClubTextDetailHelper'
import '../styles/clubsdetail.css'
import data from './club_detail_data(temp)'
import clubimageplaceholder from '../assets/clubimageplaceholder.svg'
import arrow from '../assets/left_arrow_icon.svg'

function ClubsDetailPage() {
  const { id } = useParams() //this id will be used to fetch club and assoc data from backend
  // in this component we need to fetch the details of the specified club but also all clubs list also

  const navigate = useNavigate()
  console.log(id)

  const handleArrowClick = () => {
    navigate('/clubs')
  }

  return (
    <React.Fragment>
      <Header />
      <div className="club-detail-container">
        {/* <img src={data[0]["club_image"]} alt="club-Image" /> */}
        <div className="clubimgcontainer">
          <img
            src={clubimageplaceholder}
            className="clubimg"
            alt="club Image"
          />
          <div className="nameofclub">
            <img src={arrow} alt="back" onClick={handleArrowClick} />
            <h1>{data[0]['name']}</h1>
          </div>
        </div>
        <ClubTextDetailHelper data={data} />
      </div>
      <div className="clubtype">{data[0].type}</div>
      <p className="similar">Similar</p>
      <div className="similarClubContainer">
        {data[0]['similar'].map((club) => {
          return <ClubAssocLink key={club.id} club={club} />
        })}
      </div>
    </React.Fragment>
  )
}

export default ClubsDetailPage
