const initialState = {
  jobs: [],
  refreshing: false
}

const homeRecucer = (state = initialState, action) => {
  switch (action.type) {

  //login
  case 'FETCH_JOBS_REQUEST':
    newState = Object.assign({}, state, {
      refreshing: true
    })
    return newState

  case 'FETCH_JOBS_SUCCESS':
    console.log('FETCH_JOBS_SUCCESS', action.jobs)
    let key = 0
    const jobs = action.jobs.filter(job => job.subtype !== 'channel_join').map(job => {
      key += 1
      return Object.assign({}, job, {
        key
      })
    })
    newState = Object.assign({}, state, {
      jobs,
      refreshing: false
    })
    console.log('newState', newState)
    return newState

  case 'LOGIN_FAILURE':
    return state

  default:
    return state

  }
}

export default homeRecucer
