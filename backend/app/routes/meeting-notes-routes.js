import express from "express";
import { addNotesController, findNotesController, getAllNotesController , deletByMeetingId , deleteByresource , updateMeetingController, findByKeywordController} from '../controller/meeting-notes-controller.js'

const routes = express.Router();

//find by keyword
routes.route('/filter').get(findByKeywordController);

//add Notes controller and get all Notes Controller
routes.route('/').post(addNotesController).get(getAllNotesController);

//find by id
routes.route('/:id').get(findNotesController);

//delete by ID
routes.route('/:meetingId').delete(deletByMeetingId);

//delete by resource
routes.route('/').delete(deleteByresource);


//update source by meetingId
routes.route('/:meetingId').put(updateMeetingController);



export default routes;
