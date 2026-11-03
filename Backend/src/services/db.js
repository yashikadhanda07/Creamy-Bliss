import fs from 'fs';
import path from 'path';
import { config } from '../config/index.js';

const storageDir = config.dataPath;
const memoryStore = new Map();

// Safely ensure storage directory exists
try {
  if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
  }
} catch (err) {
  console.warn(`[JsonDB] Notice: Could not create storage directory (${err.message}). In-memory fallback will be used.`);
}

export class JsonDB {
  static getFilePath(collectionName) {
    return path.join(storageDir, `${collectionName}.json`);
  }

  static read(collectionName, defaultData = []) {
    const filePath = this.getFilePath(collectionName);
    try {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(data);
        memoryStore.set(collectionName, parsed);
        return parsed;
      }
      if (memoryStore.has(collectionName)) {
        return memoryStore.get(collectionName);
      }
      this.write(collectionName, defaultData);
      return defaultData;
    } catch (error) {
      console.warn(`[JsonDB] Read notice for ${collectionName}: ${error.message}. Using cached/default data.`);
      if (memoryStore.has(collectionName)) {
        return memoryStore.get(collectionName);
      }
      return defaultData;
    }
  }

  static write(collectionName, data) {
    memoryStore.set(collectionName, data);
    const filePath = this.getFilePath(collectionName);
    try {
      const tempPath = `${filePath}.tmp`;
      fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
      fs.renameSync(tempPath, filePath);
      return true;
    } catch (error) {
      console.warn(`[JsonDB] Write to disk notice for ${collectionName}: ${error.message}. In-memory state preserved.`);
      return true;
    }
  }

  static getAll(collectionName, defaultData = []) {
    return this.read(collectionName, defaultData);
  }

  static findById(collectionName, id, idKey = 'id') {
    const items = this.read(collectionName);
    return items.find(item => String(item[idKey]) === String(id));
  }

  static find(collectionName, predicate) {
    const items = this.read(collectionName);
    return items.filter(predicate);
  }

  static insert(collectionName, newItem) {
    const items = this.read(collectionName);
    items.push(newItem);
    this.write(collectionName, items);
    return newItem;
  }

  static updateById(collectionName, id, updates, idKey = 'id') {
    const items = this.read(collectionName);
    const index = items.findIndex(item => String(item[idKey]) === String(id));
    if (index === -1) return null;

    items[index] = { ...items[index], ...updates, updatedAt: new Date().toISOString() };
    this.write(collectionName, items);
    return items[index];
  }

  static deleteById(collectionName, id, idKey = 'id') {
    const items = this.read(collectionName);
    const index = items.findIndex(item => String(item[idKey]) === String(id));
    if (index === -1) return false;

    items.splice(index, 1);
    this.write(collectionName, items);
    return true;
  }
}
