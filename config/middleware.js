module.exports = {
    //...
    settings: {
      parser: {
        jsonLimit: "200mb",
      },
      cache: {
        enabled: true,
        models: [
          "alphabet-index",
          "blogs",
          "family-index",
          "setting-footer",
          "youtube"
        ],
      },
      cors: {
        enabled: true,
        origin: ['*']
      },
    },
  };