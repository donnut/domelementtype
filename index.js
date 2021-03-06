exports.elements = {
    Text: "text",
    Directive: "directive",
    Comment: "comment",
    Script: "script",
    Style: "style",
    Tag: "tag",
    CDATA: "cdata",
    Doctype: "doctype",
    isTag: function (elem) {
        return elem.type === "tag" || elem.type === "script" || elem.type === "style";
    }
};
