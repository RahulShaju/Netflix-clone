export const checkFormValidation = (email,password) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if(!isEmailvalid)  return "Email is not valid"
   if(!isPassword) return "password is not correct"
   return null
}