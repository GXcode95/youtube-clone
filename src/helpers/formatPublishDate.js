const formatPublishDate = (date) => {
  const today = Date.now() 
  const publishDate = new Date(date).getTime()

  const daysSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 / 60 / 24 )
  if (daysSincePublish >= 730)
    return  `${Math.trunc(daysSincePublish / 365)} ans`
  if (daysSincePublish >= 365)
    return "1 an"
  if (daysSincePublish >= 30)
    return  `${Math.trunc(daysSincePublish / 30)} mois`
  if (daysSincePublish >= 14 )
    return `${Math.trunc(daysSincePublish / 7)} semaines`
  if (daysSincePublish >= 7 )
    return `1 semaine`
  if (daysSincePublish >= 1)
    return `${daysSincePublish} jours`
  if (daysSincePublish < 1){
    const hoursSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 / 60 )
    if (hoursSincePublish >= 1)
     return `${hoursSincePublish} heures`
     
    const minutesSincePublish = Math.trunc( (today - publishDate) / 1000 / 60 )
      return `${minutesSincePublish} minute`
  }
}

export default formatPublishDate