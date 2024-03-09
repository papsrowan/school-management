import React, { ReactNode } from 'react'
import './style.scss'

const TotalStat = ({icon, text, nombre}:{icon:ReactNode, text:string, nombre: string}) => {
        return (
            <div className='TotalStatContainer'>
            <div>
                {icon}
            </div>
            <div>
              <div>{nombre}</div>
              <div>{text}</div>
            </div>
            </div>
          )
}

export default TotalStat
