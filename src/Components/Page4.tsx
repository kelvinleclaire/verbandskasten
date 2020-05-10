import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page4 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(3)}>btn</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        </h1>
        );

}

}