import { View, H3 } from 'dripsy'
import React from 'react'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View sx={{ p: 16 }}>
      <H3 sx={{ mb: 16, fontWeight: 'bold' }}>{`User: ${id}`}</H3>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
