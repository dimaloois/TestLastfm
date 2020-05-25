import Vue from 'vue'
import Router from 'vue-router'



import ArtistsChart from '../components/ArtistsChart'
import SongChart from '../components/SongChart'
import BestAlbums from '../components/BestAlbums'
import AlbumsInfo from '../components/AlbumsInfo'

Vue.use(Router);


let router = new Router ({
        routes:[
            {
                path: '/',
                name: 'ArtistsChart',
                component: ArtistsChart
            },
            {
                path: '/SongChart',
                name: 'SongChart',
                component: SongChart
            },
            {
                path:'/BestAlbums',
                name: 'BestAlbums',
                component: BestAlbums
            },
            {
                path:'/AlbumsInfo',
                name:'AlbumsInfo',
                component: AlbumsInfo
            }
        ]
    }
)




export default router;