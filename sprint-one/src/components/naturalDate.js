/**
 * If the input is older than 10 days ago, the function returns the time difference between input and the current time in a natural way (some minutes/days ago, yesterday, etc.), otherwise it returns the date of the input (if it's in the same year, it ommits the year).
 * @param {integer} date a timestamp
 */
function naturalDate(inputDate) {
  //Difference between two dates in minutes
  let diff = (Date.now() - inputDate) / (60 * 1000);
  let date = new Date(inputDate);

  return diff < 1
    ? "Seconds ago"
    : Math.round(diff) < 2
    ? "A minute ago"
    : Math.round(diff) < 60
    ? `${Math.round(diff)} minutes ago`
    : Math.round(diff / 60) < 2
    ? "An hour ago"
    : Math.round(diff / 60) < 24
    ? `${Math.round(diff / 60)} hours ago`
    : Math.round(diff / 24 / 60) < 2
    ? "Yesterday"
    : Math.round(diff / 24 / 60) < 11
    ? `${Math.round(diff / 24 / 60)} days ago`
    : date.getFullYear() === new Date().getFullYear()
    ? date.toDateString().slice(4, -4)
    : date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}
export default naturalDate;
