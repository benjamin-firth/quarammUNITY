export const loginCurrentUser = user => ({
  type: 'LOG_IN',
  user
});

export const logoutCurrentUser = () => ({
  type: 'LOG_OUT'
});

export const submitNeedRequest = need => ({
  type: 'SUBMIT_NEED',
  need
});