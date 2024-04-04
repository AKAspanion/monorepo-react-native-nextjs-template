import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { sub } from 'utils'

export default function App() {
  console.log('utils', sub(10, 12))
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
