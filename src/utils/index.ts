import * as JSON5 from 'json5';
export type QueryValue = string | boolean | null;
export type Query = { [prop: string]: Array<string> | QueryValue };

const specialValues: { [prop: string]: QueryValue } = {
    null: null as null,
    true: true,
    false: false,
};

export function parseQuery(query: string): Query {
    if (query[0] !== '?')
        throw new SyntaxError("A valid query string passed to parseQuery should begin with '?'");

    query = query.substr(1);
    if (!query)
        return {};

    if (query[0] === '{' && query.substr(-1) === '}')
        return JSON5.parse(query);

    const args = query.split('&');
    const result: Query  = {};

    args.forEach((arg) => {
        const idx = arg.indexOf('=');

        if (idx >= 0) {
            let name = arg.substr(0, idx);
            let value: QueryValue = decodeURIComponent(arg.substr(idx + 1));

            if (specialValues.hasOwnProperty(value))
                value = specialValues[value];

            if (name.substr(-2) === '[]') {
                name = decodeURIComponent(name.substr(0, name.length - 2));

                if (!Array.isArray(result[name]))
                    result[name] = [];
                (result[name] as Array<QueryValue>).push(value);
            } else {
                name = decodeURIComponent(name);
                result[name] = value;
            }
        } else {
            if (arg[0] === '-')
                result[decodeURIComponent(arg.substr(1))] = false;
            else if (arg[0] === '+')
                result[decodeURIComponent(arg.substr(1))] = true;
            else
                result[decodeURIComponent(arg)] = true;
        }
    });

    return result;
}

export function stringifyQuery(query: Query): string {
    if (Object.values(query).some((value) => typeof value === 'object' && !Array.isArray(value)))
        return '?' + JSON5.stringify(query);

    return '?' + Object.keys(query).map((key) => {
        const value = query[key];

        if (Array.isArray(value))
        return value.map((subValue) => `${key}[]=${subValue}`).join('&');
        else if (value === true)
            return `${key}`;
        else if (value === false || value === null)
            return `${key}=${value}`;
        else
            return `${key}=${query[key] as string}`;
        // if (Array.isArray(value))
        //     return value.map((subValue) => `${encodeURIComponent(key)}[]=${encodeURIComponent(subValue)}`).join('&');
        // else if (value === true)
        //     return `${encodeURIComponent(key)}`;
        // else if (value === false || value === null)
        //     return `${encodeURIComponent(key)}=${value}`;
        // else
        //     return `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`;
    }).join('&');
}
