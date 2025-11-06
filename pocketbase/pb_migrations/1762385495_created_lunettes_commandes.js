/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      }
    ],
    "id": "pbc_414060443",
    "indexes": [],
    "listRule": null,
    "name": "lunettes_commandes",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n`Lunette`.id \nFROM `Lunette`, `Commande` \nWHERE `Lunette`.id = `Commande`.id_lunette; ",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_414060443");

  return app.delete(collection);
})
