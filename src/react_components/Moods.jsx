import {useDispatch, useSelector} from "react-redux";
import {useEffect, useId} from "react";
import {getMoods} from "../redux/thunks/moodsThunks";


function Moods() {
    const {items} = useSelector(store => store.moodsReducer)
    const key_id = useId()
    const dispatch = useDispatch()

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getMoods())
        }
    }, [dispatch, items])

    const getAllMoods = () => {
        return items?.map(
            (mood) => <p key={mood.id + key_id}>{mood.name} {mood.code}</p>
        )
    }

    return (
        <div>
            {getAllMoods()}
        </div>
    )
}

export default Moods;