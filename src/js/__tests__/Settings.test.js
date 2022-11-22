import Settings from "../Settings";

test("Получение пользовательских настроек", () => {
    const expecting = new Map([
        ["theme", "dark"],
        ["music", "rock"],
        ["difficulty", "easy"],
    ]);
    const set1 = new Settings();
    set1.add("music", "rock");
    expect(set1.settings()).toEqual(expecting);
});

test("Добавление пользовательской настройки", () => {
    const expecting = new Map([
        ["music", "rock"],
    ]);
    const set1 = new Settings();
    set1.add("music", "rock");
    expect(set1.users).toEqual(expecting);
});

test.each([
    ["Неизвестное имя настройки", ["background", "dark"], new Error("Unknown setting")],
    ["Некорректное значение настройки", ["theme", "white"], new Error("Incorrect value")],
])(
    ("test %s with %s"),
    (_, params, error) => {
        function addSetting() {
            const set1 = new Settings();
            set1.add(...params);
        }
        expect(addSetting).toThrow(error);
    },
);
