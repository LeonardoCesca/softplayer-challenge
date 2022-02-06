import "@testing-library/jest-dom/extend-expect";
import { 
  GET_CHARACTERS,
  GET_CHARACTER_ID,
  LOADING_CHARACTER_ID,
  UPDATE_CHARACTER
} from "../../../types/characters";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Testing Characters redux actions", () => {
  it("should dispatch actions of GET_CHARACTERS", async () => {
    const store = mockStore();
    await store.dispatch({
      type: GET_CHARACTERS,
      characters: [],
    });
    const actions = store.getActions();

    expect(actions).toEqual([
      { characters: [], type: "@characters/GET_CHARACTERS" },
    ]);
  });

  it("should dispatch actions of GET_CHARACTER_ID", async () => {
    const store = mockStore();
    await store.dispatch({
      type: GET_CHARACTER_ID,
      characterId: [],
    });
    const actions = store.getActions();

    expect(actions).toEqual([
      { characterId: [], type: "@characters/GET_CHARACTER_ID" },
    ]);
  });

  it("should dispatch actions of LOADING_CHARACTER_ID", async () => {
    const store = mockStore();
    await store.dispatch({
      type: LOADING_CHARACTER_ID,
      loadingCharacter: true,
    });
    const actions = store.getActions();

    expect(actions).toEqual([
      { loadingCharacter: true, type: "@characters/LOADING_CHARACTER_ID" },
    ]);
  });

  it("should dispatch actions of UPDATE_CHARACTER", async () => {
    const store = mockStore();
    await store.dispatch({
      type: UPDATE_CHARACTER,
      id: 1,
      name: '',
    });
    const actions = store.getActions();

    expect(actions).toEqual([
      { id: 1, name: '', type: "@characters/UPDATE_CHARACTER" },
    ]);
  });

  
});
