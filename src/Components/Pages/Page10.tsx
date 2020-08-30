import React from "react";
import PageProps from "../PageProps";
import {BasePage} from "../BasePage";
import {Layout} from "../Layout";
import * as styles from "../css/PageStyle";
import { UserForm } from "../UserForm";
import PersonType from "../PersonType";


export class Page10 extends BasePage {
  constructor(props:PageProps) {
    super(props);
    }
    render(): React.ReactElement {
        return(
          <Layout className="regularPage">
            <div>
                <div style={styles.formHeaderStyle}>
                <h1 style={styles.textStyleH1}>Wir freuen uns sehr, dass Sie Ihren Kunden und/oder Mitarbeitern das Spenden 
abgelaufener Verbandsmaterialien ermöglichen möchten.
Setzen Sie sich dazu bitte über das unten stehende Formular mit uns in Verbindung.
                </h1>
                </div>
                <div>
                <UserForm onSubmit = {() =>  window.open('https://verbandskasten-spenden.de/danke',"_self")}personType= {this.props.personType} frequency={this.props.frequency}></UserForm>
                </div>
                <div>
                <button style={styles.backButtonStyle} onClick ={()=>this.goBack()}>Zurück</button>
              </div>
            </div>
          </Layout>
        );

}
}