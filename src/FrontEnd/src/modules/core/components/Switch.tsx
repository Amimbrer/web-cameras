import './Switch.tsx.css'
import {useCamarasStore} from '@core/index'


type SwitchProps =  {
  labelActive: string;
  labelInactive: string;
} | {
  labelActive?: never;
  labelInactive?: never;
}


export const Switch = ({labelActive, labelInactive}:SwitchProps) => {

   const {switchValue, toggleSwitch} = useCamarasStore();


  return (
    <div className='switch'>
      <input type="checkbox" id="switch" className="switch__input" onChange={toggleSwitch} checked={switchValue}
      aria-label={switchValue ? labelActive : labelInactive}
      title={switchValue ? labelActive : labelInactive}
      />
    </div>
  )
}
