import { useCamarasStore, FullCameras, IndividualCameras } from '@cameras/index'


export const HomePage = () => {
  const {switchValue} = useCamarasStore();


  return (
    <>
      {switchValue ? <IndividualCameras />: <FullCameras />}
    </>
  )
}
