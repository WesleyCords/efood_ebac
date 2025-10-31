const refactorDescription = (description: string): string => {
  if (description.length <= 230) {
    return description
  }
  return description.slice(0, 200) + '...'
}

export default refactorDescription
