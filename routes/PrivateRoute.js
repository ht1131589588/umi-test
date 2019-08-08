import Redirect from 'umi/redirect'
import { connect } from 'dva'

const PrivateRoute = connect(state => state)(props => {
  // 判断用户登录状态
  // console.log(props.user.token)
  if (!props.user.token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            redirect: props.location.pathname
          }
        }}
      />
    )
  }

  return (
    <div>
      PrivateRoute hahaha
      {props.children}
    </div>
  )
})

export default PrivateRoute
