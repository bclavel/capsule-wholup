export default function(userData = {}, action) {

  console.log('reducer action >>', action);

  if(action.type == 'setUserData') {

    var userCopy = {
      ...userData,
      firstName : action.firstName,
      lastName : action.lastName,
      email : action.email,
      token : action.token,
    };

      return userCopy;
  } else {
      return userData;
  }
}
