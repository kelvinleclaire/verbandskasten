import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page5 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(3)}>zurück</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

{/* Paypal link und so muss hier hin.*/}
        </h1>
        );

}

}