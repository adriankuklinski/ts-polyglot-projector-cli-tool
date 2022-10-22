import { Operation } from "../config";
import Projector from "../projector";

function getData() {
    return {
        projector: {
            "/": {
                "foo": "bar1",
                "baz": "zap",
            },
            "/foo": {
                "foo": "bar2",
            },
            "/foo/bar": {
                "foo": "bar3",
            },
        }
    };
}

function getProjector(pwd: string): Projector {
    return new Projector({
        args: [],
        operation: Operation.Print,
        pwd,
        config: "Hello Squirrel",
    }, getData());
}

test("getValueAll", function() {
    const proj = getProjector("/foo/bar");

    expect(proj.getValueAll()).toEqual({
        "baz": "zap",
        "foo": "bar3",
    });
});
