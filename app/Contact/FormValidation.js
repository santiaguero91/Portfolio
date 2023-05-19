
function validate (inputData) {
    let errors = {}
    if(!inputData.name){
        errors.name = "Name required"
    } else if (!inputData.phone){
        errors.phone = "Phone required"
    } else if (inputData.email > 5 || inputData.difficulty < 1){
        errors.email = "Email required"
    } else if (!inputData.text  ){
        errors.text = "Text required"
    } 
    return errors
}

export default validate;