const LbsToKg = (lbs: number): string => {
  const kg = (lbs * 0.45359237).toFixed(2)
  return kg
}

const formatHeight = (height: number): string => {
  const formatedHeight = (height * 0.1).toFixed(2)
  return formatedHeight
}

const unitsConversion = {
  LbsToKg,
  formatHeight,
}

export default unitsConversion
