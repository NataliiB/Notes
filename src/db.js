import Dexie from 'dexie';

export const db = new Dexie('notesData');
db.version(1).stores({
  notes: '++id, note, createdAt', // Primary key and indexed props
});