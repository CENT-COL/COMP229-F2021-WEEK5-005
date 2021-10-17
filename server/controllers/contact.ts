import express from 'express';

import ContactModel from '../models/contact';

export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    ContactModel.find(function (err, contactCollection) {

        console.log(contactCollection);
        if (err) {
            console.error(err);
            res.end(err);
        }

        // console.log(contactCollection);
        res.render('index', { title: 'Contact list', page: 'contact/contact-list', contact: contactCollection })

    })
}

export function DisplayContactEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    console.log(id);

    ContactModel.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        console.log(contactItemToEdit);
        res.render('index', { title: "Contact Edit", page: "contact/contact-edit", item: contactItemToEdit })
    })
}