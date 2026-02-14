import { useState } from "react";

export const MOCK_TOPICS: TopicData[] = [
  {
    id: "1",
    topic: "消しゴム",
    example:
      "私は消しゴムです。自分の身を削ってでも、周りのミスを帳消しにし、正しい方向へ導く貢献心があるからです。",
  },
  {
    id: "2",
    topic: "スマホ",
    example:
      "私はスマホです。多機能でどんな状況にも対応でき、常に最新の情報を取り入れてアップデートし続ける向上心があるからです。",
  },
  {
    id: "3",
    topic: "信号機",
    example:
      "私は信号機です。組織の流れをスムーズにし、時には立ち止まらせて安全を守る、冷静な判断力があるからです。",
  },
];

type TopicData = {
  id: string;
  topic: string;
  example: string;
};

export default function useTopic() {
  const [topicData, setTopicData] = useState<TopicData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopic = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // APIからお題データを取得する処理（ここではモックデータを使用）
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTopicData(MOCK_TOPICS[Math.floor(Math.random() * MOCK_TOPICS.length)]);
    } catch {
      setError("Failed to fetch topic data");
    } finally {
      setIsLoading(false);
    }
  };

  const clearTopic = () => {
    setTopicData(null);
    setError(null);
    setIsLoading(false);
  };

  return { topicData, isLoading, error, fetchTopic, clearTopic };
}
