module.exports = {
  "plugins": [],
  "recurse": true,
  "recurseDepth": 10,
  "source": {
    "include": ["src"]
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
  },
  "opts": {
    "recurse": true,
    "destination": "docs",
    "readme": "README.md",
    "template": "node_modules/minami",
  }
}
