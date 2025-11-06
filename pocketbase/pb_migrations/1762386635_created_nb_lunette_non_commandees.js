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
        "id": "number1775683852",
        "max": null,
        "min": null,
        "name": "nb_lunette_non_commandees",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_1131869895",
    "indexes": [],
    "listRule": null,
    "name": "nb_lunette_non_commandees",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT  \n(ROW_NUMBER() OVER()) AS id,  \nCOUNT(`id`) AS nb_lunette_non_commandees \nFROM `Lunette` \nWHERE `id` NOT IN ( \nSELECT `id_lunette` \nFROM `Commande` \n);",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1131869895");

  return app.delete(collection);
})
