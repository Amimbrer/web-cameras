import './Header.tsx.css'

import { Switch } from '@core/index';

export const Header = () => {
  return (
    <header>
      <form>
        <Switch labelActive='Cambiar a vista global' labelInactive='Cambiar a vista individual'/>
      </form>
    </header>
  )
}
