import * as React from "react";
import * as styles from "./css/PageStyle";

type LayoutProps ={
    className:string
}

export class Layout extends React.Component<LayoutProps> {
    public render(): React.ReactElement {
        return (
            <div>
                <div className={this.props.className}></div>
                {this.props.children}
            </div>
        );
    }
}
