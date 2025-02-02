import config from "@commitlint/config-conventional";

const defaultTypeEnum = config.rules["type-enum"][2];

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", [...defaultTypeEnum, "impr"]],
  },
};
