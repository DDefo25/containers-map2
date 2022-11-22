export default class Settings {
    constructor() {
        this.default = new Map([
            ["theme", "dark"],
            ["music", "trance"],
            ["difficulty", "easy"],
        ]);

        this.users = new Map();

        this.values = new Map([
            ["theme", new Set(["dark", "light", "gray"])],
            ["music", new Set(["trance", "pop", "rock", "chillout", "off"])],
            ["difficulty", new Set(["easy", "normal", "hard", "nightmare"])],
        ]);
    }

    add(setting, value) {
        if (this.values.has(setting) && this.values.get(setting).has(value)) {
            this.users.set(setting, value);
        } else if (!this.values.has(setting)) {
            throw new Error("Unknown setting");
        } else if (!this.values.get(setting).has(value)) {
            throw new Error("Incorrect value");
        }
    }

    settings() {
        const result = this.default;
        this.users.forEach((value, setting) => {
            result.set(setting, value);
        });
        return result;
    }
}
