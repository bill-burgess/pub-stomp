function isEmailInvalid(email){
  const arr = email.split('@');
  if(arr.length === 2 && arr[1] !== ('')){
    const arr2 = arr[1].split('.')
    if (arr2.length > 1 && arr2[1].length){
      return false
    }
  }
  return true
}

module.exports = function({ email, password, passwordConfirm, location }, cb){
  if(isEmailInvalid(email)){
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Not a valid email address'}})
    return
  }
  if(password.length < 8){
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Password must be at least 8 characters'}})
    return
  }
  if(password !== confirmPassword){
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Passwords do not match'}})
    return
  }
  if (!location) {
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Please select a home region'}})
  }
  cb({valid: true})
}
