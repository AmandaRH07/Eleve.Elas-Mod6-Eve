import './App.css'
import { Button } from './presentation/components/elements/Button';

function App() {
  return (
    <>
      <Button
        label='Label'
        onClick={function () {
          console.log('Label');
        }}
      />

      <Button
        label='Label 2'
        onClick={function () {
          console.log('Label 2');
        }}
      />
    </>
  )
}

export default App
