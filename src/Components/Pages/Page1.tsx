import React from "react";
import PageProps from "../PageProps";
import { BasePage } from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import PersonType from "../PersonType";



export class Page1 extends BasePage {
    render(): React.ReactElement {
            return <Layout className="startPage">
                        <div style={styles.gridContainer}>
                        <div></div>
                        <div>
                            <h1 style={styles.textStyleH1}>  Sie wollen abgelaufenes Verbandsmaterial spenden? </h1>
                        </div>
                        <div>
                            <button style={styles.buttonStyle} onClick ={()=>this.setCurrentPage(2, PersonType.Unknown)}>Los geht's!</button>
                        </div>
                        </div>
                    </Layout>;
}
}