import React from 'react'
import '../App.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const Navigate = useNavigate();

    //conds total card item
    const totalCartItems = useSelector(
        (state) => state.basket.items.length
    )
    return (
        <header>
            {/* <!-- logo --> */}
            <div className="headerData">
                <img src={require('../Images/logoAmazon.png')} alt="" />
            </div>
            {/* <!-- location --> */}
            <div className="headerData toHide">
                <LocationOnIcon style={{ color: 'white', fontSize: '30px', marginRight: '7px' }} />
                {/* <i className="fa fa-map-marker"
                    style={{ color: 'white', fontSize: '20px', marginRight: '7px' }}
                    aria-hidden={true}
                >
                </i> */}

                <div className="headerText">
                    <p>Deliver to Gyanavi</p>
                    <h3>Nagpur</h3>
                </div>
            </div>

            {/* <!-- search bar --> */}
            <div className="searchBar">
                <input type="text" placeholder="search Amazon.in" />
                <SearchIcon
                    style={{
                        color: 'black',
                        fontSize: '23px',
                        marginLeft: '5px',
                        padding: '10px',
                        backgroundColor: 'orange',
                    }} />

                {/* <i className="fa fa-search"
                   ></i> */}
            </div >

            {/* <!-- account --> */}
            < div className="headerData toHide" >

                <div className="headerText">
                    <p>Hello Gyanavi</p>
                    <h3>Account & List</h3>
                </div>
                <ArrowDropDownIcon style={{
                    color: 'white', fontSize: '33px'
                }} />
                {/* <i className="fa fa-caret-down"
                    aria-hidden={true}
                    style={{
                        color: 'white',
                    }} ></i > */}
            </div >

            {/* <!-- return and order --> */}
            {/* <!-- anchor tag page ko redirect krne ke liye use hota hai --> */}
            <a href="./Signin.html">
                <div className="headerData toHide">
                    <div className="headerText">
                        {/* <p>Returns</p>  */}
                        <h3>Logout</h3>
                    </div>
                </div>
            </a>
            {/* <!-- cart --> */}
            <div className="headerData toHide">
                <ShoppingCartIcon style={{ color: 'white', fontSize: '30px' }} onClick={() => Navigate('/checkOutPage')} />


                <h1>{totalCartItems}</h1>
                {/* <i className="fa fa-shopping-cart" aria-hidden={true}></i> */}
            </div>
            {/* icon ka size bdhane ke liye font size ka use hota hai */}

        </header >
    )
}

export default Header