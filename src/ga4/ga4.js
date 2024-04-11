import ga4 from 'react-ga4'

const TRACKING_ID = 'G-QL7F9YJBPK'

export const init = () => ga4.initialize(TRACKING_ID)

export const sendEvent = (name) => ga4.event('screen_view', {
  app_name: "Poochku",
  screen_name: name,
})

export const sendPageview = (path) => ga4.send({ 
  hitType: 'pageview', 
  page: path 
})