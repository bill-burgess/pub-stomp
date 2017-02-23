module.exports = (matches, filters) => {
  const { sports, dateBefore, dateAfter } = filters
  let filteredMatches = matches.filter(match => {
    return sports[match.sport]
  })
  return filteredMatches
}
