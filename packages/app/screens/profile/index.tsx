import { useSx, View, H3 } from 'dripsy'
import { TextLink } from 'solito/link'

export function ProfileScreen() {
  const sx = useSx()

  return (
    <View sx={{ p: 16 }}>
      <H3 sx={{ mb: 16, fontWeight: 'bold' }}>Profile</H3>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
