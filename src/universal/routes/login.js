// https://github.com/webpack/webpack/tree/master/examples/code-splitted-require.context
//There's a lot of boilerplate here, but if the require isn't static, then webpack can't chunk properly
import {requireNoAuth} from './requireNoAuth';

export default store => {
  return {
    onEnter: requireNoAuth(store),
    path: 'login',
    getIndexRoute: async (location, cb) => {
      let component = await System.import('universal/containers/_Auth/Auth/AuthContainer');
      cb(null, {component})
    },
    getChildRoutes: (location, cb) => {
      cb(null, [
        {
          path: 'lost-password',
          getComponent: async (location, cb) => {
            let component = await System.import('universal/components/_Auth/LostPassword/LostPassword');
            cb(null, component)
          }
        },
        {
          path: 'reset-email-sent',
          getComponent: async (location, cb) => {
            let component = await System.import('universal/components/_Auth/ResetEmailSent/ResetEmailSent');
            cb(null, component)
          }
        },
        {
          path: 'reset-password/:resetToken',
          getComponent: async (location, cb) => {
            let component = await System.import('universal/components/_Auth/ResetPassword/ResetPassword');
            cb(null, component)
          }
        },
        {
          path: 'reset-password-success',
          getComponent: async (location, cb) => {
            let component = await System.import('universal/components/_Auth/ResetPasswordSuccess/ResetPasswordSuccess');
            cb(null, component)
          }
        }
      ])
    }
  }
}
