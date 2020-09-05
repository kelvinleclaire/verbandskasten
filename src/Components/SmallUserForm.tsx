import React from "react";
import * as styles from "./css/PageStyle";
import emailjs from "emailjs-com";
import PersonType from "./PersonType";

type FormProps= {
    onSubmit:()=>void;
    personType: PersonType;
    frequency: String;
};

interface IEmailState {
    emailState: string;

}

interface IFormState {
    inProgress: boolean;
    email: string;
    name: string;
    subject: string;
    message: string;
    validate: IEmailState;
    [key: string]: any;
}

export class SmallUserForm extends React.Component<FormProps, IFormState> {
    constructor(props:FormProps) {
        super(props);
        this.state = {
            inProgress: false,
            email: "",
            name: "",
            subject: "",
            message:"",
            validate: {
                emailState: "",
        }
    }
}

handleChange = async (event: React.FormEvent<HTMLInputElement>|React.FormEvent<HTMLTextAreaElement>) => {
    const target:HTMLInputElement = event.target as HTMLInputElement;
    // tslint:disable-next-line: typedef
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
        [name]: value,
    });
}

private validateEmail(event: React.FormEvent<HTMLInputElement>): void {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    const element = event.target as HTMLInputElement;
    if (emailRex.test(element.value)) {
        validate.emailState = "has-success";
    } else {
        validate.emailState = "has-danger";
    }
    this.setState({ validate });
}

// tslint:disable-next-line: typedef
async submitForm(e: React.FormEvent<HTMLFormElement>) {
    var person:String = "";
    switch(this.props.personType)
    {
        case PersonType.Unknown:
            person = "Unknown";
            break;
        case PersonType.PrivatePerson:
            person = "Privatperson";
            break;
        case PersonType.Company:
            person = "Unternehmensvertreter";
            break;
        case PersonType.Club:
            person = "Vereinsvertreter";
            break;
    }

    this.setState({inProgress:true});
    emailjs.send("smtp_server","template_Ssv53Zoa",
    {from_name:this.state.name,message_html:this.state.message,from_subject:this.state.subject,from_email:this.state.email, from_persontype: person, from_frequency:this.props.frequency},
    "user_PL1JrExHf0RZgeS7TcP23")
    .then((response:any):void => {
        console.log("SUCCESS!", response.status, response.text);
        this.setState({inProgress: false});
        this.props.onSubmit();
     }, function(error:any):void {
        console.log("FAILED...", error);
        alert(error);
     });
    e.preventDefault();
}


    render(): React.ReactElement {
        return(
            <form onSubmit={e => this.submitForm(e)}>
            <table style={styles.tableStyle}>
                <tr>
                    <td>
                        <input
                            style={styles.inputStyle}
                            type="string"
                            id="name"
                            name="name"
                            required
                            placeholder="Name (*)"
                            aria-aria-required="true"
                            onChange={e => {
                                this.handleChange(e);
                            }}
                            ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            style={styles.inputStyle}
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="E-Mail (*)"
                            onChange={e => {
                                this.validateEmail(e);
                                this.handleChange(e);
                            }}></input>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <input 
                            style={styles.checkboxStyle} 
                            type="checkbox" 
                            id="checkbox" 
                            value="Ich stimme der Speicherung der Daten zur Verarbeitung im Sinne der DSGVO zu."
                            required
                            ></input>
                        <span>Ich stimme der Speicherung der Daten zur Verarbeitung im Sinne der DSGVO zu.</span>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <button
                            style={styles.submitButtonStyle}
                            type="submit"
                            id="submit"
                            /*onClick={() => this.setCurrentPage(11)}*/>Abschicken</button>
                    </td>
                </tr>
            </table>
            </form>
        )
    }
}