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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_QMeq",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "id_utilisateur",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_3690071135",
        "hidden": false,
        "id": "relation1535241049",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "id_lunette",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_nHTP",
        "maxSize": 0,
        "name": "chat_history",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_3158",
        "max": 0,
        "min": 0,
        "name": "code_svg",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_2241369128",
    "indexes": [],
    "listRule": null,
    "name": "lunettes_commandees_par_utilisateur",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`Commande`.`id_utilisateur`, \n`Lunette`.`id` AS id_lunette, \n`Lunette`.`chat_history`,\n`Lunette`.`code_svg`\nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette`; ",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241369128");

  return app.delete(collection);
})
