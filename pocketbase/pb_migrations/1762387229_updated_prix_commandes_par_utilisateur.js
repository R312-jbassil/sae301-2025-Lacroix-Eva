/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_968557956")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`users`.`id` AS id_utilisateur, \n( \nSELECT SUM(`Lunette`.`prix`) \nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette` \nAND `Lunette`.`user` = `users`.`id` \n) AS prix_total_chaussures_commandees\nFROM `users`; "
  }, collection)

  // remove field
  collection.fields.removeById("_clone_DIWa")

  // remove field
  collection.fields.removeById("_clone_NKd6")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_968557956")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`users`.`id` AS id_utilisateur, \n`users`.`email`,\n`users`.`username`,\n( \nSELECT SUM(`Lunette`.`prix`) \nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette` \nAND `Lunette`.`user` = `users`.`id` \n) AS prix_total_chaussures_commandees\nFROM `users`; "
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_DIWa",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  }))

  return app.save(collection)
})
