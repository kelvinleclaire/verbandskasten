import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page4 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(3)}>Zurück</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}