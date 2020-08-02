import React from 'react'
import './Main.css'
import Header from '..//Header/Header'
import Footer from '../Footer/Footer'
import './Main.css'


const Main = (props) => {  
        return (
                <div className="App">
                    <Header />
                        <div className="Main">
                            {props.children}
                        </div>                  
                    <Footer />
                </div>
            
        )
}

export default Main