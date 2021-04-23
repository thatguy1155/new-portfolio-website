import { SETINDEX,SETNEWINDEX,SETPROJECTVIEW,IMAGELOADED } from '../actions/types'
import{setHasLoaded} from '../actions/pageActions'


const initialState = {
    slideshowView:{
        PassByWeb:[
            "https://live.staticflickr.com/65535/50968050097_1b905fb4eb_b.jpg",
            "https://live.staticflickr.com/65535/50654294098_f3d858dac8_b.jpg",
            "https://live.staticflickr.com/65535/50654293988_82e5aae718_b.jpg",
            "https://live.staticflickr.com/65535/50655031536_dfc9a95282_b.jpg",
            "https://live.staticflickr.com/65535/50655031541_99a3205afd_b.jpg"
        ],
        PassByMobile:[
            "https://live.staticflickr.com/65535/50655118797_47040d8c00_b.jpg",
            "https://live.staticflickr.com/65535/50655031771_e465e7ced3_b.jpg",
            "https://live.staticflickr.com/65535/50655678767_6604291639_b.jpg",
            "https://live.staticflickr.com/65535/50655585486_75b995f994_b.jpg",
            "https://live.staticflickr.com/65535/50655031701_464e138160_b.jpg",
            "https://live.staticflickr.com/65535/50655585361_ddafe2779f_b.jpg"
        ],
        Petpeeps:[
            "https://live.staticflickr.com/65535/49888022993_d78beb7abb_b.jpg",
            "https://live.staticflickr.com/65535/49888023033_f0bbc5ebc9_b.jpg",
            "https://live.staticflickr.com/65535/49888543536_c20a48ba14_b.jpg",
            "https://live.staticflickr.com/65535/49888852737_3cd9926b2d_b.jpg"
        ],
        NoraeCheck:[
            "https://live.staticflickr.com/65535/49888023133_db11fea728_b.jpg",
            "https://live.staticflickr.com/65535/49888023113_3643dca244_b.jpg",
            "https://live.staticflickr.com/65535/49888852797_5ce326d28c_b.jpg" 
        ],
        SPPS:[
            "https://live.staticflickr.com/65535/49888707066_7c23aab85d_b.jpg",
            "https://live.staticflickr.com/65535/49889013287_fe2bf224e7_b.jpg",
            "https://live.staticflickr.com/65535/49889012982_d31242d79a_b.jpg"
        ]
    },
    loadedImageIndex:[],
    loadedImageStatus:false,
    slideshowTitle:{
        PassByWeb: "PassBy Web",
        PassByMobile: "PassBy Mobile",
        Petpeeps:"Pet Peeps",
        NoraeCheck:"NoraeCheck",
        SPPS:"Saint Paul Preperatory School"
    },
    slideshowText:{
        PassByWeb: "The PassBy website funtions as both a promotional/informative site for our our userbase as well as an online portal for partnering businesses to promote new deals through the app. I made the site independantly using React/Typescript with Firebase/Firestore as a backend and Context for state management. While the business portal will be available when the app is officially launched, the promotional site is deployed at passbykorea.com",
        PassByMobile: "The PassBy mobile application is a dating/social networking app that uses Dart/Flutter for the frontend and Dart/Firebase for the backend using an MVC design pattern. My initial role has been to work as a liason between the front-end and back-end where I've been connecting the UI elements to the controller functions and modifying both so that they work more efficiently. I've also done several other front-end taks such as building the language selection page or backend tasks such as checking to see if someone if using the app for the first time.",
        Petpeeps:"PetPeeps is a web application for helping pet owners find pubs, restaurants and cafes where they can take their pets. The front-end of the project uses Vue.js with vuetify design components and vuex state management. The front end communicates with a REST-API via axios to the PHP-based backend and MYSQL database. It also uses Google Firebase OATH authentication and google maps API for plotting businesses on a map. In this project I’ve used Firebase to create and store user information and to create accounts using the users google account. I’ve created the PHP backend that stores user info in our database. I’ve also created interactive forms that make calls to both our backend and to the vuex store to make fast reactive displays. I’ve also worked on many design components such as the login and signup pages.",
        NoraeCheck:"NoraeCheck is an app to help people look up the song codes for their favorite songs at noraebang, create custom playlists and do randomized singing challenges with their friends. I’ve had many different roles in the application. I designed the layout of the search and search pages using a combination of HTML/CSS and Javascript. I’ve used Javascript XMLHTTPREQUESTS to retrieve songs from an API. I used PHP to make the login and signup features. I also used a PHP-based MVC framework to connect users with both the correct pages and the contents of our MYSQL database where we stored user information, songs and playlists. I’ve also written many SQL queries for reading and updating information from these databases.",
        SPPS:"This is an earlier project where I took a paper brochure for the Saint Paul Preperatory School and made a wedbsite out of it using only HTML/CSS"
    },
    selectedView:"PassByWeb",
    slideshowIndex:0,
    newIndex:0
    
}

const pageReducer = (state = initialState, action) => {
    //when you get an action, evaluate which kind of action it is
    switch(action.type) {
        //if you get the action type of FETCH_USERS, return the state with the items from there
        case SETINDEX:
            const selectedIndex = action.payload
            return{
                ...state,
                slideshowIndex:selectedIndex
            }
        case SETNEWINDEX:
            const newSelectedIndex = action.payload
            return{
                ...state,
                newIndex:newSelectedIndex
            }
        case SETPROJECTVIEW:
            const newProjectView = action.payload
            return{
                ...state,
                selectedView:newProjectView
            }
        case IMAGELOADED:
            const url = action.payload
            console.log(url)
            let loadedImageCount = state.loadedImageIndex
            if(url !== "void" && !loadedImageCount.includes(url)){
                loadedImageCount.push(url)
            } else if (url === "void"){
                console.log("fun")
                loadedImageCount = []
            }
            const ceiling = state.slideshowView[state.selectedView].length
            console.log(ceiling)
            console.log(loadedImageCount.length)
            let finality = state.loadedImageStatus
            if(loadedImageCount.length === ceiling) {
                finality = true
            } else if (url === "void") {
                finality = false
            }
            // loadedImageCount += 1
            return{
                ...state,
                loadedImageIndex:loadedImageCount,
                loadedImageStatus:finality
            }
    
        default:
            return state
    }
}

export default pageReducer