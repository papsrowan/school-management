import { Treduce } from "./DetailsEnseignants"

export const reduce = (state:Treduce, action:any) =>{

    if (action.type === "isDelete") {
        return {
            ...state,
            isDelete: action.payload,
        }
    }

    return state
}

export default reduce