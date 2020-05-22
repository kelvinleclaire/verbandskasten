import React from "react";
import PageProps from "../PageProps";
import { BasePage } from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";



export class Page1 extends BasePage {
    render(): React.ReactElement {
            return <Layout className="startPage">
                <h1 style={styles.textStyleH1}>  Sie wollen abgelaufenes Verbandsmaterial spenden? </h1>
                <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(2)}>Los geht's!</button>
                </Layout>;
}
}