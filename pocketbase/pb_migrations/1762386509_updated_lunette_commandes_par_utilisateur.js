/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_53703113")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`Commande`.`id_utilisateur`, \n`Lunette`.`id` AS id_lunette, \n`Lunette`.`chat_history`,\n`Lunette`.`code_svg`\nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette`; "
  }, collection)

  // remove field
  collection.fields.removeById("_clone_NvFD")

  // remove field
  collection.fields.removeById("_clone_l1iW")

  // remove field
  collection.fields.removeById("_clone_xZC7")

  // remove field
  collection.fields.removeById("_clone_TdQ6")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_7FOV",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_utilisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_SSBp",
    "max": 0,
    "min": 0,
    "name": "chat_history",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_6S1Z",
    "max": 0,
    "min": 0,
    "name": "code_svg",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_53703113")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n(ROW_NUMBER() OVER()) AS id, \n`Commande`.`id_utilisateur`, \n`Lunette`.`id` AS id_lunette, \n`Lunette`.`chat_history`,\n`Lunette`.`code_svg`,\n`Lunette`.`user`\nFROM `Lunette`, `Commande` \nWHERE `Lunette`.`id` = `Commande`.`id_lunette`; "
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_NvFD",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_utilisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_l1iW",
    "max": 0,
    "min": 0,
    "name": "chat_history",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_xZC7",
    "max": 0,
    "min": 0,
    "name": "code_svg",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_TdQ6",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_7FOV")

  // remove field
  collection.fields.removeById("_clone_SSBp")

  // remove field
  collection.fields.removeById("_clone_6S1Z")

  return app.save(collection)
})
