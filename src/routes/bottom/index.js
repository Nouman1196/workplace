import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import WorkplaceLoader from '../../components/loader/workplaceLoader/WorkplaceLoader';
import FloatingOptionButton from './components/FloatingOptionButton';
import ModalOptions from './components/ModalOptions';
import { setOptionModal } from '../../redux/checkin-break/reducer';
import { getStatusUser } from '../../redux/status/action';

const BottomOptions = ({  }) => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.statusApi);
    const { optionModal } = useSelector((state) => state.checkinBreakApi);

    useEffect(() => {
        getStatusUser()
    }, [])

    return (
        <>
            <WorkplaceLoader loading={loading} />
            <ModalOptions />
            {!optionModal &&
                <FloatingOptionButton style={{ marginBottom: 10 }} onPunchPress={() => dispatch(setOptionModal(!optionModal))} />
            }
        </>
    )
}
export default BottomOptions