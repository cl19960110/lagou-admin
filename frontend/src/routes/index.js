import SMERouter from 'sme-router'
import {signin,index} from '../controllers'

const router = new SMERouter('root')

router.route('/', signin(router))
router.route('/signin', signin(router))
router.route('/index', index(router))

router.go('/index')
// export default router


