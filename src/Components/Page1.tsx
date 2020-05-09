import React from "react";
import PageProps from "./PageProps";


export class Page1 extends React.Component<PageProps> {
    render(): React.ReactElement {
        return <h1>  Hello, {this.props.name} <button onClick ={this.setCurrentPage.bind(this)}>Knopp</button></h1>;
}
public setCurrentPage(): void {
   this.props.setCurrentPage(2);
  }

}