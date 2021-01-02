import { types } from "../../types/types";

describe("types testing", () => {
  test("should to exam the object", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[ui] Set Error",
      uiRemoveError: "[ui] Remove Error",

      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      showSidebar: "[UI] Show sidebar",
      hideSidebar: "[UI] Hide sidebar ",

      notesAddNew: "[Notes] New note",
      notesLoad: "[Notes] Load notes",
      notesActive: "[Notes] Set active note",
      notesUpdate: "[Notes] Update notes",
      notesFileUrl: "[Notes] Update image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout clean",
    });
  });
});
