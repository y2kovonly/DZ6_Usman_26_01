import {MainPage} from "./page/MainPage.jsx";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {CartPage} from "./page/CartPage.jsx";
import {Page404} from "./page/Page404.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'/cart'} element={<CartPage/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Route>
    </Routes>
  )
}

export default App