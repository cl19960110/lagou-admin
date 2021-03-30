import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const _handleSubmit = (router)=>{
  return (e)=>{
    e.preventDefault()
    router.go('/index')
  }
}

const signin = (router)=>{
  return (req, res, next) => {
    res.render(htmlSignin)
    $('#signin').on('submit', _handleSubmit(router))
  }
}

const index = (router)=>{
  return (req, res, next) => {
    res.render(htmlIndex)
    //解决模板的样式问题
    $(window,'.wrapper').resize()
  }
}

export {
  signin,
  index
}
