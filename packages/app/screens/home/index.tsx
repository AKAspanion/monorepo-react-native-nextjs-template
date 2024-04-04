import { useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to RN + NextJS Template.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          A basic starter to show you how you can navigate from one screen to
          another. This screen uses the same code on Next.js and React Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          This is powered by{' '}
          <A href="https://solito.dev/" target="_blank" sx={{ color: 'blue' }}>
            Solito
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/123"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          User Details
        </TextLink>
        <View sx={{ width: 32 }} />
        <TextLink
          href="/profile"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Profile
        </TextLink>
      </Row>
    </View>
  )
}
