export enum Sentiment {
  Positive = "positive",
  Negative = "negative",
  Neutral = "neutral",
}

export interface AnalyzeCommentResponse {
  sentiment: Sentiment;
}
