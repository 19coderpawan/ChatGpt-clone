import React from 'react'

const Mainbody = () => {
  return (
    <div className='mainbody'>
      <div className="chats">
        <div className="chatsection">
          <img src="/src/assets/user-icon.png" alt="" className="userlogo" />
          <p className='userchat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vel labore quasi, corrupti officia dignissimos, magnam ullam, in assumenda incidunt suscipit! Tempora laborum quae odio temporibus voluptate, modi, sed ipsum unde debitis ullam tempore minima. Architecto accusantium dolore obcaecati animi nam provident libero rerum. Sequi consectetur nisi fugit laboriosam aspernatur repellat eos delectus soluta at illum, rerum voluptates accusantium ipsam debitis ducimus nihil laudantium consequatur atque pariatur. Aperiam est aliquam quas, accusantium animi blanditiis facere iusto doloribus magni nihil voluptas sit unde laborum quae. Debitis exercitationem numquam nihil excepturi totam, pariatur quae! Iste velit aperiam architecto quae laudantium earum et!</p>
        </div>
        <div className="chatsection">
          <img src="/src/assets/chatgptLogo.svg" alt="" className="chatlogo" />
          <p className='gptchat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic iusto doloremque sint quae inventore. Impedit delectus expedita voluptatum officiis. Eius repellat excepturi deleniti ratione.</p>
        </div>
      </div>
      <div className="footersection">
        <div className="chatquery">
          <input type="text" className="inputfield" placeholder='Message ChatGPT..........' />
          <button className="sendbtn">
            <img src="/src/assets/send.svg" alt="" className="sendimg" />
          </button>
        </div>
        <div className="footerpara">
          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  )
}

export default Mainbody
