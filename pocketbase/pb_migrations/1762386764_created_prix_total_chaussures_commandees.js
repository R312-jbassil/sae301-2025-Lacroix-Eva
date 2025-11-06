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
      },
      {
        "hidden": false,
        "id": "json257586121",
        "maxSize": 1,
        "name": "lunettes_commandees",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_704112417",
    "indexes": [],
    "listRule": null,
    "name": "prix_total_chaussures_commandees",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \nSUM(`prix`) AS lunettes_commandees \nFROM `Lunette` \nWHERE `id` IN ( \nSELECT `id_lunette` \nFROM `Commande` \n); ",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_704112417");

  return app.delete(collection);
})
