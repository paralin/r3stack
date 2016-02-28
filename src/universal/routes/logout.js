export default {
  path: 'logout',
  getComponent: async (location, cb) => {
    let component = await System.import('universal/components/_Auth/Logout/Logout');
    cb(null, component)
  }
}
