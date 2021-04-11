import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getUsers } from "./../userAction";

const mockStore = configureMockStore([thunk]);

describe("User Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      users: {}
    });
  });


  describe("getUsers action creator", () => {
    it("dispatches GET_USERS action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data:{
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
          }
        })
      );

      await store.dispatch(getUsers());
      const actions = store.getActions();
      expect.assertions(2);
      expect(actions[0].type).toEqual("GET_USERS");
      expect(actions[1].payload.first_name).toEqual("Janet");
    });

    it("tests GET_USERS action and that returns an error", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          error: "Something bad happened :("
        })
      );

      try { 
        await store.dispatch(getUsers());
      } catch {
        const actions = store.getActions();
        expect.assertions(3);
        expect(actions[0].type).toEqual("GET_USERS");
        expect(actions[1].type).toEqual("USERS_ERROR");
        expect(actions[1].payload.error).toEqual("Something bad happened :(");
      }
    });
  });
});
