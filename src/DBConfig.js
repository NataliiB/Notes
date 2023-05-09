export const DBConfig = {
    name: 'notesData',
    version: 10,
    objectStoresMeta: [
      {
        store: 'notes',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { textNote: 'textNote', keypath: 'textNote', options: { unique: false } },
          { date: 'date', keypath: 'date', options: { unique: false } }
        ]
      }
    ]
  };