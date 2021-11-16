interface StringParsingAPI {
  removeSpecialChars: GenericFunction<void, StringParsingAPI>;
  removeAccentuation: GenericFunction<void, StringParsingAPI>;
  parsed: GenericFunction<void, string>;
}
