import React, { useEffect, useState } from 'react'
import './header.css'
import Logo from '../../assets/logo__large_plus.png'
import Logo2 from '../../assets/dcos.webp'
import { GrLocation } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { TbBell } from 'react-icons/tb'
import { BsCart2 } from 'react-icons/bs'
import mockLista from './mockupLista'
import mockListaUsuario from './mockupListaUsuario'
import { meliApi } from '../../api/meliApi'

export const Header = () => {

    const [resultados, setResultados] = useState({})
    console.log(resultados);
    const producto = async (input) => {
        const {data} = await meliApi.get(`search?q=${input}`)
        console.log(data.results[30].title);
        setResultados(data)
    }

    useEffect(() => {
        producto("moto")
    }, [])
    

  return (
    <>
    <div className='eruno'>
        <div>
            <img src={Logo} alt="logomeli" className='logo__meli'/>
            
            <div className='ubicacion'>
                <GrLocation className='ubicacion__icono'/>
                <div>
                    <div>Enviar a Eric</div>
                    <div>Alvear 329</div>
                </div>
            </div>
        </div>
        <div className='menumedio'>
            <div className='luddax'>
                <form action="" className='searchbar'>
                    <input type="text" placeholder='Buscar productos, marcas y más...' className='searchbar__input'/>
                
                    <button className='botonblanco'><BsSearch className='lupita'/></button>
                </form>
                
            </div>
            <div>
                {/* <ul className='lista__categorias'>
                    {["Categorías" , "Ofertas", "Historial", "Supermercado", "Moda", "Vender", "Ayuda"].map(categoria => (<li key={categoria}><a href="">{categoria}</a></li>))}
                </ul> */}
                <ul className='lista__categorias'>
                    {mockLista.map((lista) => 
                        <li key={lista.id}>{lista.nombreCategoria}</li>
                    )}
                </ul>
            </div>
        </div>
        <div className='menuderecha'>
            <div className='menuderecha__imagen'>
                <img src={Logo2} alt="disneyplus y meli lvl 6"/>
            </div>
            <div>
                {/* <ul className='list__usuario'>
                    {[<BiUserCircle className='juanfre'/>,"Eric Fer..." , "Mis compras", "Favoritos",  <TbBell/>, <BsCart2/>].map((categoria,i) => (<li key={i}><a href="">{categoria}</a></li>))}
                </ul> */}
                <ul className='list__usuario'>
                    <li><BiUserCircle className='juanfre'/></li>
                    {mockListaUsuario.map((listaUsuario) => 
                        <li key={listaUsuario.id}>{listaUsuario.nombreCategoriaUsuario}</li>
                    )}
                    <li><TbBell/></li>
                    <li><BsCart2/></li>
                </ul>
            </div>
        </div>
    </div>
    <div>
        {}
    </div>
    </>
  )
}
