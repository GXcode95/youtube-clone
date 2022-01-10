const formatBigNumber = (bigNb) => {
  let nb = parseInt(bigNb)

  if (nb > 1000000)
    return `${nb / 1000000} M`
  if (nb > 1000)
    return `${nb / 1000} K`

  return nb
}

export default formatBigNumber