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
        "id": "relation84848196",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "id_utilisateur",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_DIWa",
        "name": "email",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_NKd6",
        "max": 0,
        "min": 0,
        "name": "username",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "json2909358564",
        "maxSize": 1,
        "name": "prix_total_chaussures_commandees",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_968557956",
    "indexes": [],
    "listRule": null,
    "name": "prix_commandes_par_utilisateur",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`users`.`id` AS id_utilisateur, \n`users`.`email`,\n`users`.`username`,\n( \nSELECT SUM(`Lunette`.`prix`) \nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette` \nAND `Lunette`.`user` = `users`.`id` \n) AS prix_total_chaussures_commandees\nFROM `users`; ",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_968557956");

  return app.delete(collection);
})
