import React, { Component } from "react";
import Banner, { Component } from "../components/Banner/Banner";
import Nav, { Components } from "../components/Nav/Nav";
import Search, { Components } from "../components/Search/Search";
import Results, { Components } from "../components/Results/Results";
import { Col, Row, Container } from "../components/Grid";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }
