import { CREATE_CHAIN } from "../constants/action-types";

export const createChain = chain => ({ type: CREATE_CHAIN, payload: chain });