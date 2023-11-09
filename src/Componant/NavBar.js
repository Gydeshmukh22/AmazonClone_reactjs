import React, { useState } from 'react'
import '../App.css'

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function NavBar() {
    const [showNHide, setShowNHide] = useState("none");
    const handleOpenSidebar = () => {
        //  setShowNHide("show")
        setShowNHide("block");
    };

    const handleCloseSidebar = () => {
        // setShowNHide("hide")
        setShowNHide("none");
    };

    return (
        <>
            {/* <!-- sidebar --> */}
            <div
                className="sidebar"
                id="sidebar"
                // style={{display: showNHide === "show" ? "block" : "none"}}
                style={{ display: `${showNHide}` }}
            >
                <div className="sidebar_top">
                    <AccountCircleIcon />
                    Hello, sign in
                    <p onClick={handleCloseSidebar}>
                        <CloseIcon style={{ paddingRight: "20px" }} />
                    </p>
                </div>
                <div id="main-container">
                    <div className="sidenavContentHeader">Trending</div>
                    <a href="a">
                        <div className="sidenavContent">Best Sellers</div>
                    </a>
                    <a href="a">
                        <div className="sidenavContent">New Releases</div>
                    </a>
                    <a href="a">
                        <div className="sidenavContent">Movers and Shakers</div>
                    </a>
                    <hr />
                    <div className="sidenavContentHeader">Digital Content And Devices</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon miniTV-FREE entertainment</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Echo & Alexa</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Fire TV</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Kindle E-Readers & eBooks</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Audible Audiobooks</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon Prime Video</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Amazon Prime Music</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <hr />
                    <div className="sidenavContentHeader">Shop By Category</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Mobiles, Computers</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>TV, Appliances, Electronics</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Men's Fashion</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Women's Fashion</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <hr />

                    <a href="a">
                        <div className="sideRow">
                            <div>Gift Cards & Mobile Recharges</div>
                            <ChevronRightIcon />
                        </div>
                    </a>
                    <a href="a">
                        <div className="sidenavContentHeader">Programs & Features</div>
                        <div className="sideRow">
                            <div>Amazon Launchpad</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Flight Tickets</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Clearance store</div>
                        </div>
                    </a>
                    <hr />
                    <div className="sidenavContentHeader">Help & Settings</div>
                    <a href="a">
                        <div className="sideRow">
                            <div>Your Account</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">
                            <div>Customer Service</div>
                        </div>
                    </a>
                    <a href="a">
                        <div className="sideRow">Sign in</div>
                    </a>
                </div>
            </div>
            <nav>
                <div
                    onClick={handleOpenSidebar}
                    className="navAll"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <MenuIcon style={{ color: "white" }} />
                    <p style={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
                        All
                    </p>
                </div>

                <p>Mobile</p>
                <p>Amazone Pay</p>
                <p>Beauty & Personal Care</p>
                <p>Amazone MiniTV</p>
                <p>Sell</p>
            </nav>
        </>
    )
}

export default NavBar