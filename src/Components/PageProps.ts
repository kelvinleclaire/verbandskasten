import PersonType from "./PersonType";

type PageProps = {
    name: string,
    personType: PersonType,
    setCurrentPage : (openPage:number, personType: PersonType)=>void,
    goBack : ()=>void,
};
export default PageProps;