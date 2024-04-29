import routes from "./meeting-notes-routes.js"

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/meetingnotes',routes);
}