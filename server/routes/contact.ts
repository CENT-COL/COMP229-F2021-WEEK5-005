import express from 'express';
import { DisplayContactListPage } from '../controllers/contact';

const router = express.Router();

// Mongo Database Name Contacts
// Mongo Collection Name Contacts
// Mongo Document Structure


/*

http://server-url/contact/list
http://server-url/contact/create
http://server-url/contact/edit/:id
http://server-url/contact/delete/:id

*/


// GET display contact list view

router.get('/list', DisplayContactListPage);

// GET display contact item edit













export default router;