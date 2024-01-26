import { useEffect, useState } from "react";
import { SpinnerLoadingIcon } from "./Spinner";

//#region // Spinner before page refresh.
interface SpinnerProps { }

export const SpinnerSiteRefresh: React.FC<SpinnerProps> = () => {

  const [isSpinnerVisible, setSpinnerVisible] = useState(false)

  const showSpinnerFor3Seconds = () => {
    setSpinnerVisible(true)

    setTimeout(() => {
      setSpinnerVisible(false)
    }, 3000)
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      showSpinnerFor3Seconds();
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <>
      {isSpinnerVisible && SpinnerLoadingIcon()}
    </>
  )
}
//#endregion