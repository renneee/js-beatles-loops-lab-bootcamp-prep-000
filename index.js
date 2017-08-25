function theBeatlesPlay (musicians, instruments) {
  const array = [ ]

  for (let i = 0, 1 = musicians.length ; i<1; i++) {
    array.push("${musicians[i]} plays ${instruments[i]}")
  }
  return array
}
