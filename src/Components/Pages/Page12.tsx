import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import { UserForm } from "../UserForm";
import PersonType from "../PersonType";



export class Page12 extends BasePage {
  constructor(props:PageProps) {
    super(props);
  }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div>
                <div style={styles.formHeaderStyle}>
                <h1 style={styles.textStyleH1}>Gerne finden wir eine individuelle Lösung für unsere regelmäßige Zusammenarbeit.
                Setzen Sie sich dafür über das unten stehende Formular mit uns in Verbindung.
                </h1>
                </div>
                <div>
                <UserForm onSubmit = {() => this.setCurrentPage(11, PersonType.Unknown)}personType= {this.props.personType}></UserForm>
                </div>
                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
            </div>
          </Layout>
        );

}

}