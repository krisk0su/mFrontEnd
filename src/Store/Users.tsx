import { createContext } from "react";
import { observable, action } from "mobx";
import axios from "axios";

export class UsersStore {}

export const usersContext = createContext(new UsersStore());
