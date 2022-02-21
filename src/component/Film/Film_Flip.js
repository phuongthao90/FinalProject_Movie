import React from 'react'
import './Film_Flip.css'

import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'

export default function Film_Flip(props) {
    const { item } = props
    return (
        <div className='mt-3'>
            <div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', background: `url(${item.hinhAnh})` }} >
                                <img className='opacity-0' src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                            </div>
                        </div>

                        <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0 }} >
                                <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                            </div>
                            <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                                    <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <NavLink to={`/detail/${item.maPhim}`} >
                         <div className=" text-center cursor-pointer py-2 bg-green-400 mt-1 text-success-50 font-bold">Đặt Vé
                    </div>
                    </NavLink> */}

                    <div onClick={() => {
                        history.push(`detail/${item.maPhim}`)
                    }} className='className=" text-center cursor-pointer py-2 bg-green-400 mt-1 text-success-50 font-bold"'>
                        Đặt Vé
                    </div>
                </div>
            </div>

        </div>
    )
}








