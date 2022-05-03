import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import Auth from '@/views/auth/Auth.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'

import store from '@/store'
import { TOKEN_NAME } from '@/configs'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'modules',
        name: 'campus.modules',
        component: ModulesAndLessons
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: Home
      }
    ]
  },
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/recuperar-senha',
    name: 'forget.password',
    component: ForgetPassword
  },
  {
    path: '/reset/:token',
    name: 'reset.password',
    component: ResetPassword,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// para cada url que é chamada, vai executar esses passos
router.beforeEach(async (to, _, next) => {
  const loggedIn = store.state.users.loggedIn

  if (to.name != 'reset.password' && !loggedIn) { // se não estiver na pagina de reset password e não estiver autenticado
    const token = await localStorage.getItem(TOKEN_NAME) // recupera o token
    
    if (!token && to.name != 'auth' && to.name != 'forget.password') {
      return router.push({ name: 'auth' }) // redireciona pra pagina de autenticação
    }

    // se tem o toke e não está em nenhuma das 3 paginas (reset.password, auth ou forget.password)
    await store.dispatch('getMe') // vai chamar o getMe
      .catch(() => { // se der algum erro
        if (to.name != 'auth') return router.push({ name: 'auth' }) // redireciona pra pagina de auth
      })
  }

  next() // dando tudo ok, prossegue normalmente
})

export default router
