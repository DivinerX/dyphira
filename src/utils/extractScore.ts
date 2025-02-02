export const extractScore = (rankingString: string) => {
  const cleanedString = rankingString?.replace(/^```json\n|```$/g, "");
  try {
    return {
      type: "json",
      content: JSON.parse(cleanedString),
      raw: cleanedString,
    };
  } catch {
    return {
      type: "text",
      content: cleanedString,
      raw: cleanedString,
    };
  }
};

