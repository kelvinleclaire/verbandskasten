type PageProps = {
    name: string,
    setCurrentPage : (openPage:number)=>void,
    goBack : ()=>void,
};
export default PageProps;