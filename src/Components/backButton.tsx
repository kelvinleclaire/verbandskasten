import React from "react";

type ButtonProps= {
    text: string;
    goToPreviousePage : ()=>void;
};

export class BackButton extends React.Component<ButtonProps> {
    constructor(props:ButtonProps) {
        super(props);
      }
    render(): React.ReactElement {
        return<button onClick ={this.props.goToPreviousePage}>{this.props.text}</button>;
}
}