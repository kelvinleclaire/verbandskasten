import React from "react";
import PageProps from "./PageProps";
import PersonType from "./PersonType";


export class BasePage extends React.Component<PageProps> {
  constructor (props: PageProps) {
    super(props);
    this.setCurrentPage.bind(this);
    this.goBack.bind(this);
  }
  render(): React.ReactElement {
    return (<></>);

  }
  public setCurrentPage(pageNumber: number, personType: PersonType, frequency: String): void {
    this.props.setCurrentPage(pageNumber, personType, frequency);
  }

  public goBack(): void {
    this.props.goBack();
  }

}
