module.exports = (matches, filters) => {
  const { sports, date } = filters
  let filteredMatches = matches.filter(match => {
    return sports[match.sport]
  })
  filteredMatches = filteredMatches.filter(match => {
    return !date[0] || new Date(match.date).getTime() >= new Date(date[0]).getTime()
  })
  filteredMatches = filteredMatches.filter(match => {
    return !date[1] || new Date(match.date).getTime() <= new Date(date[1]).getTime()
  })
  return filteredMatches
}
