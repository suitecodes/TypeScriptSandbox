type Address = {
  addr1: string;
  addr2: string;
  addr3?: string;
};

export type UnknowObject<T = unknown> = Record<string, T>;

type TKey = "prop1" | "prop2" | "prop3";
type TValue = object[];

export type TRecord = Record<TKey, TValue>; // But also you can use Record instead of Map

export enum EntityType {
  EMPLOYEE = "employee",
  CUSTOMER = "customer",
  CONTACT = "contact",
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

//References:
//https://stackoverflow.com/questions/39256682/how-to-define-an-interface-for-objects-with-dynamic-keys
