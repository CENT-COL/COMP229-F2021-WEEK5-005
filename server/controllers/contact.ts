import express from 'express';

import ContactModel from '../models/contact';

export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    ContactModel.find(function (err, contactCollection) {

        console.log("HERE");
        if (err) {
            console.error(err);
            res.end(err);
        }

        // console.log(contactCollection);
        res.render('index', { title: 'Contact list', page: 'contact/contact-list', contact: contactCollection })

    })
}