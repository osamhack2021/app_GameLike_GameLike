import React from 'react'
import type { FC } from 'react'
import { Text, ScrollView } from 'react-native'
import * as D from '../data'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({ person }) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>
}

export default Person
