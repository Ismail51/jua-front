import React from "react";
import NavBar from './navbar'
import '../App.css'


function VoirPlus() {
  return(
    <div>
      <NavBar></NavBar>
      <div>
        <div className="offer-top">
          <img src="" alt="" />
          <div className="right-info">
            <p>name</p>
            <p>location</p>
            <p>date inscription</p>
          </div>
        </div>
        <div className="offer-bottom">
          <div className="offer-description">
            <h3>description</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus at debitis accusamus, laboriosam consequuntur reiciendis distinctio veritatis cupiditate id quasi?</p>
          </div>
          <div className="offer-btn">
            <button>return</button>
            <button>accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoirPlus