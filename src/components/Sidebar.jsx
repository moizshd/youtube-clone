import React from 'react'
import { LuThumbsUp } from 'react-icons/lu'
import { MdHistory, MdHomeFilled, MdOutlineSlowMotionVideo, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'

const Sidebar = () => {
    const mainLinks=[
        {
            id:1,
            name:'Home',
            icon:<MdHomeFilled/>
        },
        {
            id:2,
            name:'Subscriptions',
            icon:<MdSubscriptions/>
        },
        {
            id:3,
            name:'Library',
            icon:<MdOutlineVideoLibrary/>
        },
        {
            id:4,
            name:'History',
            icon:<MdHistory/>
        },
        {
            id:5,
            name:'Watch later',
            icon:<MdOutlineWatchLater/>
        },
        {
            id:6,
            name:'Liked videos',
            icon:<LuThumbsUp/>
        },
        {
            id:7,
            name:'Upload',
            icon:<MdOutlineSlowMotionVideo/>
        }
    ]
  return (
    <div className='flex flex-col p-5 h-screen bg-[#212121]' style={{width: '13%'}}>
        <ul>
            {mainLinks.map(link=>(
                <li key={link.id} className='flex items-center gap-4 mb-1 hover:bg-zinc-800 p-2 hover:rounded-2xl'>
                    <div className='text-2xl mr-1'>

                    {link.icon}
                    </div>
                    <span className='font-light text-1xl'>{link.name}</span>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Sidebar