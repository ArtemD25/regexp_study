###### N.B.: all functions are drafted as if all input data are always valid

### getAge
The function accepts a person's date of birth as an input and returns the person's exact age

### getWeekDay
The function accepts a date/timestamp and returns a textual representation of the corresponding weekday (i.e. 'Monday', 'Tuesday', etc.)

### getAmountDaysToNewYear
The function returns the number of days to the New Year

### getProgrammersDay
The function accepts a year as a number and returns the date of Programmer’s Day in the year specified. The return value is a string in the following format: ‘DD Mon, YYYY (weekday)’. The function reuses the function from the task 2

### howFarIs
The function accepts a weekday as a string (e.g. ‘Sunday’) and returns the number of days to the next specified weekday. The input should be case-insensitive. If the specified weekday is today, it returns `Hey, today is ${ specifiedWeekday } =)`, otherwise returns `It's ${ number } day(s) left till ${ specifiedWeekday }`

### isValidIdentifier
The function accepts a string as an input and returns a boolean that defines if the input is a valid JavaScript variable. The function uses a regular expression to validate the input. Here is the syntax for valid identifiers:
- each identifier must have at least one character
- valid identifier characters are the following: alpha, digit, underscore, or dollar sign
- the first character cannot be a digit

### capitalize
The function accepts a string as an input, capitalizes the first letters of each word and returns the capitalized string

### isValidAudioFile
The function accepts a string as an input and returns a boolean that defines if the input is a valid audio file. The file is valid if it satisfies the conditions:
- file name consists of 1+ uppercase and /or lowercase letter(s)
- valid extensions: .mp3, .flac, .alac, or .aac

### getHexadecimalColors
The function accepts a string as an input and returns an array of all valid hexadecimal colors extracted from the string (or an empty array if it does not contain any). The function uses a regular expression that matches colors in either #abc or #abcdef format

### isValidPassword
The function validates password and accepts a string as an input and returns either true (valid) or false (invalid). The password is considered to be valid if it satisfies all of the following requirements:
- there is at least 1 uppercase letter.
- there is at least 1 lowercase letter.
- there is at least 1 number.
- needs to be at least 8 characters long.

### addThousandsSeparators
The function accepts a number or a string that can be easily converted to a number, inserts commas between the numbers as thousands separators and returns the formatted string

### getAllUrlsFromText
The function accepts a text as argument and returns array of URLs which are in that text. The function uses a regular expression to achieve the desired result.

const text1 = "We use https://translate.google.com/ to translate some words and phrases from
https://angular.io/ ";
const text2 = "JavaScript is the best language for beginners!"

getAllUrlsFromText(text1); // ["https://translate.google.com/", "https://angular.io/"]
getAllUrlsFromText(text2); // []
getAllUrlsFromText(); // (error)
