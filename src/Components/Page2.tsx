import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";

export class Page2 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(3)}>btn1</button>
        <button onClick ={()=>this.setCurrentPage(6)}>btn2</button>
        <button onClick ={()=>this.setCurrentPage(7)}>btn1</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>
        </h1>
        );

}

}
