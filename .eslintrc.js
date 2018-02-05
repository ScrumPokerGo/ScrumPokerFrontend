module.exports = {
    extends: ["airbnb-base", "plugin:vue/recommended", "prettier"],
    plugins: ["vue", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }]
    }
}
