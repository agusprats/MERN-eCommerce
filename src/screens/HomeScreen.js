import React, { Component } from 'react'
import Cart from '../components/Cart'
import Filter from '../components/Filter'
import Products from '../components/Products'

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
            <div className="content">
            <div className="main">
                <Filter></Filter>
                <Products></Products>
            </div>
            <div className="sidebar">
                <Cart/>
            </div>
            </div>
            </div>
        )
    }
}
