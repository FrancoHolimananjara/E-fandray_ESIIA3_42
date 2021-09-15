import React,{FC} from 'react'
import './Header.css'
interface Props {
    title:string,
    author:string
}

export default function Header({title,author}: Props){
    return (
        <div className="head">
            <p className="title">{title}</p>
            <p>Direct By</p>
            <p className="authot">{author}</p>
        </div>
    )
}
