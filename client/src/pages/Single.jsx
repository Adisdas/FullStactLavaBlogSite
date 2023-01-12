import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">

      <div className="user">
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/white?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>Lorem ipsum dolor sit amet</h1>
    <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor 
      sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum 
      dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
      ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum 
      dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single;