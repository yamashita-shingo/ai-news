import critic from '../../.agents/skills/news-comment-critic/profile';
import expert from '../../.agents/skills/news-comment-expert/profile';
import reader from '../../.agents/skills/news-comment-reader/profile';

export const commentators = [critic, expert, reader] as const;
