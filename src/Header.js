import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsFillBasket3Fill} from "react-icons/bs"
import "./Header.css";
import { useStateValue } from './StateProvider';

function Header() {

  const  [{basket}] = useStateValue()
  return (
      <nav className="header">
          

      <Link to="/">
        <img className="header_logo" src="/image/amazon.jpg" alt="amazon pic" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />

        <FaSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">hello Emeka</span>
            <span className="header_optionLinetwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLinetwo">& orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLinetwo" >Prime</span>
          </div>
        </Link>
          </div>
          <Link to="/checkout" className="header_link">
          
              <div className="header_optionBasket">
                  < BsFillBasket3Fill/>
          <span className="header_basketCount">{ basket?.length}</span>    
          </div>
          
          </Link>

    </nav>
  );
}

export default Header;
