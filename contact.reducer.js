export default function(contactList = [], action) {
  var isContactExist = false;
  for (var i = 0; i < contactList.length; i++) {
    if (action.email == contactList[i].email) {
      isContactExist = true
    }
  }

  var randomColor
  var randomNumber = Math.random()
  if (randomNumber < 0.25 ) {
    randomColor = '#e67e22'
  } else if (randomNumber < 0.5 ) {
    randomColor = '#3498db'
  } else if (randomNumber < 0.75 ) {
    randomColor = '#16a085'
  } else {
    randomColor = '#e74c3c'
  }

  if(action.type === 'addcontact' && !isContactExist) {

    var contact = {
      firstName : action.firstName,
      lastName : action.lastName,
      email : action.email,
      companyName : action.companyName,
      color: randomColor
    }
    var contactListCopy = [...contactList];
    contactListCopy.push(contact)
      return contactListCopy;
  } else {
      return contactList;
  }
}
