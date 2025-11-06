/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1131869895")

  // update collection data
  unmarshal({
    "name": "nb_lunettes_non_commandees",
    "viewQuery": "SELECT  \n(ROW_NUMBER() OVER()) AS id,  \nCOUNT(`id`) AS nb_lunettes_non_commandees \nFROM `Lunette` \nWHERE `id` NOT IN ( \nSELECT `id_lunette` \nFROM `Commande` \n);"
  }, collection)

  // remove field
  collection.fields.removeById("number1775683852")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number3596469916",
    "max": null,
    "min": null,
    "name": "nb_lunettes_non_commandees",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1131869895")

  // update collection data
  unmarshal({
    "name": "nb_lunette_non_commandees",
    "viewQuery": "SELECT  \n(ROW_NUMBER() OVER()) AS id,  \nCOUNT(`id`) AS nb_lunette_non_commandees \nFROM `Lunette` \nWHERE `id` NOT IN ( \nSELECT `id_lunette` \nFROM `Commande` \n);"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
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
  }))

  // remove field
  collection.fields.removeById("number3596469916")

  return app.save(collection)
})
