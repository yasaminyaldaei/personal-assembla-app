import React from "react";
import axios from "axios";
import { ApiRoutes } from "./ApiConfig";
import Board from "./Board";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(ApiRoutes.appTickets)
        .then(response => this.setState({ items: response.data }))
        .finally(() => this.setState({ loading: false }))
    })
  }

  render() {
    const { loading, items } = this.state;
    return (
      loading ? <h1>Loading...</h1> : <Board items={items} />
    )
  }
}

export default App;
