import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebarsection'>
      <div className="upperbody">
        <div className="upperbody1">
          <img src="/src/assets/chatgpt.svg" alt="gptlogo" className="chatgptlogo" />
          <span className="appname">ChatGPT</span>
          </div>
          <div className="btn">
          <button className="newchat">
            <img src="/src/assets/add-30.png" alt="" className="add" />
            New Chat
          </button>
          </div>
        <div className="upperbody2">
           <button className="query1"><img src="/src/assets/message.svg" alt="" />What is an Api ?</button>
           <button className="query2"><img src="/src/assets/message.svg" alt="" />How to learn Programming ?</button>
        </div>
      </div>
      <div className="lowerbody">
         <div className="home">
          <img src="/src/assets/home.svg" alt="" />
          Home
         </div>
         <div className="saved">
          <img src="/src/assets/bookmark.svg" alt="" />
          Saved
         </div>
         <div className="upgrade">
          <img src="/src/assets/rocket.svg" alt="" />
          Upgrade to Pro
         </div>
      </div>

    </div>
  )
}

export default Sidebar
