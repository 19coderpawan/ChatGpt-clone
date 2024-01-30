import React from 'react'

const Mainbody = () => {
  return (
    <div className='mainbody'>
      <div className="chats">
        <div className="chatsection">
          <img src="/src/assets/user-icon.png" alt="" className="userlogo" />
          <p className='userchat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vel labore quasi, corrupti officia dignissimos, magnam ullam, in assumenda incidunt suscipit! Tempora laborum quae odio temporibus voluptate, modi, sed ipsum unde debitis ullam tempore minima. Architecto accusantium dolore obcaecati animi nam provident libero rerum. Sequi consectetur nisi fugit laboriosam aspernatur repellat eos delectus soluta at illum, rerum voluptates accusantium ipsam debitis ducimus nihil laudantium consequatur atque pariatur. Aperiam est aliquam quas, accusantium animi blanditiis facere iusto doloribus magni nihil voluptas sit unde laborum quae. Debitis exercitationem numquam nihil excepturi totam, pariatur quae! Iste velit aperiam architecto quae laudantium earum et!</p>
        </div>
        <div className="chatsection botsection">
          <img src="/src/assets/chatgpt.svg" alt="" className="chatlogo" />
          <p className='gptchat'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatem illo id quo tenetur iste reiciendis magni nihil saepe mollitia. Odio laborum optio recusandae perspiciatis veniam! Molestias, consequuntur! Dolores eos doloremque officiis earum repellat corporis facere quod laborum quos accusamus iusto, nemo, dolore veritatis officia beatae pariatur aspernatur nisi rem consequuntur omnis ratione veniam quo consectetur. Magni ipsa consequatur minus optio nam facilis harum quidem nulla quas, cumque velit dolor, facere ab, ut consequuntur id eligendi atque magnam sint laudantium sed ducimus repellat! Repellendus, libero inventore magni perspiciatis iusto labore debitis voluptas veritatis odit neque delectus, dolores quo molestiae quam.</p>
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
