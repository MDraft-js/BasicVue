import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage'
import AllFilmPage from '../pages/AllFilmPage'
import FilmPage from '../pages/FilmPage'
import FilmsLayout from '../pages/FilmsLayout'
import NotFoundPage from '../pages/404'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/films',
        name: 'filmsLayout',
        component: FilmsLayout,
        children: [
            {
                path: '',
                name: 'films',
                component: AllFilmPage,
            },
            {
                path: ':id',
                name: 'filmPage',
                component: FilmPage,
                beforeEnter(to, from, next) {
                    if (localStorage.getItem('auth')) return next()
                    next({ name: 'films' })
                }
            },
            {
                path: ':catchAll(.*)',
                redirect: { name : 'films' }
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFoundPage
    }
]

const router = createRouter({ routes, history: createWebHistory(process.env.BASE_URL) })

export default router