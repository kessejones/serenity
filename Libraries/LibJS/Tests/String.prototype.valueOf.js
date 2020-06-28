load("test-common.js");

try {
    assert(String.prototype.toString.length === 0)
    assert("".valueOf() === "");
    assert("hello friends".valueOf() === "hello friends");

    console.log("PASS");
} catch (e) {
    console.log("FAIL: " + e);
}
