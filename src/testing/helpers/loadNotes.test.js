import { loadNotes } from "../../helpers/loadNotes"

describe('Testing on loadNotes helper', () => {

    test('should to return 3 pos and type Array', async() => {
        const notes =await loadNotes('AR632504');
        expect(notes.length).toBe(3);
        expect(typeof notes).toBe('object');
    });
})