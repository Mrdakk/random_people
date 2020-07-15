import React, { Component } from "react";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { UserCard } from "../components/UserCard"
import { UserList } from "../components/UserList"
import { SearchBar } from "../components/SearchBar"
import { Loading } from "../components/Loading"

import { fetchUsers } from "../../services/userService";

export class HomePage extends Component {
    constructor() {
        super()

        const gridViewLS = JSON.parse(localStorage.getItem("gridView"))

        this.state = {
            users: [],
            gridView: gridViewLS,
            inputValue: "",
            isLoading: true
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(users => this.setState({
                isLoading: false,
                users
            }))
    }

    onLoad = () => {
        fetchUsers()
            .then(users => this.setState({
                users
            }))

    }

    viewChange = () => {
        const gridView = !this.state.gridView
        localStorage.setItem("gridView", gridView)

        this.setState({ gridView })
    }

    inputSearch = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        const { users, inputValue, isLoading } = this.state
        console.log(this.state.isLoading);

        const filteredPeople = users.filter((user) => {
            return user.fullName().toLowerCase().includes(inputValue.toLowerCase())
        })

        const view = (
            <>
                <SearchBar value={this.inputSearch} />
                {this.state.gridView ? <UserList data={users} filter={filteredPeople} /> : <UserCard data={users} filter={filteredPeople} />}
            </>
        )
        return (
            <>
                <Header gridView={this.state.gridView} viewChange={this.viewChange} onLoad={this.onLoad} />
                {isLoading ? <Loading /> : view}
                <Footer />
            </>)

    }
}

