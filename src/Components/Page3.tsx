import React from "react";
import PageProps from "./PageProps";
import {BasePage} from "./BasePage";


export class Page3 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
  }
    render(): React.ReactElement {
        return(
        <h1>  Hello, {this.props.name}
        <button onClick ={()=>this.setCurrentPage(4)}>btn1</button>
        <button onClick ={()=>this.goBack()}>Zurück</button>

        {/*Schieberegler von 1 bis >50 und dann <5 zu Fenster4​ <20 zu Fenster 5​ >20 zu Fenster 12 */}
        </h1>
        );

}


}