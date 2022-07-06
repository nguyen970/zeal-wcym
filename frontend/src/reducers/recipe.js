import { GET_RECIPE, RECEIVED_RECIPE, FAILED_GET_RECIPE} from "../actions"

const initialState = {
  recipe: null,
  isLoading: false,
  error: null,
}

const recipeFetching = (state) => {
  return { ...state, isLoading: true }
}

const recipeFetched = (state, payload) => {
  return { ...state, isLoading: false, recipe: payload }
}

const recipeFailed = (state, payload) => {
  return { ...state, isLoading: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return recipeFetching()
    case RECEIVED_RECIPE:
      return recipeFetched(state, payload)
    case FAILED_GET_RECIPE:
      return recipeFailed(state, payload)
    default:
      return state
  }
}
