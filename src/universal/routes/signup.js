import {requireNoAuth} from './requireNoAuth';

export default store => {
  return {
    onEnter: requireNoAuth,
    path: 'signup',
    getComponent: async (location, cb) => {
      let component = await System.import('universal/containers/_Auth/Auth/AuthContainer');
      cb(null, component)
    }
  }
}
