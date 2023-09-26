import Card from "../pages/card";
import ChatList from "../pages/chatList";
import Home from "../pages/home";
import MainPage from "../pages/mainPage"
import ManageSubscription from "../pages/manageSubscription";
import SignUp from "../pages/signUp";

export const functions = {
    lesson: function (elem) {
        this.array.push(elem);
        return this.array.length
    },

    array:[], 
}

export const pages = [
    {label:"Login", key: "Login", route: "/login", component: <SignUp />},
    {label:"Home", key: "Home", route: "/profile", component: <Home />, Show_Header: true, events: {
        onload: () => alert("hi"),
    }},
    {label:"Main Page", key: "Main_Page", route: "/", component: <MainPage />},
    {label:"Manage Subscription", key: "Manage_Subscription", route: "/subscription", component: <ManageSubscription />},
    {label:"Chat List", key: "Chat_List", route: "/chatList", component: <ChatList />},
    {label:"404", key:"404", route:"/*", component: <Card />}
]

export const generateReroute = (component, route, navigate) => {
    /*
    let o = pages.filter((page)=> page.route === route);
    if (o.length === 0) throw new Error("No routes found!");
    component.onClick = () => navigate(route);
    return component
    */
}

export const getKeys = (key) => {
    const val = localStorage.getItem(key)
    
    if (val === null) {
        throw new Error("Key is not found");
    }

    return val
}

export const setKeys = (key, value) => {
    const val = localStorage.setItem(key, value)

    if (val === null) {
        throw new Error("Key is not found");
    }

    return val
}
