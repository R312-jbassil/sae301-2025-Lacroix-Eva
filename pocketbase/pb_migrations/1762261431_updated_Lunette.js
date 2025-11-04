/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3690071135")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2716722970",
    "hidden": false,
    "id": "relation1818816383",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_materiau_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2716722970",
    "hidden": false,
    "id": "relation807046112",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_materiau_branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3690071135")

  // remove field
  collection.fields.removeById("relation1818816383")

  // remove field
  collection.fields.removeById("relation807046112")

  return app.save(collection)
})
