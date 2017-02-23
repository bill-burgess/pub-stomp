module.exports = (matches, filters) => {
  const { sports, date } = filters
  let filteredMatches = matches.filter(match => {
    return sports[match.sport]
  })
  if(!(date[0] && date[1])) filteredMatches
  const dateFirst = Math.min(new Date(date[0]).getTime(), new Date(date[1]).getTime())
  const dateSecond = Math.max(new Date(date[0]).getTime(), new Date(date[1]).getTime())
  filteredMatches = filteredMatches.filter(match => {
    return !date[0] || new Date(match.date).getTime() >= dateFirst
  })
  filteredMatches = filteredMatches.filter(match => {
    return !date[1] || new Date(match.date).getTime() <= dateSecond
  })
  return filteredMatches
}
