import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, name: 'Mambo' },
      { id: 12, name: 'Dadbo' },
      { id: 13, name: 'Dafbo' },
      { id: 14, name: 'Orebo' },
      { id: 15, name: 'Bastian' },
      { id: 16, name: 'Lorenz' },
      { id: 17, name: 'Mia' },
      { id: 18, name: 'Safiri' },
      { id: 19, name: 'Tischi' },
      { id: 20, name: 'Tornado' }
    ];
    return {employees};
  }
}