export default [{
    path:'/',
    component: ()=>import('../../components/index.vue'),
    children: [
        {
            path: '/',
            name: 'home',
            component: ()=>import('../../view/home/home.vue')
        }
    ],
}]