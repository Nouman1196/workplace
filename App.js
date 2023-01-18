import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './src/routes/navigation';
import { timerAction, runTimer } from './src/redux/timer/action';
import BottomOptions from './src/routes/bottom';
const App = ({ navigation }) => {
  const { timer, punch_status } = useSelector((state) => state.timerApi.timerData);
  const { clockRefresh } = useSelector((state) => state.timerApi);
  const { meta } = useSelector((state) => state.userApi.userData)

  useEffect(() => {
    timerAction({ navigation })
  }, [clockRefresh])

  useEffect(() => {
    let interval = runTimer({ timer, punch_status })
    return () => clearInterval(interval)
  }, [punch_status?.break_status, punch_status?.check_status])


  return (
    <>
      {meta &&
        <BottomOptions />
      }
      <Navigation />
    </>
  )
}
export default App