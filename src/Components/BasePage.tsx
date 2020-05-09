import React from "react";
import PageProps from "./PageProps";
import { BackButton } from "./backButton";

export class BasePage extends React.Component<PageProps> {
  constructor(props:PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
    this.goBack.bind(this);
  }
    render(): React.ReactElement {
        return(<></>);

}
public setCurrentPage(pageNumber:number): void {
   this.props.setCurrentPage(pageNumber);
  }

public goBack(): void {
  this.props.goBack();
}

}
