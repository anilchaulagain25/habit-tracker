export class HabitFormModel {
    constructor(obj) {
        obj = obj || {};
        this.Title = obj.Title || "";
        this.Id = obj.Id || "";
        this.Description = obj.Description || "";
        this.Time = obj.Time || 0;
        this.Period = obj.Period || "D";
        this.Done = obj.Done || 0;
    }
}