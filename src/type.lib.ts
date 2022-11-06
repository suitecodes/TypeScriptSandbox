type Address = {
  addr1: string;
  addr2: string;
  addr3?: string;
};

export enum EntityType {
  EMPLOYEE = "employee",
  CUSTOMER = "customer",
  CONTACT = "contact"
}

export interface Contact {
  type: EntityType.CONTACT;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
}

export interface Customer {
  type: EntityType.CUSTOMER;
  firstName: string;
  lastName: string;
  addressBook: Address[];
  contacts?: Contact[];
}

export function createEntity<T>(entity: T) {
  return entity;
}

export function getEntityAttribute<T, Key extends keyof T>(
  entity: T,
  key: Key
) {
  return entity[key];
}

export function compareTwoDates(date1: Date, date2: Date) {
  return date1 > date2;
}
