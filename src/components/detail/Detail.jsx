import React from 'react'
import "./detail.css"
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Peeyush Das</h2>
        <p>Lorem ipsum dolor, sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://imgs.search.brave.com/YtfEbVefQa3kDJRCoshn5AF3y1u7u1nimPDRSfwIwqo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy56/ZXJvY2hhbi5uZXQv/MjQwLzIwLzI2LzMy/NzM4MjAuanBn" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://imgs.search.brave.com/YtfEbVefQa3kDJRCoshn5AF3y1u7u1nimPDRSfwIwqo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy56/ZXJvY2hhbi5uZXQv/MjQwLzIwLzI2LzMy/NzM4MjAuanBn" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>


          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://imgs.search.brave.com/YtfEbVefQa3kDJRCoshn5AF3y1u7u1nimPDRSfwIwqo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy56/ZXJvY2hhbi5uZXQv/MjQwLzIwLzI2LzMy/NzM4MjAuanBn" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://imgs.search.brave.com/YtfEbVefQa3kDJRCoshn5AF3y1u7u1nimPDRSfwIwqo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy56/ZXJvY2hhbi5uZXQv/MjQwLzIwLzI2LzMy/NzM4MjAuanBn" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </div>



        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=> auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail

//1:00:00