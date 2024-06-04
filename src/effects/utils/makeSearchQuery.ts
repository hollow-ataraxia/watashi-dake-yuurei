import {Effect} from 'effect'

export const makeQuery = <T extends Record<string, string>>(fields: T) =>
  Effect.sync(() =>
    Object.keys(fields)
      .map(key => ({k: key, v: fields[key]}))
      .map(({k, v}) => `${k}:"${v}"`)
      .join(' AND ')
  )
