module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fedc2d6f3b840120e3041b7491469f7a'),
  },
});
