function getAge(userDate) {
  const todayDate = new Date();
  if (todayDate < userDate) {
    return 0;
  }
  if (todayDate.getMonth() < userDate.getMonth() ||
     todayDate.getMonth() === userDate.getMonth() && todayDate.getDate() < userDate.getDate()) {
    return todayDate.getFullYear() - userDate.getFullYear() - 1;
  } else {
    return todayDate.getFullYear() - userDate.getFullYear();
  }
}

function getWeekDay(userDate) {
  return new Date(userDate).toLocaleString('en-Gb', {
    weekday: 'long'
  })
}

function getAmountDaysToNewYear() {
  const today = new Date();
  const newYearDate = new Date(today.getFullYear() + 1, 0, 1);
  const millisecondsInDay = 86400000;
  return Math.floor((newYearDate - today) / millisecondsInDay);
}

function getProgrammersDay(year) {
  if (typeof year === 'number' && year >= 0) {
    const bitsIn8Bytes = 256;
    const charactersToShow = 3;
    const programmersDay = new Date(parseInt(year), 0, 1);
    programmersDay.setDate(programmersDay.getDate() + bitsIn8Bytes - 1);
    return `${programmersDay.getDate()} ${programmersDay.toLocaleString('en-Gb', {
      month: 'short'
    }).slice(0, charactersToShow)}, ${programmersDay.getFullYear()} (${getWeekDay(programmersDay)})`;
  }
  return null;
}

function howFarIs(userDayOfWeek) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const regex = new RegExp(`^${userDayOfWeek.trim()}$`, 'i');
  const dayIndexInArray = daysOfWeek.findIndex((day) => regex.test(day));
  
  if (dayIndexInArray >= 0) {
    const today = new Date();
    if (dayIndexInArray + 1 > today.getDay()) {
      return `It's ${dayIndexInArray + 1 - today.getDay()} day(s) left till ${daysOfWeek[dayIndexInArray]}.`
    } else if (dayIndexInArray + 1 === today.getDay()) {
      return `Hey, today is ${daysOfWeek[dayIndexInArray]} =)`
    } else {
      return `It's ${daysOfWeek.length - today.getDay()
      + dayIndexInArray + 1} day(s) left till ${daysOfWeek[dayIndexInArray]}.`
    }
  }
  return null;
}

function isValidIdentifier(variableName) {
  if (typeof variableName === 'string') {
    return /^[a-z$_][\w$]*$/gi.test(variableName);
  }
  return null;
}

function capitalize(userString) {
  if (typeof userString === 'string') {
    return userString.replace(/\b([a-z])/g, (char) => char.toUpperCase());
  }
  return null;
}

function isValidAudioFile(audioFileName) {
  return /^[a-z]+\.(flac|mp3|alac|aac)$/i.test(audioFileName.trim());
}

function getHexadecimalColors(userString) {
  if (typeof userString === 'string') {
    const allHexColors = userString.match(/#([\da-f]{3}(?![\da-f]))|([\da-f]{6}(?![\da-f]))/gi);
    if (allHexColors !== null) {
      return allHexColors;
    }
    return [];
  }
  return null;
}

function isValidPassword(userPassword) {
  if (typeof userPassword === 'string') {
    const hasAtLeastOneLowerCaseChar = /[a-z]/;
    const hasAtLeastOneUpperCaseChar = /[A-Z]/;
    const hasAtLeastOneDigit = /\d/;
    const hasAtLeast8Characters = /.{8,}/;
    
    return hasAtLeastOneLowerCaseChar.test(userPassword)
    && hasAtLeastOneUpperCaseChar.test(userPassword)
    && hasAtLeastOneDigit.test(userPassword)
    && hasAtLeast8Characters.test(userPassword);
  }
  return null;
}

function addThousandsSeparators(number) {
  if (typeof number === 'number' || typeof number === 'string' && parseInt(number)) {
    let modifiedNumber = number.toString();
    let fractionalPart, wholePart;
    if (modifiedNumber.indexOf('.') >= 0) {
      fractionalPart = modifiedNumber.slice(modifiedNumber.indexOf('.'));
      wholePart = modifiedNumber.slice(0, modifiedNumber.indexOf('.'))
    } else {
      fractionalPart = '';
      wholePart = modifiedNumber;
    }
    return wholePart.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,') + fractionalPart;
  }
  return null;
}

function getAllUrlsFromText(userString) {
  if (typeof userString === 'string') {
    const urlArray = userString.match(/\b((https?:\/\/)|(www\.)).+?((?=\s|$)|(?=https?:\/\/.+?)|(?=www\..+?))/gi);
    if (urlArray) {
      return urlArray;
    }
  }
  return [];
}