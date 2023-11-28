const titleMap = {
    "/": "Welcome",
    "/home": "Home",
    "/signin": "Sign In",
    "/signup": "Sign Up",
    "/info": "Personal Info",
    "/changeinfo": "Personal Info",
    "/action/:part": "Action",
    "/action/:part/:id": "Details",
    "/newprogram": "New Program",
    "/myprogram": "My Program",
    "/train": "Training",
    "/chart": "Statistics",
    "/detail": "Details"
}
export const getTitleFromRoute = (path) => {
    if (titleMap[path]){
        return (`${titleMap[path]} | Fitup`);
    }
    const actionRegex = /^\/action\/(\w+)$/;
    const programRegex = /^\/program\/(\w+)$/

    if(programRegex.test(path))
        return "New Program | Fitup" 
    else if(actionRegex.test(path))
        return "Actions | Fitup"
    return ("Fitup")

    
}