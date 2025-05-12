module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("nodes", function (collection) {
        return collection.getFilteredByGlob("src/jungle/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "docs",
            includes: "_includes",
            data: "_data"
        }
    };
};