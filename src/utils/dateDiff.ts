export function diffMonth(dateFrom: Date, dateTo: Date) {
  return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

export function diffYear(dateFrom: Date, dateTo: Date) {
  return dateTo.getFullYear() - dateFrom.getFullYear()
}