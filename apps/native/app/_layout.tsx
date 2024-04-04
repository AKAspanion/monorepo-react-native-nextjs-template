import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { sub } from 'utils'

export default function Root() {
  console.log('utils', sub(10, 20))
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
