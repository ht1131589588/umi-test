export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true
        },
        antd: true
      }
    ]
  ]
  // routes: [{ path: '/', component: './detail' }]
}
