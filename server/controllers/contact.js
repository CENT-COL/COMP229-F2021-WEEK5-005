"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        console.log(contactCollection);
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact list', page: 'contact/contact-list', contact: contactCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayContactEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(contactItemToEdit);
        res.render('index', { title: "Contact Edit", page: "contact/contact-edit", item: contactItemToEdit });
    });
}
exports.DisplayContactEditPage = DisplayContactEditPage;
//# sourceMappingURL=contact.js.map