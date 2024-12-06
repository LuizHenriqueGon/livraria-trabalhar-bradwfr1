import React, { useEffect } from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import Login from "../Cadastro/Login"


const Search = ({ CartItem }) => {
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
        <Link to='/'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>
        </Link>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Pesquise e pressione Enter...' />
            <span>Pesquisa</span>
          </div>

          <div className='icon f_flex width'>
            <div className='Login'>
                <Link to='/Login'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>
              </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
