import './App.css'
import ImageSlider from './components/image-slider/ImageSlider'
import Accordion from './components/accordion/Accordion'
import LightDarkMode from './components/light-dark-mode/lightDarkMode'
import UseFetchHookTest from './components/use-fetch/UseFetchHookTest'

export default function App() {

  return (
    <>
      {
        //Accordion simple and multiple selection
        //<Accordion />
        
        //Dynamic Image Sliders with api fetch
        //<ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'4'} />

        //Switch theme Dark/Light with custom hook useLocalStorage.js
        //<LightDarkMode />

        //useFetch custom hook
        //<UseFetchHookTest />
      }
    </>
  )
}
