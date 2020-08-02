import PersonType from "./PersonType";

type PageProps = {
    name: string,
    personType: PersonType,
    frequency: String,
    setCurrentPage : (openPage:number, personType: PersonType, frequency: String)=>void,
    goBack : ()=>void,
};
export default PageProps;