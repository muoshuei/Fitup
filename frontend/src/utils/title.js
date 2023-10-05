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
    "/train": "Training"


}
export const getTitleFromRoute = (path) => {
    if (titleMap[path]){
        return (`${titleMap[path]} | FitUp`);
    }
    const actionRegex = /^\/action\/(\w+)$/;
    const detailRegex = /^\/action\/(\w+)\/(\d+)$/;
    const programRegex = /^\/program\/(\w+)$/

    if(programRegex.test(path))
        return "New Program | FitUp" 
    else if(detailRegex.test(path))
        return "Details | FitUp";
    else if(actionRegex.test(path))
        return "Actions | FitUp"
    return ("FitUp")

    
}