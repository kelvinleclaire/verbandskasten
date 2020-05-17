import * as React from "react";
import * as styles from "./css/PageStyle";

export class Layout extends React.Component {
    public render(): React.ReactElement {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
