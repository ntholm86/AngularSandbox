import { HashMap, ID } from '@datorama/akita';

export interface EntityState<T> {
    entities: HashMap<T>;
    ids: ID[];
    loading: boolean;
    error: any;
  }