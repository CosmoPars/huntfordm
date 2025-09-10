import styled from '@emotion/styled'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { DarkMatterPage } from './pages/dark-matter-page'
import { DirectPage } from './pages/direct-page'
import { InteractiveLensPage } from './pages/interactive-lens-page'
import { SLRarePage } from './pages/slrare-page'
import { MassPage } from './pages/mass-page'
import { ObstaclePage } from './pages/obstacle-page'
import { StarPage } from './pages/star-page'
// import { StrangeGalaxiesPage } from './pages/strange-galaxies-page'
import { GameStartPage } from './pages/game-start-page'
import { TitlePage } from './pages/title-page'
// import { StackedGalaxiesPage } from './pages/stacked-galaxies-page'
import { StackedGalaxiesPage1 } from './pages/stacked1-galaxies1'
import { StackedGalaxiesPage2 } from './pages/stacked2-galaxies2'
import { StackedGalaxiesPage3 } from './pages/stacked3-galaxies3'
import { Routes } from './routes'
import Game from './game'
import { EndOfTutPage } from './pages/end-of-tutorial-page'
import { AmbientProvider } from './components/audio/ambient-provider'
import { ImagePreloader } from './components/image-preloader'
import { preloadImages } from './config'
import { NewDarkMatterPage } from './pages/newdark-matterpage'
import { StackedGalaxiesLoaderPage } from './pages/stackedVideoInitial'



const StyledApp = styled.div`
  font-family: canada-type-gibson,sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  .gutter-left {
    margin-left: 9px;
  }

  .col-span-2 {
    grid-column: span 2;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
  }

  p {
    text-align: left;
    margin: 0;
  }

  h1 {
    text-align: left;
    margin: 0;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }
`

export function App() {
  return (
    <StyledApp>
      <ImagePreloader images={preloadImages}>
        <AmbientProvider defaultCrossfadeDuration={1500} ambientVolume={0.10}>
          <RouterRoutes>
            <Route path='/title' element={<TitlePage />} />
            <Route path='/tutorial/star' element={<StarPage />} />
            <Route path='/tutorial/direct' element={<DirectPage />} />
            <Route path='/tutorial/obstacle' element={<ObstaclePage />} />
            <Route path='/tutorial/mass' element={<MassPage />} />
            <Route path='/tutorial/darkmatter' element={<DarkMatterPage />} />
            <Route path='/tutorial/newdarkmatter' element={<NewDarkMatterPage />} />
            <Route path='/tutorial/interactivelens' element={<InteractiveLensPage />} />
            <Route path='/tutorial/slrare' element={<SLRarePage />} />
            {/* <Route path='/tutorial/strangegalaxies' element={<StrangeGalaxiesPage />} /> // page no longer used */}
            <Route path={`${Routes.Game}/:level`} element={<Game />} />
            <Route path='/tutorial/stackedgalaxiesLoader' element={<StackedGalaxiesLoaderPage />} />
            {/* <Route path='/tutorial/stackedgalaxies' element={<StackedGalaxiesPage />} /> //page no longer used */}
            <Route path='/tutorial/stackedgalaxies1' element={<StackedGalaxiesPage1 />} />
            <Route path='/tutorial/stackedgalaxies2' element={<StackedGalaxiesPage2 />} />
            <Route path='/tutorial/stackedgalaxies3' element={<StackedGalaxiesPage3 />} />
            <Route path={Routes.Game} element={<GameStartPage />} />
            <Route path='/tutorial/ending' element={<EndOfTutPage />} />
            <Route path='/' element={<TitlePage />} />
          </RouterRoutes>
        </AmbientProvider>
      </ImagePreloader>
    </StyledApp>
  )
}

export default App
