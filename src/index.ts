import "./styles.css";
import {
  Contact,
  Customer,
  EntityType,
  createEntity,
  getEntityAttribute,
  compareTwoDates
} from "./type.lib";

const registration: Customer = {
  type: EntityType.CUSTOMER,
  firstName: "John",
  lastName: "Doe",
  addressBook: [
    {
      addr1: "1234 Main St",
      addr2: "Suite 100"
    }
  ]
};

const father: Contact = {
  type: EntityType.CONTACT,
  firstName: "Johnny",
  lastName: "Doe"
};

const account = createEntity(registration);
const contact = createEntity(father);
const firstName = getEntityAttribute(registration, "firstName");
const isValidDate = compareTwoDates(new Date("1/1/2022"), new Date("1/2/2022"));

document.getElementById("app")!.innerHTML = `${JSON.stringify(firstName)}`;
