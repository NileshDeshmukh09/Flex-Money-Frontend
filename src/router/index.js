import Router from 'vue-router';



const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: HomePage,
      },
           
    ],
  });
  
  export default router;