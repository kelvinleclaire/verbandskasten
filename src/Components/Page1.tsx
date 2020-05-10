import React from "react";
import PageProps from "./PageProps";
import { BasePage } from "./BasePage";


export class Page1 extends BasePage {
    render(): React.ReactElement {
        return <h1>  Hello, {this.props.name} <button onClick ={()=>this.setCurrentPage(2)}>btn1</button></h1>;
}
}