import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebarsection'>
      <div className="upperbody">
        <div className="upperbody1">
          <img src="/src/assets/chatgpt.svg" alt="gptlogo" className="chatgptlogo" />
          <span className="appname">ChatGPT</span>
          </div>
          <button className="newchat">
            <img src="" alt="" className="add" />
            New Chat
          </button>
        <div className="upperbody2">
           <button className="query1"><img src="" alt="" />What is an Api ?</button>
           <button className="query2"><img src="" alt="" />How to learn Programming ?</button>
        </div>
      </div>
      <div className="lowerbody">

      </div>

    </div>
  )
}

export default Sidebar
