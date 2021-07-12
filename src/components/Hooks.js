import React,{useState,useEffect} from 'react'
import NewForm from './NewForm'
// import uuid from 'react-uuid'
export default function Hooks() {
    const [songs,setSongs]=useState([
        {title:'We dont talk anymore' ,name:'Charlie Puth', id:1},
        {title:'Shape of You',name:'ED sheren',id:2}
    ])
    const addSong=(title)=>{
        setSongs([...songs,{title:title,name:'shakira',id:3}])
    }
    useEffect(()=>{
        console.log(songs)
    })
    return (
        <div>
            {
                songs.map(song=>{
                  return  <li key={song.id}>{song.title}</li>
                })
            }
            <button onClick={addSong}>Click ME</button>
            <NewForm addSong={addSong}/>
        </div>
    )
}
