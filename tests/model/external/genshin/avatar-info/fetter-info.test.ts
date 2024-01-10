import { fetterInfoSchema } from "../../../../../src/model/external/genshin/avatar-info/fetter-info";

test('standard behaviour parsing', () => {
    const input = {
        expLevel: 10,
    }

    const parsed = fetterInfoSchema.parse(input);

    expect(parsed).toEqual(input);
});

test('out of range value for level', () => {
    const inputOver = {
        expLevel: 11,
    }

    expect(() => fetterInfoSchema.parse(inputOver)).toThrow();

    const inputUnder = {
        expLevel: -1,
    }

    expect(() => fetterInfoSchema.parse(inputUnder)).toThrow();
});

test('lack/extra properties', () => {
    const inputLack = {
    }

    expect(() => fetterInfoSchema.parse(inputLack)).toThrow();

    const inputExtra = {
        expLevel: 10,
        extra: 'extra',
    }

    
    expect(() => fetterInfoSchema.parse(inputExtra)).not.toThrow();
});