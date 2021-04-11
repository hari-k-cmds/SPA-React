import userReducer from "./../userReducer";

describe("users Reducer", () => {
    const initialState = {
        users: [],
        loading: false
    };

    it("returns the initial state correctly", () => {
        const reducer = userReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    });

    it("handles GET_USERS loading as expected", () => {
        const reducer = userReducer(initialState, { type: "GET_USERS", loading: true });
        expect(reducer.loading).toBeTruthy();
    });
    it("handles USERS_ERROR as expected", () => {
        const reducer = userReducer(initialState, { type: "USERS_ERROR", loading: false });
        expect(reducer.loading).toBeFalsy();
    });

    it("handles GET_USERS FULFILLED as expected", () => {
        const reducer = userReducer(initialState, {
            type: "GET_USERS",
            loading: false,
            payload:
                [
                    {
                        "id": 2,
                        "email": "janet.weaver@reqres.in",
                        "first_name": "Janet",
                        "last_name": "Weaver",
                        "avatar": "https://reqres.in/img/faces/2-image.jpg"
                    }
                ]

        });

        expect(reducer).toEqual({
            users: [
                {
                    "id": 2,
                    "email": "janet.weaver@reqres.in",
                    "first_name": "Janet",
                    "last_name": "Weaver",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                }
            ],
            loading: false,
        });
    });
});