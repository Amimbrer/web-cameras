import { FullCameras } from '@core/components/FullCameras';
import { IndividualCameras } from '@core/components/IndividualCameras';
import {useCamarasStore} from '@core/index'

export const HomePage = () => {
  const {switchValue} = useCamarasStore();


  return (
    <>
      {switchValue ? <IndividualCameras />: <FullCameras />}
    </>
  )
}
