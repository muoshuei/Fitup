const titleMap = {
    "/": "Welcome",
    "/home": "Home",
    "/signin": "Sign In",
    "/signup": "Sign Up",
    "/info": "Personal Info",
    "/changeinfo": "Personal Info",
    "/action/:part": "Action",
    "/action/:part/:id": "Details",
    "/program/new": "New Program",
    "/program/mine": "My Program",
    "/train": "Training",
    "/chart": "Statistics"

}
export const getTitleFromRoute = (path) => {
    if (titleMap[path]){
        return (`${titleMap[path]} | Fitup`);
    }
    const actionRegex = /^\/action\/(\w+)$/;
    const detailRegex = /^\/action\/(\w+)\/(\d+)$/;
    const programRegex = /^\/program\/(\w+)$/

    if(programRegex.test(path))
        return "New Program | Fitup" 
    else if(detailRegex.test(path))
        return "Details | Fitup";
    else if(actionRegex.test(path))
        return "Actions | Fitup"
    return ("Fitup")

    
}