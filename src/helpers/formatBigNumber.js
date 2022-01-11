const formatBigNumber = (bigNb) => {
  if (!bigNb) return "0"
  let nb = parseInt(bigNb)

  if (nb > 1000000)
    return `${(nb / 1000000).toFixed(1)} M`
  if (nb > 1000)
    return `${Math.trunc(nb / 1000)} K`

  return nb
}

export default formatBigNumber