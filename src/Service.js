export class Service {
    LOCAL_STORAGE_KEY = "habits";

    getExistingHabits() {
        const result = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        if (result) return JSON.parse(result);
        else return [];
    }
    setExistingHabits(arr) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(arr));
    }
}